import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

//allows us to use conditional class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
