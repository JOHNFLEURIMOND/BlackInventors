import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Policy = styled.article`
  width: min(100% - 2rem, 52rem);
  margin: 0 auto;
  padding: 3rem 0 5rem;
  color: #1f2937;

  header {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(15, 23, 42, 0.14);
  }

  h1,
  h2 {
    color: #111827;
  }

  h1 {
    margin: 0 0 0.5rem;
    font-size: clamp(2rem, 7vw, 3.5rem);
    line-height: 1.05;
  }

  h2 {
    margin: 2rem 0 0.65rem;
    font-size: 1.35rem;
  }

  p,
  li {
    font-size: 1rem;
    line-height: 1.7;
  }

  ul {
    padding-left: 1.4rem;
  }

  a {
    color: #1f4f7a;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.2em;
  }
`

export default function PrivacyPolicy() {
  return (
    <Policy>
      <header>
        <h1>Privacy policy</h1>
        <p>Effective September 9, 2026</p>
      </header>

      <p>
        This policy explains how Black Inventors handles information when you
        browse the archive. You can use the site without allowing analytics.
      </p>

      <section>
        <h2>Analytics and your choice</h2>
        <p>
          Analytics is off unless you select <strong>Accept analytics</strong>.
          If you accept, the site loads its Google Tag Manager container, which
          sends approved events only to the site&apos;s Google Analytics 4
          property. Advertising storage, ad personalization, and Google signals
          remain disabled.
        </p>
        <p>
          Analytics events may include the page path and title, the previous
          page, and interactions with inventor, search, filter, and timeline
          features. Page URLs exclude query strings and fragments, and search
          text is not sent to Google Analytics.
        </p>
      </section>

      <section>
        <h2>Cookies and local storage</h2>
        <p>
          The site stores your analytics choice in your browser under
          <code> analytics-consent-v1</code>. After opt-in, Google Analytics may
          set cookies whose names begin with <code>_ga</code>. Selecting
          <strong> Reject analytics</strong> disables analytics, removes those
          cookies where the browser permits it, and reloads the page when
          needed. Rejecting analytics does not limit archive features.
        </p>
        <p>
          Use the <strong>Cookie settings</strong> control on any page to review
          or change your choice.
        </p>
      </section>

      <section>
        <h2>Service providers and retention</h2>
        <p>
          Google processes consented analytics data as our analytics service
          provider. The hosting provider may also process ordinary request and
          security logs needed to deliver the site. These providers handle data
          under their own terms and retention controls. We do not use the site
          to sell personal information or send data to advertising platforms.
        </p>
        <p>
          Learn more in the{' '}
          <a href="https://policies.google.com/privacy">
            Google Privacy Policy
          </a>
          .
        </p>
      </section>

      <section>
        <h2>External links</h2>
        <p>
          Links to external websites are governed by those sites&apos; privacy
          practices. Review their policies before providing information.
        </p>
      </section>

      <section>
        <h2>Contact and policy changes</h2>
        <p>
          This policy may change when the site or its data practices change. The
          effective date above will be updated. For privacy questions, use the{' '}
          <a href="https://johnfleurimond.com/contact">contact page</a>.
        </p>
        <p>
          <Link to="/">Return to Black Inventors</Link>
        </p>
      </section>
    </Policy>
  )
}
