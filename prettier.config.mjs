/**
 * @type {import("prettier").Config}
 */
export default {
  tailwindFunctions: ["cn", "twMerge", "twJoin", "clsx", "cx", "cva"],
  tailwindAttributes: [],
  plugins: [ "prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
};
