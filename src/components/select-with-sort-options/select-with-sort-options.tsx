import { useState } from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export const SelectWithSortOptions = (): JSX.Element => {
  const [sortBy, setSortBy] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as string);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sortBy}
        label="Sort by"
        onChange={handleChange}
      >
        <MenuItem value="date">Date</MenuItem>
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="organizer">Organizer</MenuItem>
      </Select>
    </FormControl>
  );
};
