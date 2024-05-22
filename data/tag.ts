export const allTags = [
  { id: "no-license-require", label: "license" },
  { id: "photo", label: "photo" },
  { id: "illust", label: "illust" },
  { id: "icon", label: "icon" },
  { id: "free", label: "free" },
  { id: "public-domain", label: "public domain" },
  { id: 'video', label: 'video' },
  { id: 'font', label: 'font' },
  { id: 'icon-font', label: 'icon-font' },
  { id: 'audio', label: 'audio' },
] as const;

export const mainTags: TagId[] = [
  'illust',
  "photo",
  'icon',
  'font',
  'icon-font',
  'audio',
];

export type TagId = (typeof allTags)[number]['id'];