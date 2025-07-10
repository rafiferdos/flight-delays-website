import { JSX, ReactNode } from "react"
import ukFlag from "@/assets/images/home/claim-compensation/uk.png"
import euFlag from "@/assets/images/home/claim-compensation/eu.png"
import caFlag from "@/assets/images/home/claim-compensation/ca.png"
import trFlag from "@/assets/images/home/claim-compensation/tk.png"

interface IStat {
  key: string
  label: string
  stat: number
  valueText: ReactNode
  icon: ReactNode
}

export const StatsData: IStat[] = [
  {
    key: "airlines",
    stat: 100,
    valueText: "%",
    label: "of airlines",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 106 106"
        fill="none"
        className="size-[80px] lg:size-[106px]"
      >
        <circle cx="53" cy="53" r="43" stroke="#F5FDFF" strokeWidth="20" />
      </svg>
    )
  },
  {
    key: "peopleCompensated",
    stat: 226422,
    valueText: "+",
    label: "people compensated",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 125 74"
        fill="none"
        className="size-[90px] lg:size-[125px]"
      >
        <path
          d="M34.0593 58.6H1V73H105.04V57.16H71.0079L124 26.44L105.04 2.44L59.8261 55.24L88.0237 1H54.4783L44.7549 55.24V1L13.1542 13.96L34.0593 58.6Z"
          fill="#F5FDFF"
          stroke="white"
        />
      </svg>
    )
  },
  {
    key: "years",
    stat: 7,
    valueText: "+ Years",
    label: "in business",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 91 91"
        fill="none"
        className="size-[80px] lg:size-[91px]"
      >
        <path
          d="M85.7934 40.166L85.7944 40.167C88.7431 43.0991 88.7446 47.9005 85.7934 50.8517L85.7913 50.8538C84.3757 52.286 82.4782 53.0691 80.4594 53.0691C72.3734 53.0691 64.394 51.7627 56.7323 49.1676L56.7314 49.1673L53.1412 47.9587L53.1398 47.9583C52.766 47.8337 52.4275 48.0347 52.2998 48.3241C52.1724 48.613 52.2515 49.0013 52.6001 49.1915L52.6088 49.1962L52.6178 49.2007L56.0303 50.8891L56.0306 50.8893C63.2864 54.4731 69.8535 59.1866 75.5736 64.9067C77.0263 66.3593 77.8244 68.2914 77.7911 70.3391C77.7245 74.4728 74.2705 77.842 70.1391 77.792L70.1373 77.792C68.1738 77.7754 66.3256 76.9945 64.9058 75.5746C59.1856 69.8544 54.4722 63.2873 50.8884 56.0315L50.8882 56.0312L49.2023 52.6239C49.1223 52.4545 48.9801 52.3286 48.8042 52.2732C48.6362 52.2203 48.4689 52.2411 48.3347 52.2986C48.0608 52.416 47.8256 52.7455 47.9573 53.1407L47.9578 53.1421L49.1664 56.7324L49.1667 56.7332C51.7618 64.3949 53.0682 72.3743 53.0682 80.4603C53.0682 82.4774 52.2862 84.3589 50.8508 85.7943L50.8487 85.7964C49.4332 87.2286 47.5356 88.0117 45.5168 88.0117C43.4998 88.0117 41.6183 87.2297 40.1829 85.7943L40.1808 85.7922C38.7486 84.3767 37.9655 82.4791 37.9655 80.4603C37.9655 72.3743 39.2719 64.3949 41.867 56.7332L41.8673 56.7324L43.0759 53.1421L43.0763 53.1407C43.2009 52.767 42.9999 52.4284 42.7105 52.3008C42.4216 52.1733 42.0333 52.2524 41.8431 52.601L41.8384 52.6097L41.8339 52.6187L40.1455 56.0312L40.1453 56.0315C36.5615 63.2873 31.8481 69.8544 26.1279 75.5746C24.6753 77.0272 22.7433 77.8253 20.6955 77.792C16.5618 77.7254 13.1926 74.2714 13.2426 70.14L13.2426 70.1382C13.2592 68.1747 14.0401 66.3266 15.46 64.9067C21.1802 59.1866 27.7473 54.4731 35.0031 50.8893L35.0034 50.8891L38.4108 49.2032C38.5801 49.1231 38.706 48.981 38.7614 48.8051C38.8143 48.6371 38.7935 48.4698 38.736 48.3356C38.6186 48.0617 38.2892 47.8265 37.8939 47.9583L37.8925 47.9587L34.3022 49.1673L34.3014 49.1676C26.6397 51.7627 18.6603 53.0691 10.5743 53.0691C8.55721 53.0691 6.67572 52.2871 5.24032 50.8517C2.28968 47.9011 2.28968 43.1167 5.24033 40.166L5.24238 40.164C6.65794 38.7318 8.55551 37.9486 10.5743 37.9486C18.6603 37.9486 26.6397 39.255 34.3014 41.8501L34.3022 41.8504L37.8925 43.059L37.8939 43.0595C38.2677 43.1841 38.6062 42.983 38.7338 42.6936C38.8613 42.4047 38.7822 42.0164 38.4336 41.8263L38.4249 41.8215L38.4159 41.8171L35.0034 40.1286L35.0031 40.1284C27.7473 36.5447 21.1802 31.8312 15.46 26.1111C14.0074 24.6584 13.2093 22.7264 13.2426 20.6786L13.2426 20.6765C13.2926 16.5457 16.7443 13.1757 20.8946 13.2257L20.8964 13.2258C22.8599 13.2424 24.708 14.0233 26.1279 15.4432C31.8481 21.1633 36.5615 27.7304 40.1453 34.9863L40.1455 34.9866L41.8314 38.394C41.9115 38.5633 42.0536 38.6892 42.2295 38.7445C42.3975 38.7974 42.5648 38.7766 42.699 38.7191C42.9729 38.6017 43.2081 38.2723 43.0763 37.877L43.0759 37.8756L41.8673 34.2854L41.867 34.2845C39.2719 26.6228 37.9655 18.6434 37.9655 10.5574C37.9655 8.54035 38.7475 6.65886 40.1829 5.22347L40.185 5.22139C41.6005 3.78917 43.4981 3.00604 45.5168 3.00604C47.5339 3.00604 49.4154 3.78807 50.8508 5.22347L50.8529 5.22552C52.2851 6.64109 53.0682 8.53866 53.0682 10.5574C53.0682 18.6434 51.7618 26.6228 49.1667 34.2845L49.1664 34.2854L47.9578 37.8756L47.9573 37.877C47.8328 38.2508 48.0338 38.5893 48.3232 38.717C48.6121 38.8445 49.0004 38.7654 49.1906 38.4168L49.1953 38.408L49.1998 38.3991L50.8882 34.9866L50.8884 34.9863C54.4722 27.7304 59.1856 21.1633 64.9058 15.4432C66.3584 13.9906 68.2904 13.1924 70.3382 13.2257C74.4719 13.2924 77.8411 16.7464 77.7911 20.8777L77.7911 20.8795C77.7744 22.843 76.9935 24.6912 75.5736 26.1111C69.8535 31.8312 63.2864 36.5447 56.0306 40.1284L56.0303 40.1286L52.623 41.8145C52.4536 41.8946 52.3276 42.0367 52.2723 42.2126C52.2194 42.3806 52.2402 42.5479 52.2977 42.6821C52.4151 42.956 52.7445 43.1912 53.1398 43.0595L53.1412 43.059L56.7314 41.8504L56.7323 41.8501C64.394 39.255 72.3734 37.9486 80.4594 37.9486C82.4765 37.9486 84.358 38.7306 85.7934 40.166ZM42.2453 54.0422L42.7302 53.0622L42.5974 52.9964L42.5928 53.0099L42.721 53.0798C42.6889 53.1388 42.6254 53.1999 42.5343 53.228C42.5288 53.2297 42.5233 53.2312 42.5178 53.2326L42.2453 54.0422ZM42.2674 52.87L42.1281 52.8231L42.1277 52.8245L42.267 52.8709L42.2674 52.87ZM41.7822 53.8507L42.1606 53.0859C42.1552 53.0768 42.15 53.0673 42.1453 53.0574C42.1051 52.9727 42.107 52.8865 42.1276 52.8246L41.7822 53.8507ZM37.1839 49.2524L38.21 48.907C38.1401 48.9303 38.0487 48.9285 37.9642 48.8854C37.958 48.8822 37.9519 48.8788 37.946 48.8753L37.1839 49.2524ZM36.9924 48.7893L37.8042 48.516C37.8052 48.5123 37.8063 48.5087 37.8075 48.505C37.8369 48.4116 37.9017 48.3416 37.9725 48.3046C37.9774 48.302 37.9823 48.2996 37.9873 48.2973L37.9798 48.3007L37.9725 48.3044L36.9924 48.7893ZM38.1637 48.7676L38.2101 48.9069L38.2115 48.9065L38.1646 48.7672L38.1637 48.7676ZM36.9924 42.2285L34.4618 41.3765L42.2674 38.1478L42.1281 38.1947L42.1277 38.1933L42.267 38.1468L42.1593 37.9291C42.1558 37.935 42.1524 37.9411 42.1492 37.9474C42.1061 38.0318 42.1043 38.1232 42.1276 38.1931L41.7822 37.1671L40.5936 34.7648C36.9856 27.4599 32.2401 20.8482 26.4815 15.0896C24.9708 13.5789 22.9979 12.7435 20.9006 12.7258C16.475 12.6724 12.7959 16.2627 12.7426 20.6705C12.7071 22.8566 13.5602 24.9183 15.1065 26.4646C20.8651 32.2232 27.4768 36.9687 34.7817 40.5767L37.1839 41.7654L38.21 42.1108C38.1481 42.0902 38.0619 42.0883 37.9772 42.1285C37.9673 42.1332 37.9578 42.1383 37.9487 42.1437L38.1637 42.2501L38.2101 42.1108L38.2115 42.1113L38.1646 42.2506L38.1942 42.2652C38.3897 42.3719 38.2653 42.6562 38.052 42.5851L38.0382 42.5805L37.9725 42.7134L36.9924 42.2285ZM42.6011 38.0323L42.602 38.0351L51.2043 4.86991C49.6758 3.34139 47.6674 2.50604 45.5168 2.50604C43.3663 2.50604 41.3401 3.34139 39.8293 4.86991C38.3008 6.39843 37.4655 8.40682 37.4655 10.5574C37.4655 18.6976 38.7807 26.7312 41.3934 34.4449L42.2453 36.9756L42.7302 37.9556L42.7339 37.963L42.7373 37.9704C42.735 37.9655 42.7326 37.9606 42.73 37.9557C42.693 37.8849 42.623 37.82 42.5296 37.7906C42.5259 37.7895 42.5223 37.7884 42.5186 37.7874L42.5974 38.0213L42.6011 38.0323ZM37.8066 42.5175C37.8049 42.512 37.8034 42.5065 37.802 42.501L38.0247 42.576L37.9548 42.7042C37.8958 42.672 37.8347 42.6085 37.8066 42.5175Z"
          fill="#F5FDFF"
          stroke="white"
        />
      </svg>
    )
  },
  {
    key: "winRate",
    stat: 96.4,
    valueText: "%",
    label: "win rate",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 118 118"
        fill="none"
        className="size-[90px] lg:size-[118px]"
      >
        <path
          d="M71.0942 46.7192C76.263 51.8993 82.3633 56.0182 89.0502 58.8722C82.3633 61.7262 76.263 65.8452 71.0942 71.0253C65.9422 76.1884 61.8444 82.2765 59 88.9468C56.1556 82.2765 52.0578 76.1884 46.9058 71.0253C41.737 65.8452 35.6367 61.7262 28.9498 58.8722C35.6367 56.0182 41.737 51.8993 46.9058 46.7192C52.0578 41.5561 56.1556 35.4679 59 28.7976C61.8444 35.4679 65.9422 41.5561 71.0942 46.7192L78.6448 39.1849L71.0942 46.7192Z"
          fill="white"
          stroke="#F5FDFF"
          strokeWidth="21.3333"
        />
      </svg>
    )
  }
]

