import { Item } from "@/types/item";

export const allItems: Item[] = [
  {
    title: "illustya",
      tags: ['no-license-require', "illust", 'free'],
      href: "https://www.irasutoya.com",
      id: "irasutoya",
    },
    {
    title: "Pixabay",
      tags: ['no-license-require', 'photo', 'illust', 'video', 'free', 'audio'],
      href: "/",
      id: "pixabay"
    },
    {
    title: "unsplash",
      tags: ['free', 'no-license-require', 'photo', 'public-domain'],
      href: "https://unsplash.com/ja",
      id: "unsplash",
    },
    {
    title: "vector shelf",
      tags: ['free', 'illust'],
      href: "https://vectorshelf.com",
      id: "vectorshelf",
    },
    {
    title: "Lucide",
      tags: ['free', 'icon'],
      href: "https://lucide.dev",
      id: "lucide",
    }
] as const;