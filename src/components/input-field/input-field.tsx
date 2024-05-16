import { Box, TextField, Typography } from "@mui/material";
import { ErrorOption } from "react-hook-form";

interface Props extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  register: any;
  error: undefined | ErrorOption;
}

export const InputField = ({
  type = "text",
  name,
  placeholder,
  register,
  error,
  label,
}: Props): JSX.Element => {
  return (
    <Box
      sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1 }}
    >
      <Typography
        component="label"
        variant="body1"
        fontWeight={500}
        color="#000"
        htmlFor={name}
      >
        {label}
      </Typography>
      <TextField
        variant="standard"
        error={error}
        fullWidth
        type={type}
        {...register(name)}
        placeholder={placeholder}
        name={name}
        id={`field-${name}`}
        helperText={error?.message}
      />
    </Box>
  );
};
