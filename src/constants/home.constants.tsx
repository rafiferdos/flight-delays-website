import caFlag from "@/assets/images/home/claim-compensation/ca.png"
import euFlag from "@/assets/images/home/claim-compensation/eu.png"
import trFlag from "@/assets/images/home/claim-compensation/tk.png"
import ukFlag from "@/assets/images/home/claim-compensation/uk.png"
import { Icon } from "@iconify/react"
import { JSX, ReactNode } from "react"

interface IStat {
  key: string
  label: string
  stat: string // Changed from number | string to just string
  valueText: ReactNode
  icon: ReactNode
}

export const StatsData: IStat[] = [
  {
    key: "compensationClaimed",
    stat: "£82m",
    valueText: "+",
    label: "compensation claimed",
    icon: (
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#017292]/10 to-[#017292]/5 opacity-20"></div>
        <Icon
          icon="mdi:cash-multiple"
          className="size-12 sm:size-14 md:size-16 lg:size-18"
          color="rgb(2, 171, 217)"
        />
        <div
          className="absolute -top-1 -right-1 rounded-full p-1"
          style={{ backgroundColor: "rgb(2, 171, 217)" }}
        >
          <Icon
            icon="mdi:currency-gbp"
            className="size-3 text-white sm:size-4"
          />
        </div>
      </div>
    )
  },
  {
    key: "peopleCompensated",
    stat: "700,000",
    valueText: "+",
    label: "happy passengers",
    icon: (
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgb(2,171,217)]/10 to-[rgb(2,171,217)]/5 opacity-20"></div>
        <Icon
          icon="mdi:account-group"
          className="size-12 sm:size-14 md:size-16 lg:size-18"
          color="rgb(2, 171, 217)"
        />
        <div
          className="absolute -top-1 -right-1 rounded-full p-1"
          style={{ backgroundColor: "rgb(2, 171, 217)" }}
        >
          <Icon
            icon="mdi:emoticon-happy"
            className="size-3 text-white sm:size-4"
          />
        </div>
      </div>
    )
  },
  {
    key: "ensurity",
    stat: "100",
    valueText: "%",
    label: "airline coverage",
    icon: (
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#017292]/10 to-[#017292]/5 opacity-20"></div>
        <Icon
          icon="mdi:airplane"
          className="size-12 sm:size-14 md:size-16 lg:size-18"
          color="rgb(2, 171, 217)"
        />
        <div
          className="absolute -top-1 -right-1 rounded-full p-1"
          style={{ backgroundColor: "rgb(2, 171, 217)" }}
        >
          <Icon
            icon="mdi:check-circle"
            className="size-3 text-white sm:size-4"
          />
        </div>
      </div>
    )
  },
  {
    key: "experience",
    stat: "12",
    valueText: "+",
    label: "years in business",
    icon: (
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgb(2,171,217)]/10 to-[rgb(2,171,217)]/5 opacity-20"></div>
        <Icon
          icon="mdi:office-building"
          className="size-12 sm:size-14 md:size-16 lg:size-18"
          color="rgb(2, 171, 217)"
        />
        <div
          className="absolute -top-1 -right-1 rounded-full p-1"
          style={{ backgroundColor: "rgb(2, 171, 217)" }}
        >
          <Icon
            icon="mdi:calendar-clock"
            className="size-3 text-white sm:size-4"
          />
        </div>
      </div>
    )
  }
]

export const CompensationRules = [
  <>
    <strong>You could claim up to £520 per passenger</strong> if your flight
    arrived <strong>3+ hours late</strong>, provided the delay was{" "}
    <strong>the airline&apos;s fault</strong> (not due to extraordinary
    circumstances like weather)
  </>,
  <>
    <strong>
      Compensation may also be due if your flight was cancelled, you were
      Involuntarily denied boarding, or missed a connecting flight.
    </strong>{" "}
    In some cases, you could also be entitled to a{" "}
    <strong>full flight refund.</strong>
  </>,
  <>
    {" "}
    Your right to claim is{" "}
    <strong>protected under UK & EU Regulation 261</strong>, which has been
    carried into UK law. These rights apply to flights from up to{" "}
    <strong> 6 years ago.</strong>{" "}
  </>
]

