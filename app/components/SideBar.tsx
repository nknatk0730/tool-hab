'use client'

import { Button } from "@/components/ui/button"
import { TagId } from "@/data/tag"
import { addTagToSearchParams, getTagLabel, mainTags } from "@/lib/tag"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Filter } from "./Filter"
import { useTagParams } from "@/hooks/tagParams"

export const SideBar = () => {
  const { addTagToSearchParams } = useTagParams();
  const defaultTags = (useSearchParams().get('tags')?.split(',') ?? []) as TagId[];
  const router = useRouter();

  return (
    <div className="hidden lg:block w-64 border-r p-4 space-y-6">
      <div className="flex flex-col">
        {mainTags.map((tagId) => (
          <Button variant="ghost" className="justify-start" key={tagId} asChild>
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