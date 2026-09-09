import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../theme'
import {
  readAnalyticsConsent,
  setAnalyticsConsent,
} from '../lib/analyticsConsent'

const ConsentArea = styled.aside`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
  background: ${colors.background};
  color: ${colors.primaryText};
  border-top: 2px solid ${colors.accent};
  padding: 12px 20px;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0;

  .consent-inner {
    max-width: 1100px;
    margin: 0 auto;
  }
  section {
    max-height: 65dvh;
    overflow-y: auto;
    padding: 4px;
  }
  h2 {
    font-size: 22px;
    line-height: 1.3;
    font-weight: 700;
    text-align: left;
  }
  p {
    font-size: 16px;
    opacity: 1;
    margin: 8px 0 12px;
  }
  button {
    min-height: 44px;
    padding: 10px 16px;
    border: 1px solid ${colors.accent};
    border-radius: 4px;
    background: ${colors.accent};
    color: #fff;
    font: inherit;
    font-weight: 600;
    cursor: pointer;
    white-space: normal;
    overflow-wrap: anywhere;
  }
  button:hover {
    background: ${colors.button.primary.hover.backgroundColor};
  }
  button:focus-visible,
  h2:focus {
    outline: 3px solid ${colors.primaryText};
    outline-offset: 3px;
  }
  .consent-actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    max-width: 520px;
  }
  .consent-settings {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
  }
  .consent-settings button {
    background: transparent;
    color: ${colors.accent};
  }
  .consent-settings button:hover {
    background: #e6f7ff;
  }
  @media (max-width: 480px) {
    padding: 10px 12px;
  }
`

export default function CookieConsent() {
  const [choice, setChoice] = useState(readAnalyticsConsent)
  const [open, setOpen] = useState(() => readAnalyticsConsent() === 'unknown')
  const [notSaved, setNotSaved] = useState(false)
  const heading = useRef(null)
  const settings = useRef(null)
  const focusOnOpen = useRef(false)
  const panel = useRef(null)
  const spacer = useRef(null)

  useEffect(() => {
    const resize = () => {
      spacer.current.style.height = `${panel.current.offsetHeight}px`
    }
    resize()
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(resize)
    observer.observe(panel.current)
    return () => observer.disconnect()
  }, [open, notSaved])

  useEffect(() => {
    const sync = () => {
      const next = readAnalyticsConsent()
      setChoice(next)
      if (next === 'unknown') setOpen(true)
    }
    window.addEventListener('analytics-consent-change', sync)
    window.addEventListener('storage', sync)
    window.addEventListener('pageshow', sync)
    return () => {
      window.removeEventListener('analytics-consent-change', sync)
      window.removeEventListener('storage', sync)
      window.removeEventListener('pageshow', sync)
    }
  }, [])

  useEffect(() => {
    if (open && focusOnOpen.current) {
      heading.current?.focus()
      focusOnOpen.current = false
    }
  }, [open])

  const close = () => {
    setOpen(false)
    settings.current?.focus()
  }

  const choose = (value) => {
    const result = setAnalyticsConsent(value)
    setChoice(result.analytics)
    setNotSaved(!result.persisted)
    close()
  }

  return (
    <>
      <div ref={spacer} aria-hidden="true" />
      <ConsentArea
        ref={panel}
        aria-label="Cookie consent"
        onKeyDown={(event) => {
          if (event.key === 'Escape') close()
        }}
      >
        <div className="consent-inner">
          <section
            id="analytics-cookie-settings"
            aria-labelledby="analytics-cookie-heading"
            hidden={!open}
          >
            <h2 id="analytics-cookie-heading" ref={heading} tabIndex={-1}>
              Analytics cookies
            </h2>
            <p>
              Allow analytics about page visits and inventor interactions.
              Advertising consent stays denied.
            </p>
            <p>
              Current choice:{' '}
              {choice === 'granted'
                ? 'analytics accepted'
                : choice === 'denied'
                  ? 'analytics rejected'
                  : 'not set'}
              .
            </p>
            <div className="consent-actions">
              <button type="button" onClick={() => choose('granted')}>
                Accept analytics
              </button>
              <button type="button" onClick={() => choose('denied')}>
                Reject analytics
              </button>
            </div>
          </section>
          <div className="consent-settings">
            <button
              type="button"
              ref={settings}
              aria-expanded={open}
              aria-controls="analytics-cookie-settings"
              onClick={() => {
                if (open) heading.current?.focus()
                else {
                  focusOnOpen.current = true
                  setOpen(true)
                }
              }}
            >
              Cookie settings
            </button>
            {open && (
              <button type="button" onClick={close}>
                Close settings
              </button>
            )}
          </div>
          {notSaved && (
            <p role="status">
              Your browser could not save this choice permanently. It applies to
              this tab.
            </p>
          )}
        </div>
      </ConsentArea>
    </>
  )
}
