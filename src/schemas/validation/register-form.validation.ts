import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const registerFormSchema = zod.object({
  fullName: zod.string().min(2, "Full name must have at least 2 characters"),
  dateOfBirth: zod
    .string()
    .min(1, "Enter your date of birth like '01.01.2000'"),
  email: zod.string().email("Enter a valid email"),
  selectedOption: zod
    .array(zod.string())
    .min(1, "Select an option")
    .max(1, "Select only one option"),
});

export const useValidateRegisterForm = () =>
  useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullName: "",
      dateOfBirth: "",
      email: "",
      selectedOption: [],
    },
  });

export type RegisterFormData = zod.infer<typeof registerFormSchema>;
