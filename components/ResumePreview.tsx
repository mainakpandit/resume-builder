"use client";

import { Button } from "@/components/ui/button";
import { useCallback } from "react";

interface ResumePreviewProps {
  content: Blob;
}

export default function ResumePreview({ content }: ResumePreviewProps) {
  const handleDownload = useCallback(() => {
    const url = URL.createObjectURL(content);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.pdf";
    a.click();
    URL.revokeObjectURL(url);
  }, [content]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Generated Resume</h2>
        <Button onClick={handleDownload} variant="outline">
          Download
        </Button>
      </div>
    </div>
  );
}
