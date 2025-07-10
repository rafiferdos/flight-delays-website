import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

export default function TermsConditions() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-black">
      <h1 className="mb-6 text-4xl font-extrabold">Terms and Conditions</h1>

      <p className="mb-6">
        Welcome to Flight Delay Claims Ltd! By using our services, you agree to
        the following terms and conditions. Please read them carefully before
        submitting a claim.
      </p>

      <Section title="I. Definitions and Interpretation">
        <p className="mb-2">In these Terms and Conditions:</p>
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>“Agreement”</strong> means the contract formed when you
            accept these terms upon submitting a claim.
          </li>
          <li>
            <strong>“Airline”</strong> refers to the airline responsible for the
            flight delay or cancellation.
          </li>
          <li>
            <strong>“Claim”</strong> means your request for compensation under
            EU Regulation 261/2004 or any other applicable regulation.
          </li>
          <li>
            <strong>“Compensation”</strong> refers to the amount payable by the
            Airline for your claim.
          </li>
          <li>
            <strong>“Fee”</strong> refers to the charges payable to Flight Delay
            Claims Ltd for services rendered in handling your claim.
          </li>
          <li>
            <strong>“Client”</strong> refers to the individual submitting a
            claim through our platform.
          </li>
        </ul>
      </Section>

      <Section title="II. Agreement to Provide Services" className="space-y-2">
        <p>
          By submitting a claim, you agree that Flight Delay Claims Ltd will
          handle your flight delay claim on your behalf. You authorize us to
          communicate with the airline and any other relevant third parties,
          including legal representatives, to pursue the claim. You agree to
          provide accurate and complete information to assist in the process.
        </p>

        <p>
          This Agreement becomes effective when you submit your claim and is
          governed by UK and EU laws.
        </p>
      </Section>

      <Section title="III. Our Services" className="space-y-3">
        <p>Flight Delay Claims Ltd offers the following services:</p>

        <ol className="ml-6 list-decimal space-y-1">
          <li>
            <span className="font-bold">Claim Assessment: </span>
            We will assess the likelihood of success for your claim based on the
            provided information.
          </li>
          <li>
            <span className="font-bold">Claim Submission: </span>
            If your claim is valid, we will submit it to the relevant airline
            and assist in negotiating compensation.
          </li>
          <li>
            <span className="font-bold">Legal Action (if necessary): </span>
            If the airline refuses or denies the claim, we may escalate the
            matter to legal proceedings through our legal partners.
          </li>
        </ol>
        <p>
          We do not provide legal advice directly but may refer you to our legal
          partners if the situation requires it.
        </p>
      </Section>

      <Section title="IV. Client Responsibilities" className="space-y-3">
        <p>By entering into this Agreement, you agree:</p>
        <ol className="ml-6 list-decimal space-y-1">
          <li>To provide us with accurate and complete information.</li>
          <li>To cooperate fully in the claims process.</li>
          <li>To not independently contact the airline for any action.</li>
          <li>
            To notify us immediately if you receive compensation directly from
            the airline.
          </li>
        </ol>

        <p>
          You also agree that any compensation will be paid directly to Flight
          Delay Claims Ltd. We will deduct our fee from the compensation amount
          and remit the balance to you.
        </p>
      </Section>

      <Section title="V. Fees and Payments" className="space-y-3">
        <p>Our fees are as follows:</p>

        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>No Win, No Fee:</strong> We charge a fee of{" "}
            <strong>35%</strong> of the total compensation amount if we
            successfully obtain compensation on your behalf.
          </li>
          <li>
            <strong>Direct Compensation:</strong> If you receive compensation
            directly from the airline, you are required to pay us{" "}
            <strong>35%</strong> of the compensation amount.
          </li>
          <li>
            <strong>Non-Monetary Compensation:</strong> If the airline offers
            non-monetary compensation (such as vouchers), you must pay{" "}
            <strong>35%</strong> of the estimated claim value.
          </li>
          <li>
            <strong>Legal Action Fees:</strong> In cases where legal action is
            required, our fees may increase. This will be discussed and agreed
            upon before any legal proceedings are initiated.
          </li>
        </ul>

        <p>
          Payments will be processed via electronic transfer, and you are
          responsible for ensuring your payment details are accurate.
        </p>

        <p>
          <strong>Resend Fee: </strong>
          If incorrect information is provided for payment transfer, a{" "}
          <strong>£10</strong> fee will apply.
        </p>
      </Section>

      <Section title="VI. Termination and Cancellation" className="space-y-3">
        <p>
          You have the right to terminate this Agreement within 14 days from the
          date of signing, without penalty, provided the claim has not been
          submitted to the airline. After the cancellation period, the following
          terms apply:
        </p>

        <ul className="ml-6 list-disc space-y-1">
          <li>
            If you terminate after compensation has been received, you are still
            liable for the agreed fee.
          </li>
          <li>
            If legal action has been initiated, you will be charged for any work
            completed up to the termination point, based on our hourly rate.
          </li>
        </ul>
      </Section>

      <Section title="VII. Privacy and Data Protection" className="space-y-3">
        <p>
          By submitting your claim, you consent to the processing of your
          personal data in accordance with applicable privacy laws. We will use
          this data solely for the purpose of handling your claim and may share
          it with relevant third parties, such as the airline and legal
          partners, if necessary.
        </p>

        <p>
          For further information, please refer to our{" "}
          <Link
            href="/privacy-policy"
            className="font-semibold text-indigo-700 underline"
          >
            privacy policy
          </Link>
          .
        </p>
      </Section>

      <Section title="VIII. Legal Considerations">
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Jurisdiction:</strong> Governed by UK law.
          </li>
          <li>
            <strong>Representation:</strong> You authorize us to represent you.
          </li>
          <li>
            <strong>Indemnity:</strong> You agree to indemnify us from loss due
            to incorrect information.
          </li>
        </ul>
      </Section>

      <Section title="IX. Miscellaneous Provisions">
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <strong>Severability:</strong> If any term is invalid, the rest
            remains valid.
          </li>
          <li>
            <strong>Amendments:</strong> We reserve the right to update these
            terms at any time.
          </li>
        </ul>
      </Section>

      <Section title="X. Contact Information">
        <ul className="ml-6 list-disc space-y-1">
          <li>
            <span className="font-bold">Email:</span> info@flightdelayclaims.com
          </li>
          <li>
            <span className="font-bold">Phone:</span> 0330 043 5407
          </li>
          <li>
            <span className="font-bold">Address:</span> 2 Charlesworth Court,
            Knights Way, Battlefield Enterprise Park, Shrewsbury, Shropshire,
            SYI 3AB
          </li>
        </ul>
      </Section>

      <em className="mt-6 font-bold">
        By submitting your claim, you confirm that you have read, understood,
        and agreed to these terms and conditions.
      </em>
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
    <section className={cn("mb-10", className)}>
      <h2 className="mb-3 text-2xl font-extrabold">{title}</h2>
      {children}
    </section>
  )
}
