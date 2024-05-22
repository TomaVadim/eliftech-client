import { Box, TextField, Typography } from "@mui/material";
import { ErrorOption } from "react-hook-form";

interface Props extends React.ComponentPropsWithoutRef<"textarea"> {
  label: string;
  register: any;
  error: undefined | ErrorOption;
}

export const TextareaField = ({
  label,
  name,
  register,
  error,
  ...props
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
        htmlFor={label}
      >
        {label}
      </Typography>
      <TextField
        sx={{
          "& > #field-Description-helper-text": {
            marginInline: 0,
          },
        }}
        variant="outlined"
        error={error}
        fullWidth
        multiline
        rows={4}
        {...register(name)}
        {...props}
        name={name}
        helperText={error?.message}
        id={`field-${label}`}
      />
    </Box>
  );
};
