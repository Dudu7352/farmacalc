export const MONTHS = [
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Kwiecień",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Październik",
  "Listopad",
  "Grudzień",
];

export function fmtDate(date: Date, delim: string): string {
  const dayString = date.getDate().toString().padStart(2, '0');
  const monthString = (date.getMonth() + 1).toString().padStart(2, '0');
  const arr = [dayString, monthString, date.getFullYear()];
  return arr.join(delim)
}