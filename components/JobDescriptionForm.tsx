'use client'

import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function JobDescriptionForm() {
  const [jobDescription, setJobDescription] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('Job description:', jobDescription)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-2xl">
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
      <Button type="submit" className="self-end">
        Submit
      </Button>
    </form>
  )
}