export const CompensationRights = [
  {
    key: "uk",
    label: "UK regulation UK 261",
    countryFlag: ukFlag
  },
  {
    key: "eu",
    label: "EU regulation EU 261",
    countryFlag: euFlag
  },
  {
    key: "ca",
    label: "Montreal convention",
    countryFlag: caFlag
  },
  {
    key: "tr",
    label: "Turkish regulation",
    countryFlag: trFlag
  }
]

// ------------------------------ //
// Why Choose Us
// ------------------------------ //
export interface IWhyChooseUs {
  key: string
  label: string
  icon: JSX.Element
}

export const WhyChooseUsData: IWhyChooseUs[] = [
  {
    key: "support",
    label: "24/7 Claim Support",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="68"
        height="56"
        fill="none"
        viewBox="0 0 68 56"
      >
        <path
          fill="#007FA1"
          fillRule="evenodd"
          d="M34.875.015A26.84 26.84 0 0 0 19.113 4.49 26.67 26.67 0 0 0 8.287 19.205c-.476-.058-1.046-.032-1.724.159-2.528.715-4.428 2.777-5.283 4.594-1.11 2.368-1.578 5.5-1.084 8.732.49 3.223 1.857 5.879 3.567 7.528 1.715 1.65 3.651 2.186 5.575 1.784 2.864-.609 4.284-1.064 3.883-3.72l-1.94-12.883a22.6 22.6 0 0 1 2.958-9.968 22.7 22.7 0 0 1 7.118-7.602 22.8 22.8 0 0 1 13.385-3.81 22.79 22.79 0 0 1 19.38 12.076 22.6 22.6 0 0 1 2.595 9.334l-1.358 9.01A22.64 22.64 0 0 1 47.896 44.6a22.8 22.8 0 0 1-11.759 4.62h-5.784a2.7 2.7 0 0 0-1.907.784 2.68 2.68 0 0 0-.788 1.898v1.415a2.67 2.67 0 0 0 .788 1.899 2.7 2.7 0 0 0 1.907.784h7.293a2.7 2.7 0 0 0 1.904-.785 2.67 2.67 0 0 0 .785-1.897v-.74a26.85 26.85 0 0 0 15.991-11.193l2.337.617c1.901.491 3.861-.135 5.575-1.784 1.71-1.65 3.076-4.306 3.567-7.528.496-3.233.014-6.36-1.082-8.732-1.1-2.373-2.74-3.88-4.632-4.42-.792-.228-1.652-.312-2.39-.333A26.63 26.63 0 0 0 50.305 5.51 26.82 26.82 0 0 0 34.875.015"
          clipRule="evenodd"
        ></path>
        <path
          fill="#007FA1"
          fillRule="evenodd"
          d="M43.413 23.19a3.5 3.5 0 0 1 2.47 1.02 3.48 3.48 0 0 1 1.024 2.46 3.48 3.48 0 0 1-1.025 2.46 3.507 3.507 0 0 1-4.943.002 3.48 3.48 0 0 1-1.027-2.462 3.47 3.47 0 0 1 1.026-2.463 3.5 3.5 0 0 1 2.474-1.018zm-9.413 0c.691 0 1.367.204 1.941.587a3.5 3.5 0 0 1 1.287 1.562 3.47 3.47 0 0 1-.759 3.793 3.5 3.5 0 0 1-3.808.754 3.5 3.5 0 0 1-1.569-1.282 3.47 3.47 0 0 1 .434-4.396A3.5 3.5 0 0 1 34 23.19m-9.41 0a3.5 3.5 0 0 1 2.521.991 3.48 3.48 0 0 1 1.052 2.49 3.47 3.47 0 0 1-1.052 2.488 3.5 3.5 0 0 1-2.522.992 3.5 3.5 0 0 1-2.436-1.039 3.474 3.474 0 0 1 0-4.885 3.5 3.5 0 0 1 2.436-1.037M34 8.235c-10.251 0-18.512 7.956-18.512 18.434 0 5.033 1.911 9.48 5.024 12.744l-1.105 4.932c-.364 1.623.767 2.714 2.232 1.902l4.835-2.686A18.9 18.9 0 0 0 34 45.105c10.254 0 18.51-7.95 18.51-18.433 0-10.48-8.256-18.435-18.51-18.435z"
          clipRule="evenodd"
        ></path>
      </svg>
    )
  },
  {
    key: "technology",
    label: "Cutting Edge Technology",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        fill="none"
        viewBox="0 0 56 56"
      >
        <g fill="#007FA1" clipPath="url(#clip0_5270_167)">
          <path d="m1.564 32.047 3.654.6a22.5 22.5 0 0 0 3.256 7.845l-2.164 3.02a1.71 1.71 0 0 0 .019 2.049 25 25 0 0 0 1.737 1.912 29 29 0 0 0 1.908 1.738 1.71 1.71 0 0 0 2.05.02l3.019-2.166a22.5 22.5 0 0 0 7.84 3.258l.598 3.657a1.69 1.69 0 0 0 1.461 1.424c.52.059 1.045.095 1.58.121a.955.955 0 0 0 1.002-.947v-7.607a.954.954 0 0 0-.922-.949c-9.592-.497-17.115-8.42-17.115-18.024S17.01 10.47 26.602 9.973a.955.955 0 0 0 .922-.949v-7.6a.954.954 0 0 0-1-.95 27 27 0 0 0-1.582.113 1.71 1.71 0 0 0-1.461 1.435l-.598 3.657a22.5 22.5 0 0 0-7.84 3.259l-3.019-2.166a1.71 1.71 0 0 0-2.05.019 25 25 0 0 0-1.908 1.737 22 22 0 0 0-1.737 1.913 1.71 1.71 0 0 0-.02 2.052l2.165 3.02a22.5 22.5 0 0 0-3.256 7.844l-3.654.598A1.69 1.69 0 0 0 .14 25.417a23.5 23.5 0 0 0 0 5.126 1.72 1.72 0 0 0 1.424 1.504"></path>
          <path d="M26.615 13.792c-7.499.475-13.338 6.695-13.338 14.209s5.84 13.734 13.338 14.21a.87.87 0 0 0 .907-.88v-26.66a.87.87 0 0 0-.907-.88m7.552.92H29.42v1.899h4.746a2.856 2.856 0 0 0 2.847-2.848v-5.87a2.848 2.848 0 1 0-1.898 0v5.87a.95.95 0 0 1-.95.95m-4.746 5.695h9.492a.95.95 0 1 0 0-1.898H29.42zm0 20.882h4.746a.95.95 0 0 1 .949.95v5.87a2.847 2.847 0 1 0 1.898 0v-5.87a2.856 2.856 0 0 0-2.847-2.848H29.42zm14.237-9.491H29.421v1.898h14.237a.95.95 0 0 1 .95.95v4.92a2.848 2.848 0 1 0 1.898 0v-4.92a2.856 2.856 0 0 0-2.848-2.848m9.492-6.645a2.85 2.85 0 0 0-2.673 1.899H29.421v1.898h21.056a2.843 2.843 0 1 0 2.673-3.797"></path>
          <path d="M39.863 36.544a.95.95 0 0 0-.95-.95h-9.491v1.899h9.492c.524 0 .949-.425.949-.95m6.644-15.187v-4.92a2.847 2.847 0 1 0-1.898 0v4.92a.95.95 0 0 1-.95.949H29.423v1.898H43.66a2.856 2.856 0 0 0 2.847-2.847"></path>
        </g>
        <defs>
          <clipPath id="clip0_5270_167">
            <path fill="#fff" d="M0 0h56v56H0z"></path>
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    key: "compensationCheck",
    label: "Compensation Check",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="51"
        height="57"
        fill="none"
        viewBox="0 0 51 57"
      >
        <path
          fill="#007FA1"
          fillRule="evenodd"
          d="M44.8 6.267v16.072l-8.098 8.266-4.743-4.816-11.816 12.006 10.595 10.766a8.37 8.37 0 0 0 11.945 0l2.117-2.159v4.665a5.6 5.6 0 0 1-5.6 5.6H5.6a5.6 5.6 0 0 1-5.6-5.6v-44.8a5.6 5.6 0 0 1 5.6-5.6h33.6a5.6 5.6 0 0 1 5.6 5.6m-11.2 11.2H11.2v-5.6h22.4zm-22.4 11.2h11.2v-5.6H11.2z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#007FA1"
          d="m46.44 28.667-9.73 9.932-4.75-4.828L28 37.795l6.731 6.838a2.77 2.77 0 0 0 3.96 0L50.4 32.69z"
        ></path>
      </svg>
    )
  }
]

