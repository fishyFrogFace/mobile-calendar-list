export interface Entry {
  tittel: string;
  from: string;
  to: string;
  sted: string;
  ressurs: string;
  ansvarlig: string;
}

export const categories = [
  "Offisielle besøk til NTNU",
  "Større arrangementer",
  "Aktiviteter etter ordinær arbeidstid uten alkohol",
  "Planlagt utkobling/stans/test",
  "Intern aktivitet Vakt og service",
  "Aktiviteter etter ordinær arbeidstid med alkohol",
  "Flaggdager",
  "Alkoholsøknader linjeforeningskontor",
];

export const entries = [
  {
    tittel: "01810 Russell Court Moen-Jakubowski Planleggingsmøte i R1",
    from: "2022-11-17T13:00:00Z",
    to: "2023-01-24T15:00:00Z",
    sted: "01810 Russell Court",
    ressurs: "Faustina Vasilchikov, 42224352",
    ansvarlig: "Moen-Jakubowski",
    category: "Aktiviteter etter ordinær arbeidstid uten alkohol",
    antall: 150,
  },
  {
    tittel: "81 Montana Parkway Gleichner Festligheter",
    from: "2022-09-09T23:00:00Z",
    to: "2023-03-21T09:00:00Z",
    sted: "81 Montana Parkway",
    ressurs: "Jim Phorsby, 92874614",
    ansvarlig: "Gleichner, Schimmel and Auer",
    category: "Alkoholsøknader linjeforeningskontor",
    antall: 10,
  },
  {
    tittel: "14640 Ridge Oak Alley Dickinson Festligheter",
    from: "2022-09-29T05:00:00Z",
    to: "2023-01-23T04:00:00Z",
    sted: "14640 Ridge Oak Alley",
    ressurs: "Shelli Rekes, 93085924",
    ansvarlig: "Dickinson, Hackett and McClure",
    category: "Alkoholsøknader linjeforeningskontor",
    antall: 25,
  },
  {
    tittel: "67 Main Avenue Hagenes Group Sperret parkeringsplass",
    from: "2022-09-30T07:00:00Z",
    to: "2023-01-04T21:00:00Z",
    sted: "67 Main Avenue",
    ressurs: "Bryant Shimmans, 49925096",
    ansvarlig: "Hagenes Group",
    category: "Intern aktivitet Vakt og service",
    antall: 0,
  },
  {
    tittel: "88643 Manley Pass Beier LLC Forskningstorget",
    from: "2022-10-25T04:00:00Z",
    to: "2022-11-03T17:00:00Z",
    sted: "88643 Manley Pass",
    ressurs: "Lorine Lowin, 99379526",
    ansvarlig: "Beier LLC",
    category: "Større arrangementer",
    antall: 300,
  },
  {
    tittel: "3001 Cascade Parkway Grimes-Sporer Alkoholsøknad linjeforening",
    from: "2022-10-04T12:00:00Z",
    to: "2022-11-07T01:00:00Z",
    sted: "3001 Cascade Parkway",
    ressurs: "Kirby Cheal, 45015699",
    ansvarlig: "Grimes-Sporer",
    category: "Alkoholsøknader linjeforeningskontor",
    antall: 15,
  },
  {
    tittel: "31 Dennis Court Lowe LLC Arbeid på heisen i bygget",
    from: "2022-11-10T13:00:00Z",
    to: "2023-03-20T08:00:00Z",
    sted: "31 Dennis Court",
    ressurs: "Gloriana McPake, 43948163",
    ansvarlig: "Lowe LLC",
    category: "Planlagt utkobling/stans/test",
    antall: 0,
  },
  {
    tittel: "8684 Montana Trail Cassin Kronprinsbesøk",
    from: "2022-11-01T16:00:00Z",
    to: "2022-11-02T02:00:00Z",
    sted: "8684 Montana Trail",
    ressurs: "Mireielle Whyard, 93282052",
    ansvarlig: "Cassin and Sons",
    category: "Offisielle besøk til NTNU",
    antall: 50,
  },
  {
    tittel: "00383 Kipling Street Pfeffer-Kris Festligheter",
    from: "2022-11-02T19:00:00Z",
    to: "2022-11-02T02:00:00Z",
    sted: "00383 Kipling Street",
    ressurs: "Tabby Panniers, 98308064",
    ansvarlig: "Pfeffer-Kris",
    category: "Aktiviteter etter ordinær arbeidstid med alkohol",
    antall: 35,
  },
  {
    tittel: "484 Blaine Point Rath Festligheter",
    from: "2022-11-02T16:00:00Z",
    to: "2022-11-03T02:00:00Z",
    sted: "484 Blaine Point",
    ressurs: "Christal York, 90776824",
    ansvarlig: "Rath and Sons",
    category: "Aktiviteter etter ordinær arbeidstid med alkohol",
    antall: 40,
  },
  {
    tittel: "6 Katie Circle Spinka-Osinski Festligheter",
    from: "2022-11-02T16:30:00Z",
    to: "2023-11-02T02:00:00Z",
    sted: "6 Katie Circle",
    ressurs: "Urbanus Elsmere, 45105001",
    ansvarlig: "Spinka-Osinski",
    category: "Alkoholsøknader linjeforeningskontor",
    antall: 350,
  },
  {
    tittel: "276 Veith Avenue Feeney-Stiedemann Intern",
    from: "2022-11-02T07:00:00Z",
    to: "2022-11-02T14:30:00Z",
    sted: "276 Veith Avenue",
    ressurs: "Ellis Petford, 42575386",
    ansvarlig: "Feeney-Stiedemann",
    category: "Intern aktivitet Vakt og service",
    antall: 0,
  },
  {
    tittel: "0619 Mifflin Point Nader-Rau Konfirmasjon",
    from: "2022-11-02T12:00:00Z",
    to: "2022-11-02T14:00:00Z",
    sted: "0619 Mifflin Point",
    ressurs: "Quinn Hannent, 98765068",
    ansvarlig: "Nader-Rau",
    category: "Aktiviteter etter ordinær arbeidstid uten alkohol",
    antall: 25,
  },
  {
    tittel: "95398 Mockingbird Lane Gislason-O'Keefe Strømstans",
    from: "2022-11-02T09:00:00Z",
    to: "2022-11-02T16:00:00Z",
    sted: "95398 Mockingbird Lane",
    ressurs: "Idell Grastye, 49925096",
    ansvarlig: "Gislason-O'Keefe",
    category: "Planlagt utkobling/stans/test",
    antall: 0,
  },
  {
    tittel: "04 Warner Terrace Schmitt-King Researcher's night",
    from: "2022-11-02T16:00:00Z",
    to: "2022-11-02T23:00:00Z",
    sted: "04 Warner Terrace",
    ressurs: "Legra Antonescu, 99871190",
    ansvarlig: "Schmitt-King",
    category: "Større arrangementer",
    antall: 1500,
  },
  {
    tittel: "368 Schurz Crossing Hayes Flagging",
    from: "2022-11-02T08:00:00Z",
    to: "2022-11-02T20:00:00Z",
    sted: "368 Schurz Crossing",
    ressurs: "Elliot Rude, 49925096",
    ansvarlig: "Hayes, Pfannerstill and Lindgren",
    category: "Flaggdager",
    antall: 0,
  },
  {
    tittel: "5 Graceland Place Funk LLC Intern",
    from: "2022-11-02T00:00:00Z",
    to: "2022-11-02T00:00:00Z",
    sted: "5 Graceland Place",
    ressurs: "Ase Vedeneev, 93689851",
    ansvarlig: "Funk LLC",
    category: "Intern aktivitet Vakt og service",
    antall: 0,
  },
  {
    tittel: "7 Fremont Drive Nienow Rektorfest",
    from: "2022-11-02T00:00:00Z",
    to: "2022-11-02T00:00:00Z",
    sted: "7 Fremont Drive",
    ressurs: "Elvis Cocker, 48632291",
    ansvarlig: "Nienow, Collier and Fadel",
    category: "Offisielle besøk til NTNU",
    antall: 15,
  },
  {
    tittel: "49512 Corscot Parkway Weimann Samarbeidsmøte",
    from: "2022-11-02T00:00:00Z",
    to: "2022-11-02T00:00:00Z",
    sted: "49512 Corscot Parkway",
    ressurs: "Karie Worsfold, 90682195",
    ansvarlig: "Weimann, Conroy and Hills",
    category: "Aktiviteter etter ordinær arbeidstid uten alkohol",
    antall: 40,
  },
  {
    tittel: "9 Oak Valley Lane Walker Group Stans i ventilasjon",
    from: "2022-11-02T00:00:00Z",
    to: "2022-11-02T00:00:00Z",
    sted: "9 Oak Valley Lane",
    ressurs: "Jenine Bredes, 92776761",
    ansvarlig: "Walker Group",
    category: "Planlagt utkobling/stans/test",
    antall: 0,
  },
  {
    tittel: "9 Bunker Hill Street Denesik Festligheter",
    from: "2022-11-02T00:00:00Z",
    to: "2022-11-02T00:00:00Z",
    sted: "9 Bunker Hill Street",
    ressurs: "Pauletta Warke, 97232748",
    ansvarlig: "Denesik, Ruecker and Kiehn",
    category: "Alkoholsøknader linjeforeningskontor",
    antall: 10,
  },
];

