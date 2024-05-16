import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { ErrorOption } from "react-hook-form";

interface Props {
  register: any;
  error: undefined | ErrorOption;
}
export const CheckboxLabels = ({ register, error }: Props) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox />}
        {...register("selectedOption")}
        value="socialMedia"
        label="Social media"
      />

      <FormControlLabel
        control={<Checkbox />}
        {...register("selectedOption")}
        value="friends"
        label="Friends"
      />

      <FormControlLabel
        control={<Checkbox />}
        {...register("selectedOption")}
        value="myself"
        label="Found myself"
      />

      {error && (
        <Typography
          component="p"
          variant="body1"
          color="red"
          sx={{ textAlign: "center" }}
        >
          {error.message}
        </Typography>
      )}
    </FormGroup>
  );
};
