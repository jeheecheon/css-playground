/**
 * @type {import("prettier").Config}
 */
export default {
  tailwindFunctions: ["cn", "twMerge", "twJoin", "clsx", "cx", "cva"],
  tailwindAttributes: [],
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-organize-imports"],
};
