import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(80, "Name is too long"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message is too short").max(4000, "Message is too long"),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof ContactSchema>;