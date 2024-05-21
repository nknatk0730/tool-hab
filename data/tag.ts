export const allTags = [
  { id: "no-license-require", label: "license" },
  { id: "photo", label: "photo" },
  { id: "illust", label: "illust" },
  { id: "icon", label: "icon" },
  { id: "free", label: "free" },
  { id: "public-domain", label: "public domain" },
  { id: 'video', label: 'video' },
] as const;

export type TagId = (typeof allTags)[number]['id'];