export const CompensationRules = [
  "You could be eligible to claim up to £520 per passenger in compensation if your flight arrives three or more hours late, provided the delay was the airline's fault and not caused by an extraordinary circumstance.",
  "Compensation may also be available if your flight was cancelled, you were involuntarily denied boarding, or you missed a connecting flight In certain situations, you may also be entitled to a flight refund.",
  "Your right to claim is protected under EU Regulation 261, which has been adopted into UK law. These rights apply to any flight that was scheduled to depart within the last six years."
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
    title: "Check eligibility",
    subtitle: "You Submit Your Claim",
    description: "Claim is settled and you receive your compensation."
  },
  {
    key: "process-2",
    number: "02",
    title: "Claim analysis",
    subtitle: "Our Expert's Review",
    description:
      "Our specialists use advanced technology and airport data to validate your claim."
  },
  {
    key: "process-3",
    number: "03",
    title: "We take action",
    subtitle: "We Submit Your Claim",
    description:
      "We contact the airline on your behalf to officially initiate your claim."
  },
  {
    key: "process-4",
    number: "04",
    title: "Handling all numbers",
    subtitle: "Claim Process Management",
    description:
      "We manage all negotiation and communication with the airline to maximize your chances success."
  },
  {
    key: "process-5",
    number: "05",
    title: "We take action",
    subtitle: "We Submit Your Claim",
    description:
      "We contact the airline on your behalf to officially initiate your claim."
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
      "You may be eligible for compensation if your flight was delayed by three hours or more and the cause was within the airline’s control."
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
