import { differenceInDays, differenceInHours } from "date-fns";

function mountPhrase(time: number, flag: "hours" | "days") {
  const flagDaysParsed = time > 1 ? "dias" : "dia";
  const flagHoursParsed = time > 1 ? "horas" : "hora";
  const flagTime = flag === "days" ? flagDaysParsed : flagHoursParsed;
  return `Há ${time} ${flagTime}`;
}

export function difference(date: Date) {
  const resultDays = differenceInDays(new Date(), date);

  if (resultDays === 0) {
    const resultHours = differenceInHours(new Date(), date);
    return mountPhrase(resultHours, "hours");
  }

  return mountPhrase(resultDays, "days");
}
