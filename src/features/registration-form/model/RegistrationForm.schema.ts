
import { z } from "zod";


export const RegistrationFormSchema = z.object({
  name: z.string().nonempty("This field is required"),
  role: z.string().nonempty("This field is required"),
  phone: z.string().nonempty("This field is required"),
  email: z.string().email("Invalid email address"),
  message: z.string(),
  terms: z.boolean().refine((data) => data, "You must agree to the terms"),
});

export type RegistrationFormSchema = z.infer<typeof RegistrationFormSchema>;
