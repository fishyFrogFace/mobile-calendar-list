import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/nb";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import { entries } from "./data";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

interface Entry {
  tittel: string;
  from: string;
  to: string;
  sted: string;
  ressurs: string;
  ansvarlig: string;
  category: string;
  antall: number;
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

export default function Search() {
  const [fromValue, setFromValue] = useState<Dayjs | null>(dayjs());

  const [toValue, setToValue] = useState<Dayjs | null>(dayjs());

  const [category, setCategory] = useState<string | null>(null);

  const [searchValue, setSearchValue] = useState<string>("");

  const [open, setOpen] = useState(
    Object.fromEntries(entries.map((entry: Entry) => [entry.ansvarlig, false]))
  );

  const [entryList, setEntryList] = useState(entries);

  console.log("entryList.length:", entryList.length);
  useEffect(() => {
    const datetimeInRange = (entry: Entry) => {
      console.log(
        "fromValue:",
        fromValue?.toISOString(),
        "\ntoValue:",
        toValue?.toISOString(),
        "\nentry from:",
        entry.from,
        "\nentry.to:",
        entry.to,
        "\nfromValue && toValue:",
        fromValue !== null && toValue !== null,
        "\nto between:",
        dayjs(entry.from) > fromValue! && dayjs(entry.from) < toValue!,
        "\nfrom between:",
        dayjs(entry.to) > fromValue! && dayjs(entry.to) < toValue!,
        "\nstarts before and after:",
        dayjs(entry.from) < fromValue! && dayjs(entry.to) > toValue!
      );
      return (
        (fromValue &&
          toValue &&
          dayjs(entry.from) > fromValue &&
          dayjs(entry.from) < toValue) ||
        (dayjs(entry.to) > fromValue! && dayjs(entry.to) < toValue!) ||
        (dayjs(entry.from) < fromValue! && dayjs(entry.to) > toValue!)
      );
    };

    const containsSearchValues = (entry: Entry) => {
      const includesValue = (entry: Entry, value: string) =>
        entry.tittel.toLowerCase().includes(value) ||
        entry.ansvarlig.toLowerCase().includes(value) ||
        entry.ressurs.toLowerCase().includes(value) ||
        entry.sted.toLowerCase().includes(value);

      const searchValues = searchValue
        .toLowerCase()
        .split(" ")
        .map((term) => term.trim())
        .filter((term) => term.length !== 0);

      return (
        searchValues.length === 0 ||
        !searchValues.map((val) => includesValue(entry, val)).includes(false)
      );
    };

    setEntryList(
      entries.filter(
        (entry) => datetimeInRange(entry) && containsSearchValues(entry)
      )
    );
  }, [fromValue, toValue, category, searchValue]);

  const handleClick = (ansvarlig: string) => {
    setOpen({ ...open, [ansvarlig]: !open[ansvarlig] });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="nb">
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
          value={category}
          onChange={(event: any, newValue: string | null) => {
            setCategory(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Kategori" variant="outlined" />
          )}
        />
        <TextField
          label="Søk"
          variant="outlined"
          value={searchValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(event.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List
          sx={{
            width: "100%",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <Stack spacing={1}>
            {entryList.map((entry: Entry) => (
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
                          month: "long",
                          day: "2-digit",
                        })}
                      </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography>
                        <b>Til:</b>
                      </Typography>
                      <Typography>
                        {new Date(entry.to).toLocaleDateString("no-NB", {
                          weekday: "long",
                          hour: "numeric",
                          minute: "numeric",
                          year: "numeric",
                          month: "long",
                          day: "2-digit",
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
                    <Stack direction="row" justifyContent="space-between">
                      <Typography>
                        <b>Antall deltakere:</b>
                      </Typography>
                      <Typography>{entry.antall}</Typography>
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