// ============================  //
//   Get Compensation Process   //
// =========================== //
export interface ICompensationProcess {
  key: string
  number: string
  title: string
  subtitle: string
  description: string
}

export const CompensationProcessData: ICompensationProcess[] = [
  {
    key: "process-1",
    number: "01",
    title: "Check Eligibility",
    subtitle: "Submit your claim",
    description:
      "We make sure everything's quick and easy, and that your data's safe."
  },
  {
    key: "process-2",
    number: "02",
    title: "Claim Analysis",
    subtitle: "Our expert's review",
    description:
      "Our specialists use advanced tech and flight data to validate your claim."
  },
  {
    key: "process-3",
    number: "03",
    title: "We Take Action",
    subtitle: "We submit your claim",
    description:
      "We handle the paperwork and contact the airline on your behalf."
  },
  {
    key: "process-4",
    number: "04",
    title: "We Handle Everything",
    subtitle: "We negotiate for you",
    description:
      "Our team builds a strong case and pushes for maximum compensation."
  },
  {
    key: "process-5",
    number: "05",
    title: "You Get Paid",
    subtitle: "You receive your compensation",
    description:
      "Once approved, we transfer your money straight to your account."
  }
]

// Recent Success
interface IRecentSuccess {
  key: string
  title: string
  description: string
}

