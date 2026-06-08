'use client'

import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import ResumePreview from '@/components/ResumePreview'

export default function JobDescriptionForm() {
  const [jobDescription, setJobDescription] = useState('')
  const [resume, setResume] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setResume(null)
    try {
      const res = await fetch('/api/job-description', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobDescription }),
      })
      const data = await res.json()
      if (data.resume) setResume(data.resume)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
        <label htmlFor="job-description" className="text-sm font-medium">
          Job Description
        </label>
        <Textarea
          id="job-description"
          placeholder="Paste the job description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="min-h-48 resize-y"
        />
        <Button type="submit" disabled={loading || !jobDescription.trim()} className="self-end">
          {loading ? 'Generating…' : 'Submit'}
        </Button>
      </form>
      {resume && <ResumePreview content={resume} />}
    </div>
  )
}
