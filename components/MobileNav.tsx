'use client'

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { mainTags } from "@/data/tag";
import { useTagParams } from "@/hooks/tagParams";
import { getTagLabel } from "@/lib/tag";
import { Menu } from "lucide-react";
import Link from "next/link";

export function MobileNav() {
  const { addTagToSearchParams } = useTagParams();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col">
          {mainTags.map((tagId) => (
            <Button
              variant="ghost"
              className="justify-start"
              key={tagId}
              asChild
            >
              <Link href={`/?tags=${addTagToSearchParams(tagId)}`}>{getTagLabel(tagId)}</Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
