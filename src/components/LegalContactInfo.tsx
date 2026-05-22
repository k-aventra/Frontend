import {
  BRAND_EMAIL,
  BRAND_PHONE,
  BRAND_PHONE_DISPLAY,
  BRAND_URL,
  COMPANY_ADDRESS_LINES,
  COMPANY_LEGAL_NAME,
} from '@/brand'

export function LegalContactInfo() {
  return (
    <ul>
      <li>
        <strong>{COMPANY_LEGAL_NAME}</strong>
        <br />
        {COMPANY_ADDRESS_LINES.map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </li>
      <li>
        By email: <a href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a>
      </li>
      <li>
        By phone: <a href={`tel:${BRAND_PHONE}`}>{BRAND_PHONE_DISPLAY}</a>
      </li>
      <li>
        Website:{' '}
        <a href={BRAND_URL} rel="external nofollow noopener" target="_blank">
          {BRAND_URL}
        </a>
      </li>
    </ul>
  )
}
