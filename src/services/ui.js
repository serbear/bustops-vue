import { ScreenNamesEnum } from "@/enums.js";

export function IsInScreenList(screenName) {
  const screenList = [
    ScreenNamesEnum.REGION,
    ScreenNamesEnum.STOP,
    ScreenNamesEnum.BUS,
  ];
  const result = screenList.find((item) => item === screenName);

  return !!result;
}
