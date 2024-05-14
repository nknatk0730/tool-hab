import { ItemCard } from "@/components/ItemCard";
import { allItems, ItemType } from "@/data";

export default function page({
  params: {
    id
  }
}: {
  params: {
    id: ItemType;
  }
}) {
  const currentItems = allItems[id] || [];

  if (currentItems.length === 0) {
    return <p className="text-sm text-muted-foreground my-10">404</p>
  }

  return (
    <div className="p-4 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
      {currentItems.map((item) => (
        <ItemCard
          key={item.title}
          title={item.title}
          tags={item.tags}
          href={item.href}
          imageURL={item.imageURL}
        />
      ))}
    </div>
  );
}