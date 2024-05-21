'use client'

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTagParams } from "@/hooks/tagParams";
import { useRouter } from "next/navigation";

export const Filter = () => {
  const { addTagToSearchParams, removeTagToSearchParams } = useTagParams();
  const router = useRouter();

  return (
    <div>
      <h2 className="font-semibold text-muted-foreground text-sm mb-4">
        Filter
      </h2>
      <div className="flex items-center space-x-2">
        <Switch
          id="free"
          onCheckedChange={(v) => {
            if (v) {
              router.replace(`/?tags=${addTagToSearchParams("free", true)}`);
            } else {
              router.replace(`/?tags=${removeTagToSearchParams('free', true)}`);
            }
          }}
        />
        <Label htmlFor="free">Free</Label>
      </div>
    </div>
  );
}