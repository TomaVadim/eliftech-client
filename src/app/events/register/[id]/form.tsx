"use client";

import { Box, Button } from "@mui/material";

import { CheckboxLabels } from "@/components/checkbox-labels/checkbox-labels";
import { InputField } from "@/components/input-field/input-field";
import {
  RegisterFormData,
  useValidateRegisterForm,
} from "@/schemas/validation/register-form.validation";
import { fetcher } from "@/api/fetcher";

export const RegisterForm = ({ id }: { id: string }) => {
  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useValidateRegisterForm();

  const onSubmit = async (data: RegisterFormData) => {
    const newParticipant = {
      ...data,
      selectedOption: data.selectedOption.join(","),
    };

    try {
      const response = await fetcher.put(
        "/events/new-participant",
        newParticipant,
        {
          params: { eventId: id },
        }
      );

      console.log(response);
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
        label="Full name"
        name="fullName"
        type="text"
        placeholder="John Doe"
        register={register}
        error={errors.fullName}
      />

      <InputField
        label="Email"
        name="email"
        type="text"
        placeholder="example@gmail.com"
        register={register}
        error={errors.email}
      />

      <InputField
        label="Date of birth"
        name="dateOfBirth"
        type="date"
        register={register}
        error={errors.dateOfBirth}
      />

      <CheckboxLabels error={errors.selectedOption} register={register} />

      <Button variant="contained" type="submit">
        Register
      </Button>
    </Box>
  );
};
