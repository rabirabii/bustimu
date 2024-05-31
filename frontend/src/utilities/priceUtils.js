import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price,
  option = {
    currencySymbol: "Rp",
    currencyCode: "IDR",
  }
) {
  const { currencySymbol = "Rp", currencyCode = "IDR" } = option;

  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  return new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: currencyCode,
    maximumFractionDigits: 2,
  })
    .format(numericPrice)
    .replace(currencyCode, currencySymbol);
}
