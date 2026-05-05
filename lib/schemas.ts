import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(80),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(2).max(120).optional().or(z.literal("")),
  message: z.string().min(10, "Tell me a little more").max(4000),
});

export type ContactInput = z.infer<typeof contactSchema>;
