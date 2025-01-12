import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

//allows us to use conditional class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
//  PRICE FORMATER
export function formatPrice(price: number | string,
  options: {
    currency?: "USD" | "EUR" | "GBP",
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
) {
  const { currency = "USD", notation = "compact" } = options

  const numericPrice = typeof price === "string" ? parseFloat(price) : price

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice)
}
