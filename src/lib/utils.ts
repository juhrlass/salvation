import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {ClassValue} from "clsx";





// See: https://www.youtube.com/watch?v=re2JFITR7TI
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}