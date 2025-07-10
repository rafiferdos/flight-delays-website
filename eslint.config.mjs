import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      "no-undef": "error", // ❌ Error for undefined variables
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // ❌ Error for unused variables (except args prefixed with "_")
      "no-var": "error", // ❌ Error for using var instead of let/const
      "no-console": ["warn", { allow: ["warn", "error"] }] // ⚠️ Warning for console.log, but allow console.warn & console.error
    }
  }
]

export default eslintConfig
