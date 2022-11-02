import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

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

const entries = [
  {
    tittel: "Potenti cras in purus eu magna vulputate",
    from: "2022-11-17T13:27:57Z",
    to: "2023-01-24T15:52:02Z",
    sted: "01810 Russell Court",
    ressurs: "Faustina Vasilchikov",
    ansvarlig: "Moen-Jakubowski",
  },
  {
    tittel: "Habitasse platea dictumst morbi vestibulum",
    from: "2022-09-09T23:26:48Z",
    to: "2023-03-21T09:46:46Z",
    sted: "81 Montana Parkway",
    ressurs: "Jim Phorsby",
    ansvarlig: "Gleichner, Schimmel and Auer",
  },
  {
    tittel: "Lacus at velit vivamus vel",
    from: "2022-09-29T05:22:04Z",
    to: "2023-01-23T04:33:29Z",
    sted: "14640 Ridge Oak Alley",
    ressurs: "Shelli Rekes",
    ansvarlig: "Dickinson, Hackett and McClure",
  },
  {
    tittel: "Nonummy integer non velit donec diam neque",
    from: "2022-09-30T07:22:31Z",
    to: "2023-01-04T21:39:36Z",
    sted: "67 Main Avenue",
    ressurs: "Bryant Shimmans",
    ansvarlig: "Hagenes Group",
  },
  {
    tittel: "Sapien placerat ante nulla justo",
    from: "2022-10-25T04:58:09Z",
    to: "2022-11-03T17:40:56Z",
    sted: "88643 Manley Pass",
    ressurs: "Lorine Lowin",
    ansvarlig: "Beier LLC",
  },
  {
    tittel: "Primis in faucibus orci",
    from: "2022-10-04T12:28:59Z",
    to: "2022-11-07T01:50:38Z",
    sted: "3001 Cascade Parkway",
    ressurs: "Kirby Cheal",
    ansvarlig: "Grimes-Sporer",
  },
  {
    tittel: "Justo etiam pretium iaculis justo",
    from: "2022-11-10T13:35:58Z",
    to: "2023-03-20T08:44:34Z",
    sted: "31 Dennis Court",
    ressurs: "Gloriana McPake",
    ansvarlig: "Lowe LLC",
  },
  {
    tittel: "Ante vel ipsum praesent",
    from: "2022-11-01T16:00:00Z",
    to: "2022-11-02T02:00:00Z",
    sted: "8684 Montana Trail",
    ressurs: "Mireielle Whyard",
    ansvarlig: "Cassin and Sons",
  },
  {
    tittel: "Morbi odio odio elementum eu interdum",
    from: "2022-11-02T19:00:00Z",
    to: "2022-11-02T02:00:00Z",
    sted: "00383 Kipling Street",
    ressurs: "Tabby Panniers",
    ansvarlig: "Pfeffer-Kris",
  },
  {
    tittel: "Lectus in quam fringilla",
    from: "2022-11-02T16:00:00Z",
    to: "2022-11-03T02:00:00Z",
    sted: "484 Blaine Point",
    ressurs: "Christal York",
    ansvarlig: "Rath and Sons",
  },
  {
    tittel: "Mauris enim leo rhoncus sed vestibulum sit",
    from: "2022-11-02T16:30:00Z",
    to: "2023-11-02T02:00:00Z",
    sted: "6 Katie Circle",
    ressurs: "Urbanus Elsmere",
    ansvarlig: "Spinka-Osinski",
  },
  {
    tittel: "Elementum pellentesque quisque porta",
    from: "2022-11-02T07:00:00Z",
    to: "2022-11-02T14:30:00Z",
    sted: "276 Veith Avenue",
    ressurs: "Ellis Petford",
    ansvarlig: "Feeney-Stiedemann",
  },
  {
    tittel: "Pellentesque volutpat dui maecenas tristique est",
    from: "2022-11-02T12:00:00Z",
    to: "2022-11-02T14:00:00Z",
    sted: "0619 Mifflin Point",
    ressurs: "Quinn Hannent",
    ansvarlig: "Nader-Rau",
  },
  {
    tittel: "Ipsum primis in faucibus",
    from: "2022-11-02T09:00:00Z",
    to: "2022-11-02T16:00:00Z",
    sted: "95398 Mockingbird Lane",
    ressurs: "Idell Grastye",
    ansvarlig: "Gislason-O'Keefe",
  },
  {
    tittel: "Vulputate ut ultrices vel augue vestibulum ante",
    from: "2022-11-02T16:00:00Z",
    to: "2022-11-02T23:00:00Z",
    sted: "04 Warner Terrace",
    ressurs: "Legra Antonescu",
    ansvarlig: "Schmitt-King",
  },
  {
    tittel: "Mauris ullamcorper purus sit amet nulla quisque",
    from: "2022-11-02T17:30:00Z",
    to: "2022-11-02T23:30:00Z",
    sted: "368 Schurz Crossing",
    ressurs: "Elliot Rude",
    ansvarlig: "Hayes, Pfannerstill and Lindgren",
  },
  {
    tittel: "Suscipit nulla elit ac nulla sed vel",
    from: "2022-11-02T00:00:00Z",
    to: "2022-11-02T00:00:00Z",
    sted: "5 Graceland Place",
    ressurs: "Ase Vedeneev",
    ansvarlig: "Funk LLC",
  },
  {
    tittel: "Justo etiam pretium iaculis justo",
    from: "2022-11-02T00:00:00Z",
    to: "2022-11-02T00:00:00Z",
    sted: "7 Fremont Drive",
    ressurs: "Elvis Cocker",
    ansvarlig: "Nienow, Collier and Fadel",
  },
  {
    tittel: "Ligula vehicula consequat morbi a ipsum",
    from: "2022-11-02T00:00:00Z",
    to: "2022-11-02T00:00:00Z",
    sted: "3281 Doe Crossing Circle",
    ressurs: "Jamil Teasell",
    ansvarlig: "Dooley-O'Reilly",
  },
  {
    tittel: "Tristique est et tempus semper est",
    from: "2022-11-02T00:00:00Z",
    to: "2022-11-02T00:00:00Z",
    sted: "49512 Corscot Parkway",
    ressurs: "Karie Worsfold",
    ansvarlig: "Weimann, Conroy and Hills",
  },
  {
    tittel: "Pede lobortis ligula sit amet eleifend pede",
    from: "2022-11-02T00:00:00Z",
    to: "2022-11-02T00:00:00Z",
    sted: "9 Oak Valley Lane",
    ressurs: "Jenine Bredes",
    ansvarlig: "Walker Group",
  },
  {
    tittel: "Ligula vehicula consequat morbi a ipsum integer",
    from: "2022-11-02T00:00:00Z",
    to: "2022-11-02T00:00:00Z",
    sted: "9 Bunker Hill Street",
    ressurs: "Pauletta Warke",
    ansvarlig: "Denesik, Ruecker and Kiehn",
  },
];

export default function Search() {
  const [fromValue, setFromValue] = useState<Dayjs | null>(
    dayjs("2018-01-01T00:00:00.000Z")
  );
  const [toValue, setToValue] = useState<Dayjs | null>(
    dayjs("2018-01-01T00:00:00.000Z")
  );
  const [category, setCategory] = useState("");
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
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Nested List Items
            </ListSubheader>
          }
        >
          <Stack>
            {entries.map((entry: Entry) => (
              <>
                <ListItemButton onClick={() => handleClick(entry.ansvarlig)}>
                  <ListItemText primary={entry.tittel} />
                  {open[entry.ansvarlig] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={open[entry.ansvarlig]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary="Starred" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </>
            ))}
          </Stack>
        </List>
      </Stack>
    </LocalizationProvider>
  );
}
