import { AutoCompleteOption } from "@/components/ui/autocomplete"

export const UkAirlines: AutoCompleteOption[] = [
  { label: "British Airways", value: "british_airways" },
  { label: "Virgin Atlantic", value: "virgin_atlantic" },
  { label: "American Airlines", value: "american_airlines" },
  { label: "Delta Air Lines", value: "delta_air_lines" },
  { label: "United Airlines", value: "united_airlines" },
  { label: "easyJet", value: "easyjet" },
  { label: "TUI Airways", value: "tui_airways" },
  { label: "Jet2.com", value: "jet2_com" },
  { label: "Ryanair", value: "ryanair" },
  { label: "Emirates", value: "emirates" },
  { label: "Wizz Air UK", value: "wizz_air_uk" },
  { label: "Loganair", value: "loganair" },
  { label: "KLM", value: "klm" },
  { label: "Lufthansa", value: "lufthansa" }
]

export const CompensationStats: { key: string; text: string }[] = [
  {
    key: "stat-1",
    text: "The No. 1 in Europe: Over 500 million euros in compensation won"
  },
  {
    key: "stat-2",
    text: "No financial risk: Our commission is only due if we are successful"
  },
  {
    key: "stat-3",
    text: "Transparent communication: We always keep you up to date"
  }
]
