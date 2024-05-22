"use client";

import { Box, Button } from "@mui/material";

import { fetcher } from "@/api/fetcher";
import { InputField } from "@/components/input-field/input-field";
import {
  CreateEventFormData,
  useValidateCreateEventForm,
} from "@/schemas/validation/create-event-form.validation";
import { TextareaField } from "@/components/textarea-field/textarea-field";

export const CreateNewEventForm = () => {
  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useValidateCreateEventForm();

  const onSubmit = async (data: CreateEventFormData) => {
    try {
      await fetcher.post("/events", data);

      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 3, padding: 2 }}
    >
      <InputField
        label="Title"
        name="title"
        type="text"
        placeholder="Event title"
        register={register}
        error={errors.title}
      />

      <TextareaField
        label="Description"
        name="description"
        placeholder="Event description..."
        register={register}
        error={errors.description}
      />

      <InputField
        label="Date"
        name="date"
        type="date"
        placeholder="Event date"
        register={register}
        error={errors.date}
      />

      <InputField
        label="Organizer"
        name="organizer"
        type="text"
        placeholder="Event organizer"
        register={register}
        error={errors.organizer}
      />

      <Button variant="contained" type="submit">
        Register
      </Button>
    </Box>
  );
};
