import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().nonempty("Name is required"),
  role: z.string().nonempty("Role is required"),
  phone: z.string().nonempty("Phone is required"),
  email: z.string().email("Invalid email address"),
  message: z.string(),
  terms: z.boolean().refine((data) => data, "You must agree to the terms"),
});

export type ContactFormSchema = z.infer<typeof ContactFormSchema>;
