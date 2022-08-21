import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";

function mountPhrase(time: number, flag: "minutes" | "hours" | "days") {
  const flagMinutesParsed = time > 1 ? "minutos" : "minuto";
  const flagDaysParsed = time > 1 ? "dias" : "dia";
  const flagHoursParsed = time > 1 ? "horas" : "hora";

  const timeMap = new Map<typeof flag, string>([
    ["days", `Há ${time} ${flagDaysParsed}`],
    ["hours", `Há ${time} ${flagHoursParsed}`],
    ["minutes", `Há ${time} ${flagMinutesParsed}`],
  ]);

  return timeMap.get(flag);
}

export function difference(date: Date) {
  const resultDays = differenceInDays(new Date(), date);

  if (resultDays === 0) {
    const resultHours = differenceInHours(new Date(), date);

    if (resultHours === 0) {
      const resultMinutes = differenceInMinutes(new Date(), date);
      return mountPhrase(resultMinutes, "minutes");
    }

    return mountPhrase(resultHours, "hours");
  }

  return mountPhrase(resultDays, "days");
}
