/**
 * Transforms date from dd.MM.yyyy  to YYYY-MM-DD
 */
export function parseDateToIso(inputDate: string): string {
  let parts = inputDate.split(".");
  let date = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0])); // note: months are 0-based in JavaScript

  let year = date.getFullYear();
  let month = ("0" + (date.getMonth() + 1)).slice(-2); // add leading zero if needed
  let day = ("0" + date.getDate()).slice(-2); // add leading zero if needed

  return `${year}-${month}-${day}`;
}
