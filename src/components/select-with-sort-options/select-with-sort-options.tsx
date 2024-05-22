import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface Props {
  sortBy: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}

export const SelectWithSortOptions = ({
  sortBy,
  onChange,
}: Props): JSX.Element => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sortBy}
        label="Sort by"
        onChange={(e) => onChange(e)}
      >
        <MenuItem value="default">Default</MenuItem>
        <MenuItem value="date">Date</MenuItem>
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="organizer">Organizer</MenuItem>
      </Select>
    </FormControl>
  );
};
