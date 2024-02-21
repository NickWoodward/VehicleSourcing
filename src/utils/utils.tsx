import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// export const wordWrap = (str:string, len?:string) => {

  // const chars = len || 10;
  // /* Regex to remove spaces before the start of any html tag */ 
  // str = str.replace(/ +</g,'<');
  // /* Regex to insert <wbr/> after every html tag or a text of 'len' characters */
  // var re = new RegExp("(?:<[^>]+>)|([^<&]{0,"+chars+"})","g");
  // str = str.replace(re,'$&<wbr/>');
  // str = str.replace(/><wbr\/>/g,'>');
  // return str;
// }