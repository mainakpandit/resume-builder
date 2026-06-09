import { z } from "zod";

export const contactInfoSchema = z.object({
  email: z.string(),
  phone: z.string(),
  linkedin: z.string(),
  website: z.string(),
});

export const workExperienceSchema = z.object({
  company: z.string(),
  location: z.string(),
  title: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  bullets: z.array(z.string()),
});

export const educationSchema = z.object({
  institution: z.string(),
  location: z.string(),
  degree: z.string(),
  startDate: z.string(),
  endDate: z.string(),
});

export const resumeDataSchema = z.object({
  name: z.string(),
  contact: contactInfoSchema,
  summary: z.string(),
  skills: z.record(z.string(), z.string()),
  experience: z.array(workExperienceSchema),
  education: z.array(educationSchema),
});