export const RecentSuccessCarouselData: IRecentSuccess[] = [
  {
    key: "recent-success-1",
    title: "£1100 for family delayed by slightly over 3 hours",
    description:
      "We obtained £1100 in compensation for a family of 5 following a delayed TUI return of their trip to Benidorm."
  },
  {
    key: "recent-success-2",
    title: "£2,080 obtained for family of 4 following missed connection.",
    description:
      "Family of 4's delay led to a missed connection in Dubai and new flight given 3 days later. Emirates provided accommodation and food in addition to the compensation."
  },
  {
    key: "recent-success-3",
    title: "£700 awarded to couple for 4 hour Ryanair delay",
    description:
      "Couple received £350 each, after a Ryanair flight to Istanbul was delayed due to operational issues."
  },
  {
    key: "recent-success-4",
    title: "3 friends claim £1050 for easyJet delay",
    description:
      "Flight Delay Claims helped 3 friends claim £350 each after arriving to their Corfu holiday late."
  }
]

// FAQ
interface IFaq {
  key: string
  question: string
  answer: ReactNode
}

export const FaqData: IFaq[] = [
  {
    key: "faq-1",
    question: "How do I know if i'm eligible for compensation?",
    answer:
      "You may be eligible for compensation if your flight was delayed by three hours or more and the cause was within the airline's control."
  },
  {
    key: "faq-2",
    question: "What information do I need to provide to submit a claim?",
    answer: (
      <div>
        <p>To submit your claim, we will need the following information</p>
        <ul className="mt-3 list-inside list-disc pl-4">
          <li>Flight details</li>
          <li>Booking reference</li>
          <li>Full legal names of all passengers on your booking.</li>
        </ul>
      </div>
    )
  },
  {
    key: "faq-3",
    question: "How long does the claims process take?",
    answer:
      "On average we get our passengers compensation just 13 days after taking on their claim! The processing time can however vary, but usually takes no more then a few weeks depending on the airline and complexity of the case."
  },
  {
    key: "faq-4",
    question: "What are your fees?",
    answer:
      "We work on a No Win, No Fee basis! This means we only get paid if your claim is successful. Our Fee is always a flat 35%."
  }
]
