import React from "react";
import Dashboard from "@/components/Dashboard";
import { checkAuth } from "@/utils/checkAuth";
import * as Api from "@/api";
import { FileItem } from "@/api/dto/files.dto";



const DashboardPage: React.FC = async () => {
  await checkAuth();
  const file: FileItem[] = await Api.files.getAll();  // Ensure getAll() returns FileItem[]

  return (
    <>
      <Dashboard items={file} />
    </>
  );
}

export default DashboardPage;