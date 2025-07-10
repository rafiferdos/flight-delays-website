import { Metadata } from "next"
import CompensationForm from "./_components/CompensationForm"

export const metadata: Metadata = {
  title: "Claim Compensation",
  description:
    "Fill up the form with required and valid information of your air travel to check your compensation."
}

export interface CompensationProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Compensation({
  searchParams
}: CompensationProps) {
  const searchParamsObj = await searchParams
  return (
    <div className="mt-10">
      <CompensationForm searchParams={searchParamsObj} />
    </div>
  )
}
