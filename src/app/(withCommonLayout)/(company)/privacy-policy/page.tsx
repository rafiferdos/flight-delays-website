import { cn } from "@/lib/utils"
import React from "react"

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 text-black">
      <h1 className="mb-4 text-3xl font-extrabold">Privacy Policy</h1>

      <em className="mb-6 block">Effective Date: 17 July 2025</em>

      <Section title="1. Who We Are">
        <p>
          We are Flight Delay Claims Ltd, a UK-based lead generation company. We
          collect your personal data through our website and securely share it
          with regulated legal service providers who may contact you to progress
          your potential flight compensation claim.
        </p>
        <p className="mt-4">
          We act as the data controller for the personal data we collect and
          only process that data for the purposes described in this Privacy
          Policy.
        </p>
      </Section>

      <Section title="2. What Personal Data We Collect">
        <p>
          We may collect and process the following categories of data when you
          use our website:
        </p>

        <h3 className="mt-4 font-semibold">Personal & Contact Information:</h3>
        <ul className="mt-2 list-disc pl-6">
          <li>Full name</li>
          <li>Email address</li>
          <li>Telephone number</li>
          <li>Date of birth</li>
          <li>Postal address (if provided)</li>
        </ul>

        <h3 className="mt-4 font-semibold">Flight Details:</h3>
        <ul className="mt-2 list-disc pl-6">
          <li>Airline</li>
          <li>Flight number</li>
          <li>Departure and arrival airports</li>
          <li>Scheduled and actual flight times</li>
          <li>Booking reference</li>
          <li>Date of travel</li>
          <li>Nature and duration of delay</li>
        </ul>

        <h3 className="mt-4 font-semibold">
          Additional Passenger Information (optional):
        </h3>
        <ul className="mt-2 list-disc pl-6">
          <li>Names and dates of birth of other passengers</li>
        </ul>

        <h3 className="mt-4 font-semibold">Technical & Consent Information:</h3>
        <ul className="mt-2 list-disc pl-6">
          <li>IP address</li>
          <li>Browser/device type</li>
          <li>Submission time/date</li>
          <li>Consent to terms and privacy policy</li>
        </ul>

        <p className="mt-4">
          We do not collect special category (sensitive) data such as health,
          ethnicity, or religious beliefs.
        </p>
      </Section>

      <Section title="3. How We Use Your Personal Data">
        <p>We use your personal data for the following purposes:</p>
        <ul className="mt-2 list-disc pl-6">
          <li>To assess your eligibility for flight delay compensation</li>
          <li>
            To pass your details to a regulated legal firm to progress your
            claim
          </li>
          <li>
            To contact you regarding your enquiry or to request further
            information
          </li>
          <li>To analyse and improve our website and user experience</li>
          <li>To comply with legal and regulatory obligations</li>
        </ul>
        <p className="mt-4">
          We do not use your data for automated decision-making or profiling.
        </p>
      </Section>

      <Section title="4. Legal Basis for Processing">
        <p>Our legal basis for processing your data may include:</p>
        <ul className="mt-2 list-disc pl-6">
          <li>
            <strong>Consent</strong> – You provide explicit consent when
            submitting your details.
          </li>
          <li>
            <strong>Legitimate Interests</strong> – It is in your interest and
            ours to connect you with a solicitor who can assist with your claim.
          </li>
          <li>
            <strong>Contract</strong> – Processing your enquiry is a step toward
            forming a legal services contract.
          </li>
          <li>
            <strong>Legal Obligation</strong> – We may need to retain or process
            data for legal or regulatory compliance.
          </li>
        </ul>
      </Section>

      <Section title="5. Who We Share Your Data With">
        <p>We may share your personal data with:</p>
        <ul className="mt-2 list-disc pl-6">
          <li>
            Specialist legal service providers for the purpose of pursuing your
            claim
          </li>
          <li>
            Trusted IT service providers who support our systems and website
          </li>
          <li>Regulatory or public authorities when required by law</li>
        </ul>
        <p className="mt-4">
          We do not sell, rent, or share your data with third parties for
          marketing purposes.
        </p>
      </Section>

      <Section title="6. International Transfers">
        <p>
          Some service providers may process or store your data outside the UK.
          Where applicable, we ensure appropriate safeguards are in place, such
          as:
        </p>
        <ul className="mt-2 list-disc pl-6">
          <li>UK adequacy decisions</li>
          <li>Standard Contractual Clauses (SCCs)</li>
          <li>Other legal safeguards under UK GDPR</li>
        </ul>
      </Section>

      <Section title="7. Data Retention">
        <p>We retain personal data only as long as necessary:</p>
        <ul className="mt-2 list-disc pl-6">
          <li>Enquiry/lead data: up to 3 months</li>
          <li>Email communications: up to 12 months</li>
          <li>Website analytics (non-identifiable): up to 26 months</li>
        </ul>
        <p className="mt-4">
          We securely delete or anonymise data once retention periods expire.
        </p>
      </Section>

      <Section title="8. Your Data Protection Rights">
        <p>You have the following rights under UK data protection law:</p>
        <ul className="mt-2 list-disc pl-6">
          <li>Access your personal data</li>
          <li>Rectify inaccurate or incomplete data</li>
          <li>Erase your data ("right to be forgotten")</li>
          <li>Restrict or object to processing</li>
          <li>Data portability (where applicable)</li>
          <li>Withdraw your consent at any time</li>
        </ul>
        <p className="mt-4">
          To exercise your rights, contact:
          <br />
          📧 info@flight-delay-claims.com
        </p>
        <p className="mt-4">
          You also have the right to lodge a complaint with the UK Information
          Commissioner's Office (ICO):
          <br />
          🌐{" "}
          <a
            href="https://ico.org.uk/make-a-complaint"
            className="text-blue-600 underline"
            target="_blank"
          >
            https://ico.org.uk/make-a-complaint
          </a>
        </p>
      </Section>

      <Section title="9. Data Security">
        <p>We apply industry-standard security measures, including:</p>
        <ul className="mt-2 list-disc pl-6">
          <li>SSL (Secure Socket Layer) encryption</li>
          <li>Access controls for internal systems</li>
          <li>Regular system updates and audits</li>
          <li>Data minimisation and limited retention practices</li>
        </ul>
      </Section>

      <Section title="10. Cookies and Analytics">
        <p>
          We use cookies and analytics (e.g., Google Analytics) to improve
          website performance. These tools do not collect identifiable personal
          information.
        </p>
        <p className="mt-4">
          You can manage cookies via your browser settings.
        </p>
        <p className="mt-4">
          To opt out of Google Analytics tracking:
          <br />
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            className="text-blue-600 underline"
            target="_blank"
          >
            https://tools.google.com/dlpage/gaoptout
          </a>
        </p>
      </Section>

      <Section title="11. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Any significant
          changes will be posted on our website with an updated effective date.
        </p>
      </Section>

      <Section title="12. Contact Us">
        <p>For privacy-related queries, contact:</p>
        <div className="mt-4">
          <p>
            <strong>Flight Delay Claims Ltd</strong>
          </p>
          <p>
            📧 <strong>Email:</strong> info@flight-delay-claims.com
          </p>
          <p>
            🏠 <strong>Address:</strong> 6 Worrow Drive, Bicton Heath,
            Shrewsbury, Shropshire, SY3 5DJ
          </p>
        </div>
      </Section>
    </main>
  )
}

function Section({
  title,
  children,
  className
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className="mb-10">
      <h2 className={cn("mb-4 text-2xl font-extrabold", className)}>{title}</h2>
      {children}
    </section>
  )
}
