'use client'

import { Button } from "@/components/ui/button"
import { mainTags, TagId } from "@/data/tag"
import { getTagLabel } from "@/lib/tag"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Filter } from "./Filter"
import { useTagParams } from "@/hooks/tagParams"
import { cn } from "@/lib/utils"

export const SideBar = () => {
  const { addTagToSearchParams } = useTagParams();
  const searchParams = useSearchParams();
  const tags = searchParams.get('tags')?.split(',');
  const defaultTags = (useSearchParams().get('tags')?.split(',') ?? []) as TagId[];
  const router = useRouter();

  return (
    <div className="hidden lg:block w-64 border-r p-4 space-y-6">
      <div className="flex flex-col">
        {mainTags.map((tagId) => (
          <Button variant="ghost" className={cn("justify-start", tags?.includes(tagId) && 'bg-accent')} key={tagId} asChild>
            <Link href={`/?tags=${addTagToSearchParams(tagId)}`}>
              {getTagLabel(tagId)}
            </Link>
          </Button>
        ))}
      </div>

      <Filter />
    </div>
  );
}