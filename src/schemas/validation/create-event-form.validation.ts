import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";

const eventFormSchema = zod.object({
  title: zod.string().min(2, "Title must have at least 2 characters"),
  description: zod
    .string()
    .min(2, "Description must have at least 2 characters"),
  date: zod.string().date("Enter a valid date like '01.01.2000'"),
  organizer: zod.string().min(2, "Organizer must have at least 2 characters"),
});

export const useValidateCreateEventForm = () =>
  useForm({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      title: "",
      description: "",
      date: "",
      organizer: "",
    },
  });

export type CreateEventFormData = zod.infer<typeof eventFormSchema>;
