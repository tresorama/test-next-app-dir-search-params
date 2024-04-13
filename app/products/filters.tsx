'use client';

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductTag, tags } from "./data";
import { Button } from "@/components/ui/button";

export const Filters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tag = searchParams.get("tag") as ProductTag | undefined;

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const tag = formData.get("tag") as ProductTag;

    // redirect
    const newUrl = pathname + "?" + createQueryString("tag", tag);
    router.push(newUrl.toString());
  };
  return (
    <form method="GET" onSubmit={handleSubmit}>
      <select name="tag" className="dark:text-black" defaultValue={tag}>
        <option value="">All</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>{tag}</option>
        ))}
      </select>
      <Button type="submit">Apply Filter</Button>
    </form>
  );
};