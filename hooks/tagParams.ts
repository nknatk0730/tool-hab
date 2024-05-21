import { TagId } from "@/data/tag"
import { mainTags } from "@/lib/tag";
import { useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react";

export const useTagParams = () => {
  const defaultTags = (useSearchParams().get('tags')?.split(',').filter(Boolean) ?? []) as TagId[];

  const addTagToSearchParams = (tag: TagId, keepMainTag?: boolean) => {
    const src = keepMainTag ? defaultTags : defaultTags.filter((t: TagId) => !mainTags.includes(t))
  
    if (src.includes(tag)) {
      return src.join(',');
    } else {
      return [...src, tag].join(',');
    }
  };
  
  const removeTagToSearchParams = (tag: TagId, keepMainTag: boolean) => {
    return defaultTags.filter((t: TagId) => t !== tag).join(',');
  }

  return {addTagToSearchParams, removeTagToSearchParams};
};