// prettier-ignore
export const nummer = [
  "42224352", "42763657", "42357455", "42632511", "41452908", "43149576", "44573971",
  "47203815", "42780162", "42998550", "42911963", "47535234", "47117148", "49628244",
  "42556939", "45733128", "42041254", "49229352", "43446429", "48518818", "47615646",
  "45314360", "46418549", "47730278", "49119296", "49684790", "43551280", "40048194",
  "46546640", "45139774", "43948163", "44970685", "46747619", "46167531", "42986585",
  "45105001", "46866553", "44135734", "46737307", "48352854", "43214164", "43633433",
  "40228057", "46106838", "41157078", "40585448", "46383366", "42812842", "41519277",
  "43006074", "44488685", "42490874", "49564339", "44872793", "40462396", "47050127",
  "42552147", "41693872", "42105507", "43435330", "44380920", "49617060", "44119572",
  "42458754", "47253194", "47641702", "48632291", "49137236", "49525073", "49925096",
  "41227651", "49494246", "47106248", "40860762", "43836079", "47100598", "48034522",
  "48987568", "45031003", "45585755", "44649742", "45262320", "48398229", "40580118",
  "42439182", "40536292", "46093039", "40482272", "43348539", "49923631", "47962460",
  "46896605", "45015699", "48964499", "49702552", "41981938", "44750626", "46151666",
  "41924144", "42575386", "99161236", "94171873", "98308064", "93215173", "95088066",
  "98902143", "98671612", "91223342", "98765068", "94523303", "96198858", "97483476",
  "97008098", "97677202", "93085924", "96427620", "91934045", "90450994", "99091021",
  "95001503", "94966925", "98798215", "95734552", "95318637", "92182003", "91217217",
  "90298231", "90707239", "93689851", "92545816", "96114181", "98353733", "90823037",
  "90511113", "96409432", "97022157", "99865071", "95931579", "99962475", "92776761",
  "93765643", "91897275", "90973107", "96810776", "98195880", "98040747", "92173398",
  "93729623", "94419740", "96843137", "93592629", "97232748", "98469055", "99021691",
  "98035815", "95490110", "99260628", "99231153", "92682128", "99871190", "93994956",
  "97076728", "90497269", "90776824", "93282052", "96863243", "93485091", "99145361",
  "94046455", "92874614", "93584525", "90941611", "95406888", "94994501", "97756561",
  "95630726", "92103253", "96915554", "94880287", "97229442", "93061084", "98242178",
  "95225466", "99318878", "95768371", "93240181", "90125292", "90682195", "93563464",
  "93357001", "95828425", "99332549", "99265441", "98987861", "98628742", "95390536",
  "99379526", "98485113", "92908125", "93871104",
];
