import { Tag } from "@/types/tag";

export const photos: {
  imageURL: string;
  href: string;
  title: string;
  tags: Tag[];
}[]= [
  {
    title: "Pixabay",
    tags: [{ id: "license", label: "license" }],
    href: "https://pixabay.com/ja/",
    imageURL: "https://mini-game-psi.vercel.app/images/monster-3.svg",
  },
  {
    title: "Unsplash",
    tags: [{ id: "xxx", label: "license" }],
    href: "https://unsplash.com/ja",
    imageURL: "/images/unsplash.png",
  },
  {
    title: "illust",
    tags: [{ id: "xxx", label: "license" }],
    href: "/",
    imageURL: "https://mini-game-psi.vercel.app/images/monster-3.svg",
  },
  // {
  //   title: "",
  //   tags: [],
  //   href: "",
  //   imageURL: "",
  // },
];
