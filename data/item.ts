import { Item } from "@/types/item";

export const allItems: Item[] = [
  {
    title: "illust",
      tags: ['no-license-require', "illust"],
      href: "/",
      imageURL: "https://mini-game-psi.vercel.app/images/monster-3.svg",
    },
    {
    title: "Pixabay",
      tags: ['no-license-require', 'photo', 'illust', 'video'],
      href: "/",
      imageURL: "https://mini-game-psi.vercel.app/images/monster-3.svg",
    },
    {
    title: "unsplash",
      tags: ['free', 'no-license-require', 'photo', 'public-domain'],
      href: "/",
      imageURL: "https://mini-game-psi.vercel.app/images/monster-3.svg",
    },
] as const;