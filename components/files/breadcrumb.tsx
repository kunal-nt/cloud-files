"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Home01Icon } from "@hugeicons/core-free-icons";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useFilesStore } from "@/store/files-store";
import { cn } from "@/lib/utils";

export function Breadcrumb() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { folders } = useFilesStore();

  const folderId = searchParams.get("id");

  const getViewName = () => {
    if (pathname === "/starred") return "Starred";
    if (pathname === "/recent") return "Recent";
    if (pathname === "/shared") return "Shared";
    if (pathname === "/trash") return "Trash";

    if (pathname === "/folder" && folderId) {
      const folder = folders.find((f) => f.id === folderId);
      return folder?.name || "Folder";
    }

    return null;
  };

  const viewName = getViewName();

  return (
    <nav className="flex items-center gap-1 text-sm">
      <Link
        href="/"
        className={cn(
          "flex items-center gap-1.5 px-2 py-1 rounded-md transition-colors",
          pathname === "/"
            ? "text-foreground font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-muted",
        )}
      >
        <HugeiconsIcon icon={Home01Icon} className="size-4" />
        <span>My Files</span>
      </Link>

      {viewName && (
        <>
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            className="size-4 text-muted-foreground"
          />
          <span className="px-2 py-1 font-medium">{viewName}</span>
        </>
      )}
    </nav>
  );
}
