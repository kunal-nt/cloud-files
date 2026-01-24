import { FilesContent } from "@/components/files/content";

interface FolderPageProps {
  searchParams?: {
    id?: string;
  };
}

export default function FolderPage({ searchParams }: FolderPageProps) {
  const id = searchParams?.id ?? "1";

  return <FilesContent view="folder" folderId={id} />;
}
