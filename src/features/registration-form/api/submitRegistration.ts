import type { RegistrationFormSchema } from "../model/RegistrationForm.schema";

export const submitRegistration = async (data: RegistrationFormSchema) => {
  const res = await fetch("/api/registration", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Submission failed");
  }
};
