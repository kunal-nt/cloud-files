// app/(files)/folder/page.tsx
import { Suspense } from "react";
import { FilesContent } from "@/components/files/content";

interface FolderPageProps {
  searchParams?: {
    id?: string;
  };
}

export default function FolderPage({ searchParams }: FolderPageProps) {
  // Server component receives query params from Next App Router
  const id = searchParams?.id ?? "1";

  return (
    // Suspense boundary required so client components that use next/navigation
    // (eg. useSearchParams / usePathname inside Breadcrumb or other children)
    // can bail out to the client safely during prerender.
    <Suspense fallback={<div className="p-4 text-sm">Loading folder…</div>}>
      <FilesContent view="folder" folderId={id} />
    </Suspense>
  );
}
