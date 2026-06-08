'use client'

import { Button } from '@/components/ui/button'

interface ResumePreviewProps {
  content: string
}

export default function ResumePreview({ content }: ResumePreviewProps) {
  function handleDownload() {
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'resume.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Generated Resume</h2>
        <Button onClick={handleDownload} variant="outline">
          Download
        </Button>
      </div>
      <pre className="whitespace-pre-wrap rounded-md border bg-muted p-4 text-sm leading-relaxed font-mono">
        {content}
      </pre>
    </div>
  )
}
