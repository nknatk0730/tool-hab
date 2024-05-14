import { icons } from "./icon";
import { illusts } from "./illust";
import { photos } from "./photo";

export const allItems = {
  illusts,
  photos,
  icons,
} as const;

export type ItemType = keyof typeof allItems;