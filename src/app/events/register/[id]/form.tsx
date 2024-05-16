"use client";

import { CheckboxLabels } from "@/components/checkbox-labels/checkbox-labels";
import { InputField } from "@/components/input-field/input-field";
import {
  RegisterFormData,
  useValidateRegisterForm,
} from "@/schemas/validation/register-form.validation";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

export const RegisterForm = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useValidateRegisterForm();

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
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
