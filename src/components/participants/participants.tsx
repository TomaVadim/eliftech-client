"use client";

import { useState, useMemo, useCallback, ChangeEvent } from "react";

import debounce from "debounce";
import { Grid, OutlinedInput, Paper, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { ParticipantResponse } from "@/schemas/participants-response/participants-response";

interface Props {
  participants: ParticipantResponse[];
}

export const Participants = ({ participants }: Props): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const [filteredParticipants, setFilteredParticipants] =
    useState<ParticipantResponse[]>(participants);

  const debouncedFilter = useMemo(
    () =>
      debounce((value: string) => {
        setFilteredParticipants(
          participants.filter((participant) =>
            participant.fullName.toLowerCase().includes(value.toLowerCase())
          )
        );
      }, 300),
    [participants]
  );

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);
      debouncedFilter(value);
    },
    [debouncedFilter]
  );

  return (
    <>
      <OutlinedInput
        onChange={handleInputChange}
        value={inputValue}
        sx={{
          marginInline: "auto",
          display: "flex",
          width: "min(90%, 500px)",
          marginBottom: "1rem",
        }}
        endAdornment={<SearchIcon />}
        placeholder="Search by name..."
      />

      <Typography
        variant="h4"
        component="h1"
        sx={{ textAlign: "center", my: "2rem" }}
      >
        Participants
      </Typography>

      <Grid container spacing={2} sx={{ marginBlock: "1rem" }}>
        {filteredParticipants.length === 0 && (
          <Grid item xs={12}>
            <Typography
              sx={{ marginTop: "3rem", textAlign: "center" }}
              variant="h5"
            >
              No participants yet
            </Typography>
          </Grid>
        )}

        {filteredParticipants.map((participant, index) => (
          <Grid item xs={12} lg={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
              }}
            >
              <Typography variant="h5" component="span" sx={{ flexGrow: 1 }}>
                {participant.fullName}
              </Typography>

              <Typography variant="body1" component="span" sx={{ flexGrow: 1 }}>
                {participant.email}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
