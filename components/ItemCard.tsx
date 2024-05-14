import { Tag } from "@/types/tag";
import Image from "next/image";
import Link from "next/link"

export const ItemCard = ({
  title,
  imageURL,
  tags,
  href,
}: {
  title: string;
  imageURL: string;
  tags: Tag[];
  href: string;
}) => {
  return (
    <div className="aspect-video hover:shadow-lg transition duration-300 relative border rounded-md p-4 shadow-sm bg-card">
      <div className="aspect-video border mb-2 rounded relative overflow-hidden">
        <Image
          fill
          objectFit="cover"
          src={imageURL}
          alt="Image
        "
        />
      </div>
      <h2 className="text-sm font-semibold">
        <Link href={href} target="_blank">
          {title}
          <span className="absolute inset-0"></span>
        </Link>
      </h2>
      <div className="flex mt-2 gap-2 relative z-10 flex-nowrap">
        {tags.map((tag) => (
          <Link
            key={tag.id}
            href={tag.id}
            className="border bg-muted rounded whitespace-nowrap text-xs px-1 py-0.5 text-muted-foreground"
          >
            {tag.label}
          </Link>
        ))}
      </div>
    </div>
  );
}