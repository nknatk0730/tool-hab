'use client'
import { ItemCard } from "@/components/ItemCard";
import { allItems } from "@/data/item";
import { TagId } from "@/data/tag";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const tags = (searchParams.get('tags') as string)?.split(',');

  const currentItems = allItems.filter((item) => {
    if (!tags) {
      return true;
    }

    return tags.every((tag) => item.tags.includes(tag as TagId));
  });

  if (currentItems.length === 0) {
    return <p className="text-sm text-center text-muted-foreground my-10">404</p>
  }

  return (
    <div className="p-4 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
      {currentItems.map((item) => (
        <ItemCard
          key={item.title}
          title={item.title}
          tags={item.tags}
          href={item.href}
          id={item.id}
        />
      ))}
    </div>
  );
}