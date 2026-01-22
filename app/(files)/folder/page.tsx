import { FilesContent } from "@/components/files/content";

// interface FolderPageProps {
//   params: Promise<{ id: string }>;
// }

export default async function FolderPage() {
  const id = "1";
  return <FilesContent view="folder" folderId={id} />;
}
