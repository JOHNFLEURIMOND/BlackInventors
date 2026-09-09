const STORAGE_KEY = 'analytics-consent-v1'
let memoryChoice = null
let initialized = false

export function readAnalyticsConsent() {
  if (typeof window === 'undefined') return 'unknown'
  if (memoryChoice !== null) return memoryChoice
  if (new URL(window.location.href).searchParams.get(STORAGE_KEY) === 'denied')
    return 'denied'

  try {
    if (window.sessionStorage.getItem(STORAGE_KEY) === 'denied') return 'denied'
    const choice = window.localStorage.getItem(STORAGE_KEY)
    return choice === 'granted' || choice === 'denied' ? choice : 'unknown'
  } catch {
    return 'unknown'
  }
}

function clearAnalyticsData() {
  if (Array.isArray(window.dataLayer)) window.dataLayer.length = 0

  try {
    const names = document.cookie
      .split(';')
      .map((cookie) => cookie.split('=')[0].trim())
    const hostname = window.location.hostname
    const domains = ['', hostname]
    const labels = hostname.split('.')
    while (labels.length > 1) {
      domains.push(`.${labels.join('.')}`)
      labels.shift()
    }
    const paths = new Set(['/'])
    let path = ''
    for (const segment of window.location.pathname.split('/').filter(Boolean)) {
      path += `/${segment}`
      paths.add(path)
      paths.add(`${path}/`)
    }
    for (const name of names.filter(
      (name) => name === '_ga' || name.startsWith('_ga_')
    )) {
      for (const domain of domains) {
        for (const cookiePath of paths) {
          document.cookie = `${name}=; Max-Age=0; Path=${cookiePath};${domain ? ` Domain=${domain};` : ''} SameSite=Lax`
        }
      }
    }
  } catch {
    return false
  }
  return true
}

export function setAnalyticsConsent(choice) {
  if (choice !== 'granted' && choice !== 'denied') {
    throw new TypeError('Analytics consent must be granted or denied')
  }
  if (typeof window === 'undefined')
    return { analytics: 'unknown', persisted: false }

  memoryChoice = choice
  let persisted = false
  let sessionDenied = false
  try {
    if (choice === 'denied') {
      window.sessionStorage.setItem(STORAGE_KEY, 'denied')
      sessionDenied = window.sessionStorage.getItem(STORAGE_KEY) === 'denied'
    } else window.sessionStorage.removeItem(STORAGE_KEY)
  } catch {
    sessionDenied = false
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, choice)
    persisted = window.localStorage.getItem(STORAGE_KEY) === choice
  } catch {
    persisted = false
  }
  const destination = new URL(window.location.href)
  if (choice === 'denied' && !persisted && !sessionDenied) {
    destination.searchParams.set(STORAGE_KEY, 'denied')
    try {
      window.history.replaceState(window.history.state, '', destination.href)
    } catch {
      window.location.replace(destination.href)
    }
  } else if (
    choice === 'granted' &&
    destination.searchParams.has(STORAGE_KEY)
  ) {
    destination.searchParams.delete(STORAGE_KEY)
    try {
      window.history.replaceState(window.history.state, '', destination.href)
    } catch {
      return setAnalyticsConsent('denied')
    }
  }
  if (choice === 'denied') clearAnalyticsData()
  window.dispatchEvent(
    new CustomEvent('analytics-consent-change', {
      detail: { analytics: choice },
    })
  )
  return { analytics: choice, persisted }
}

export function initializeAnalyticsConsent() {
  if (typeof window === 'undefined' || initialized) return
  initialized = true
  if (readAnalyticsConsent() !== 'granted') clearAnalyticsData()
  const syncConsent = () => {
    memoryChoice = null
    if (readAnalyticsConsent() !== 'granted') clearAnalyticsData()
  }
  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY || event.key === null) syncConsent()
  })
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) syncConsent()
  })
}
