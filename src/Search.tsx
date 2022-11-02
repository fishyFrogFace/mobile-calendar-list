import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import { entries, nummer } from "./data";

interface Entry {
  tittel: string;
  from: string;
  to: string;
  sted: string;
  ressurs: string;
  ansvarlig: string;
}

const categories = [
  "Offisielle besøk til NTNU",
  "Større arrangementer",
  "Aktiviteter etter ordinær arbeidstid uten alkohol",
  "Planlagt utkobling/stans/test",
  "Intern aktivitet Vakt og service",
  "Aktiviteter etter ordinær arbeidstid med alkohol",
  "Flaggdager",
  "Alkoholsøknader linjeforeningskontor",
];

console.log(
  JSON.stringify(
    entries.map((entry: Entry) => ({
      ...entry,
      ressurs: entry.ressurs.replace(
        "92345678",
        nummer[Math.floor(Math.random() * nummer.length)]
      ),
      category: categories[Math.floor(Math.random() * categories.length)],
      tittel: `${entry.sted} ${entry.ansvarlig} BESKRIVELSE`,
    }))
  )
);

export default function Search() {
  const [fromValue, setFromValue] = useState<Dayjs | null>(
    dayjs("2018-01-01T00:00:00.000Z")
  );
  const [toValue, setToValue] = useState<Dayjs | null>(
    dayjs("2018-01-01T00:00:00.000Z")
  );

  const [open, setOpen] = useState(
    Object.fromEntries(entries.map((entry: Entry) => [entry.ansvarlig, false]))
  );

  const handleClick = (ansvarlig: string) => {
    setOpen({ ...open, [ansvarlig]: !open[ansvarlig] });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <Typography>Søk i kalenderoppføringer</Typography>
        <MobileDateTimePicker
          label="Fra"
          ampm={false}
          value={fromValue}
          onChange={(newValue) => {
            setFromValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <MobileDateTimePicker
          label="Til"
          ampm={false}
          value={toValue}
          onChange={(newValue) => {
            setToValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <Autocomplete
          options={categories}
          id="open-on-focus"
          openOnFocus
          renderInput={(params) => (
            <TextField {...params} label="Kategori" variant="standard" />
          )}
        />
        <List
          sx={{
            width: "100%",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <Stack spacing={1}>
            {entries.map((entry: Entry) => (
              <>
                <Divider />
                <ListItemButton
                  onClick={() => handleClick(entry.ansvarlig)}
                  selected
                >
                  <ListItemText primary={entry.tittel} />
                  {open[entry.ansvarlig] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={open[entry.ansvarlig]}
                  timeout="auto"
                  unmountOnExit
                >
                  <Stack
                    sx={{
                      paddingLeft: "16px",
                      paddingRight: "16px",
                    }}
                  >
                    <Stack direction="row" justifyContent="space-between">
                      <Typography>
                        <b>Fra:</b>
                      </Typography>
                      <Typography>
                        {new Date(entry.from).toLocaleDateString("no-NB", {
                          weekday: "long",
                          hour: "numeric",
                          minute: "numeric",
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })}
                      </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography>
                        <b>Til:</b>
                      </Typography>
                      <Typography>
                        {" "}
                        {new Date(entry.to).toLocaleDateString("no-NB", {
                          weekday: "long",
                          hour: "numeric",
                          minute: "numeric",
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })}
                      </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography>
                        <b>Sted:</b>
                      </Typography>
                      <Typography>{entry.sted}</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography>
                        <b>Ressurs:</b>
                      </Typography>
                      <Typography>{entry.ressurs}</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography>
                        <b>Ansvarlig:</b>
                      </Typography>
                      <Typography>{entry.ansvarlig}</Typography>
                    </Stack>
                  </Stack>
                </Collapse>
              </>
            ))}
          </Stack>
        </List>
      </Stack>
    </LocalizationProvider>
  );
}
