import ResponsiveContainer from "@/components/containers/ResponsiveContainer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { FaqData } from "@/constants/home.constants"
import Image from "next/image"
import faqSectionImage from "@/assets/images/home/faq/image (3).png"

export default function FAQ() {
  return (
    <div className="bg-secondary-light mt-20 py-20">
      <ResponsiveContainer>
        <h2 className="text-h3 lg:text-h2 mb-10 text-center font-bold">
          Frequently asked questions: <span className="text-gradient">FAQ</span>
        </h2>

        <div className="flex flex-col items-center justify-between gap-x-20 gap-y-10 lg:flex-row">
          {/* --------------------------- Left --------------------------- */}
          <div className="w-full lg:w-1/2">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue={FaqData[0]?.key}
            >
              {FaqData.map((faq) => (
                <AccordionItem value={faq.key} key={faq.key} className="py-2">
                  <AccordionTrigger className="text-h6 cursor-pointer py-4 leading-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pt-1 pb-2 text-[17px] text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* --------------------------- Right --------------------------- */}
          <div className="w-full lg:w-1/2">
            <Image
              src={faqSectionImage}
              alt="Couple in an airport"
              height={1000}
              width={1000}
              placeholder="blur"
              className="h-[450px] w-full rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  )
}
