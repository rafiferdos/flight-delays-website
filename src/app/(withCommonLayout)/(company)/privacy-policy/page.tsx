import { cn } from "@/lib/utils"
import React from "react"

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 text-black">
      <h1 className="mb-4 text-3xl font-extrabold">Privacy Policy</h1>

      <em className="mb-6 block">Last updated: 06/2025</em>

      <p className="mb-6">
        At Flight Delay Claims Ltd (15981515), we are committed to protecting
        and respecting your privacy. This Privacy Policy explains how we
        collect, use, disclose, and safeguard your personal data when you visit
        our website or use our services. We aim to comply with the UK General
        Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and
        the guidance of the Information Commissioner’s Office (ICO).
      </p>

      <p className="mb-6">
        Please read this policy carefully to understand our practices regarding
        your personal data.
      </p>

      <Section title="1. Who We Are">
        <p>
          <strong>Flight Delay Claims Ltd (15981515)</strong> is a company
          dedicated to helping passengers claim compensation for flight delays
          under UK and EU law. For the purposes of data protection legislation,
          we act as the <strong>data controller</strong> for your personal data.
        </p>
        <p className="mt-4">
          <strong>Contact Details:</strong>
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Registered Address:</strong> 2 Charlesworth Court, Knights
            Way, Battlefield Enterprise Park, Shrewsbury, Shropshire, SYI 3AB
          </li>
          <li>
            <strong>Email:</strong> info@flight-delay-claims.com
          </li>
        </ul>
      </Section>

      <Section title="2. What Information We Collect">
        <p>
          We collect and process personal data necessary to provide our flight
          delay compensation services. This includes:
        </p>
        <h3 className="mt-4 font-semibold">Personal Information</h3>
        <ul className="mt-2 list-disc pl-6">
          <li>
            <strong>Identity Details:</strong> Name, email address, postal
            address, and phone number.
          </li>
          <li>
            <strong>Flight Information:</strong> Airline, flight number, booking
            reference, flight date, and details of the delay.
          </li>
          <li>
            <strong>Payment Details:</strong> Bank details for processing
            compensation payments (collected only when necessary).
          </li>
          <li>
            <strong>Additional Information:</strong> Any other information you
            voluntarily provide through our online forms, email, or telephone
            communications.
          </li>
        </ul>
        <h3 className="mt-4 font-semibold">Technical and Usage Information</h3>
        <ul className="mt-2 list-disc pl-6">
          <li>
            <strong>Automatically Collected Data:</strong> Your IP address,
            browser type, device information, time zone settings, and website
            usage details (e.g. page visits, referral sources).
          </li>
          <li>
            <strong>Cookies and Similar Technologies:</strong> We may use
            cookies to enhance your experience and to collect anonymous
            analytics data.
          </li>
        </ul>
      </Section>

      <Section title="3. How We Collect Your Data">
        <p>We collect your personal data through:</p>
        <ul className="mt-2 list-disc pl-6">
          <li>
            <strong>Direct Interactions:</strong> When you fill in our claim
            form, contact us via email, telephone, or other means.
          </li>
        </ul>
      </Section>

      <Section title="4. How We Use Your Data">
        <p>We use the information we collect for the following purposes:</p>
        <ul className="mt-2 list-disc pl-6">
          <li>
            <strong>Claim Processing:</strong> To assess and process your flight
            delay compensation claim.
          </li>
          <li>
            <strong>Communication:</strong> To contact you regarding your claim,
            provide updates, and respond to your inquiries.
          </li>
          <li>
            <strong>Legal and Regulatory Compliance:</strong> To comply with our
            legal obligations and to safeguard our rights.
          </li>
          <li>
            <strong>Service Improvement:</strong> For internal business
            operations, including data analysis, research, and enhancing our
            services.
          </li>
        </ul>
        <p className="mt-2">
          We will never sell your personal data to third parties.
        </p>
      </Section>

      <Section title="5. Lawful Basis for Processing">
        <p>
          We process your personal data on one or more of the following legal
          bases:
        </p>
        <ul className="mt-2 list-disc pl-6">
          <li>
            <strong>Contractual Necessity:</strong> To fulfil our obligations in
            processing your claim.
          </li>
          <li>
            <strong>Legal Obligation:</strong> To comply with applicable laws
            and regulatory requirements.
          </li>
          <li>
            <strong>Legitimate Interests:</strong> For the purposes of improving
            our services, fraud prevention, and service administration.
          </li>
          <li>
            <strong>Consent:</strong> Where you have provided explicit consent.
          </li>
        </ul>
      </Section>

      <Section title="6. How We Share Your Data">
        <p>Your personal data may be shared with:</p>
        <ul className="mt-2 list-disc pl-6">
          <li>
            <strong>Airlines and Relevant Authorities:</strong> To pursue your
            flight delay claim on your behalf.
          </li>
          <li>
            <strong>Service Providers:</strong> Such as IT support, legal
            advisors, and payment processors who assist us in delivering our
            services.
          </li>
          <li>
            <strong>Regulatory and Law Enforcement Bodies:</strong> When
            required by law or to protect our rights and the safety of our
            users.
          </li>
          <li>
            <strong>Third-Party Partners:</strong> In the context of marketing
            communications or analytics, but only with your consent or under
            strict data protection agreements.
          </li>
        </ul>
        <p className="mt-2">
          Any third parties with whom we share your data are contractually
          obligated to protect it in accordance with UK data protection laws.
        </p>
      </Section>

      <Section title="7. International Data Transfers">
        <p>
          We may transfer your personal data outside the UK or European Economic
          Area (EEA) when necessary. In such cases, we ensure that appropriate
          safeguards are in place (e.g., standard contractual clauses) to
          protect your data in accordance with applicable data protection
          legislation.
        </p>
      </Section>

      <Section title="8. Data Retention">
        <p>We retain your personal data only for as long as necessary to:</p>
        <ul className="mt-2 list-disc pl-6">
          <li>Process your flight delay claim and provide our services.</li>
          <li>Comply with our legal, accounting, or reporting obligations.</li>
        </ul>
        <h3 className="mt-4 font-semibold">Claim Data:</h3>
        <p>
          Typically retained for 3 months after the conclusion of your claim.
        </p>
        <h3 className="mt-4 font-semibold">Financial Data:</h3>
        <p>Retained for the period required by tax and legal obligations.</p>
        <p className="mt-2">
          Once your data is no longer required, it will be securely deleted or
          anonymized.
        </p>
      </Section>

      <Section title="9. Your Data Protection Rights">
        <p>
          Under UK GDPR, you have the following rights regarding your personal
          data:
        </p>
        <ul className="mt-2 list-disc pl-6">
          <li>
            <strong>Right of Access:</strong> Request a copy of the personal
            data we hold about you.
          </li>
          <li>
            <strong>Right to Rectification:</strong> Ask us to correct any
            inaccurate or incomplete data.
          </li>
          <li>
            <strong>Right to Erasure:</strong> Request deletion of your personal
            data under certain circumstances.
          </li>
          <li>
            <strong>Right to Restrict Processing:</strong> Ask us to limit the
            processing of your data.
          </li>
          <li>
            <strong>Right to Data Portability:</strong> Request your personal
            data in a structured, commonly used, and machine-readable format.
          </li>
          <li>
            <strong>Right to Object:</strong> Object to our processing of your
            personal data, particularly for direct marketing purposes.
          </li>
          <li>
            <strong>
              Rights related to Automated Decision Making and Profiling:
            </strong>{" "}
            Request human intervention if decisions affecting you are made
            solely on automated processes.
          </li>
        </ul>
        <p className="mt-2">
          To exercise any of these rights, please contact us using the details
          provided in Section 13. You also have the right to lodge a complaint
          with the ICO if you believe our processing of your data violates your
          rights.
        </p>
      </Section>

      <Section title="10. How We Protect Your Data">
        <p>
          We are committed to ensuring your personal data is secure. We have
          implemented appropriate technical and organizational measures to
          protect your data against unauthorized access, accidental loss, or
          destruction. These measures include:
        </p>
        <ul className="mt-2 list-disc pl-6">
          <li>Data encryption on secure servers.</li>
          <li>Protection by access controls and firewalls.</li>
          <li>
            Strict access controls ensuring that only authorized personnel have
            access to your data.
          </li>
        </ul>
      </Section>

      <Section title="11. Cookies">
        <p>We use cookies and similar technologies on our website to:</p>
        <ul className="mt-2 list-disc pl-6">
          <li>Enhance your browsing experience.</li>
          <li>
            Collect anonymous analytical data to help us improve our site.
          </li>
          <li>Personalize content and offer social media features.</li>
        </ul>
        <p className="mt-2">
          You can control or delete cookies via your web browser settings.
        </p>
      </Section>

      <Section title="12. Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page along with an updated “Last Updated” date. We
          encourage you to review this policy periodically to stay informed
          about how we are protecting your personal data.
        </p>
      </Section>

      <Section title="13. Contact Us">
        <p>
          If you have any questions, comments, or concerns about this Privacy
          Policy or our data processing practices, or if you wish to exercise
          your data protection rights, please contact us at:
        </p>
        <ul className="mt-2 list-none space-y-1 pl-6">
          <li>
            <strong>Email:</strong> info@flight-delay-claims.com
          </li>
          <li>
            <strong>Postal Address:</strong> 2 Charlesworth Court, Knights Way,
            Battlefield Enterprise Park, Shrewsbury, Shropshire, SYI 3AB
          </li>
        </ul>
        <p className="mt-2">
          If you are unsatisfied with our response, you also have the right to
          lodge a complaint with the Information Commissioner’s Office (ICO) by
          visiting
          <br />
          <a
            href="https://www.ico.org.uk"
            className="text-blue-600 underline"
            target="_blank"
          >
            www.ico.org.uk
          </a>
        </p>
        <p className="mt-2">
          By using our website and services, you acknowledge that you have read
          and understood this Privacy Policy and agree to the collection and use
          of your personal data as described herein.
        </p>
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
