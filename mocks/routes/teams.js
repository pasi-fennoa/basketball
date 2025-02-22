const TEAMS = [
  {
    id: 1,
    name: "Atlanta Hawks",
    nickname: "Hawks",
    code: "ATL",
    city: "Atlanta",
    logo: "https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "East",
        division: "Southeast",
      },
      vegas: {
        conference: "East",
        division: "Southeast",
      },
      utah: {
        conference: "East",
        division: "Southeast",
      },
      sacramento: {
        conference: "East",
        division: "Southeast",
      },
    },
  },
  {
    id: 2,
    name: "Boston Celtics",
    nickname: "Celtics",
    code: "BOS",
    city: "Boston",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "East",
        division: "Atlantic",
      },
      vegas: {
        conference: "East",
        division: "Atlantic",
      },
      utah: {
        conference: "East",
        division: "Atlantic",
      },
      sacramento: {
        conference: "East",
        division: "Atlantic",
      },
    },
  },
  {
    id: 3,
    name: "Brisbane Bullets",
    nickname: "Bullets",
    code: "BNE",
    city: "Brisbane",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1b/Brisbane_Bullets_1992.png/130px-Brisbane_Bullets_1992.png",
    allStar: false,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "Intl",
        division: null,
      },
    },
  },
  {
    id: 4,
    name: "Brooklyn Nets",
    nickname: "Nets",
    code: "BKN",
    city: "Brooklyn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/130px-Brooklyn_Nets_newlogo.svg.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "East",
        division: "Atlantic",
      },
      vegas: {
        conference: "East",
        division: "Atlantic",
      },
      utah: {
        conference: "East",
        division: "Atlantic",
      },
      sacramento: {
        conference: "East",
        division: "Atlantic",
      },
    },
  },
  {
    id: 5,
    name: "Charlotte Hornets",
    nickname: "Hornets",
    code: "CHA",
    city: "Charlotte",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f3/Hornets_de_Charlotte_logo.svg/1200px-Hornets_de_Charlotte_logo.svg.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "East",
        division: "Southeast",
      },
      vegas: {
        conference: "East",
        division: "Southeast",
      },
      utah: {
        conference: "East",
        division: "Southeast",
      },
      sacramento: {
        conference: "East",
        division: "Southeast",
      },
    },
  },
  {
    id: 6,
    name: "Chicago Bulls",
    nickname: "Bulls",
    code: "CHI",
    city: "Chicago",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d1/Bulls_de_Chicago_logo.svg/1200px-Bulls_de_Chicago_logo.svg.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "East",
        division: "Central",
      },
      vegas: {
        conference: "East",
        division: "Central",
      },
      utah: {
        conference: "East",
        division: "Central",
      },
      sacramento: {
        conference: "East",
        division: "Central",
      },
    },
  },
  {
    id: 7,
    name: "Cleveland Cavaliers",
    nickname: "Cavaliers",
    code: "CLE",
    city: "Cleveland",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/0/06/Cavs_de_Cleveland_logo_2017.png/150px-Cavs_de_Cleveland_logo_2017.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "East",
        division: "Central",
      },
      vegas: {
        conference: "East",
        division: "Central",
      },
      utah: {
        conference: "East",
        division: "Central",
      },
      sacramento: {
        conference: "East",
        division: "Central",
      },
    },
  },
  {
    id: 8,
    name: "Dallas Mavericks",
    nickname: "Mavericks",
    code: "DAL",
    city: "Dallas",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b8/Mavericks_de_Dallas_logo.svg/150px-Mavericks_de_Dallas_logo.svg.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "West",
        division: "Southwest",
      },
      vegas: {
        conference: "West",
        division: "Southwest",
      },
      utah: {
        conference: "West",
        division: "Southwest",
      },
      sacramento: {
        conference: "West",
        division: "Southwest",
      },
    },
  },
  {
    id: 9,
    name: "Denver Nuggets",
    nickname: "Nuggets",
    code: "DEN",
    city: "Denver",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/35/Nuggets_de_Denver_2018.png/180px-Nuggets_de_Denver_2018.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "West",
        division: "Northwest",
      },
      vegas: {
        conference: "West",
        division: "Northwest",
      },
      utah: {
        conference: "West",
        division: "Northwest",
      },
      sacramento: {
        conference: "West",
        division: "Northwest",
      },
    },
  },
  {
    id: 10,
    name: "Detroit Pistons",
    nickname: "Pistons",
    code: "DET",
    city: "Detroit",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Detroit_Pistons_primary_logo_2017.png/150px-Detroit_Pistons_primary_logo_2017.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "East",
        division: "Central",
      },
      vegas: {
        conference: "East",
        division: "Central",
      },
      utah: {
        conference: "East",
        division: "Central",
      },
      sacramento: {
        conference: "East",
        division: "Central",
      },
    },
  },
  {
    id: 11,
    name: "Golden State Warriors",
    nickname: "Warriors",
    code: "GSW",
    city: "Golden State",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Warriors_de_Golden_State_logo.svg/1200px-Warriors_de_Golden_State_logo.svg.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "West",
        division: "Pacific",
      },
      sacramento: {
        conference: "West",
        division: "Pacific",
      },
      vegas: {
        conference: "West",
        division: "Pacific",
      },
      utah: {
        conference: "West",
        division: "Pacific",
      },
    },
  },
  {
    id: 12,
    name: "Guangzhou Long-Lions",
    nickname: "Long-Lions",
    code: "GUA",
    city: "Guangzhou",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Guangzhou_Long-Lions_logo.png/220px-Guangzhou_Long-Lions_logo.png",
    allStar: false,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "Intl",
        division: null,
      },
    },
  },
  {
    id: 13,
    name: "Haifa Maccabi Haifa",
    nickname: "Maccabi Haifa",
    code: "MAC",
    city: "Haifa",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/4c/Maccabi_Haifa_B.C_logo.png",
    allStar: false,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "Intl",
        division: null,
      },
    },
  },
  {
    id: 14,
    name: "Houston Rockets",
    nickname: "Rockets",
    code: "HOU",
    city: "Houston",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Houston_Rockets_logo_2003.png/330px-Houston_Rockets_logo_2003.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "West",
        division: "Southwest",
      },
      vegas: {
        conference: "West",
        division: "Southwest",
      },
      utah: {
        conference: "West",
        division: "Southwest",
      },
      sacramento: {
        conference: "West",
        division: "Southwest",
      },
    },
  },
  {
    id: 15,
    name: "Indiana Pacers",
    nickname: "Pacers",
    code: "IND",
    city: "Indiana",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/c/cf/Pacers_de_l%27Indiana_logo.svg/1180px-Pacers_de_l%27Indiana_logo.svg.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "East",
        division: "Central",
      },
      vegas: {
        conference: "East",
        division: "Central",
      },
      utah: {
        conference: "East",
        division: "Central",
      },
      sacramento: {
        conference: "East",
        division: "Central",
      },
    },
  },
  {
    id: 16,
    name: "LA Clippers",
    nickname: "Clippers",
    code: "LAC",
    city: "LA",
    logo: "https://upload.wikimedia.org/wikipedia/fr/d/d6/Los_Angeles_Clippers_logo_2010.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "West",
        division: "Pacific",
      },
      vegas: {
        conference: "West",
        division: "Pacific",
      },
      utah: {
        conference: "West",
        division: "Pacific",
      },
      sacramento: {
        conference: "West",
        division: "Pacific",
      },
    },
  },
  {
    id: 17,
    name: "Los Angeles Lakers",
    nickname: "Lakers",
    code: "LAL",
    city: "Los Angeles",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/220px-Los_Angeles_Lakers_logo.svg.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "West",
        division: "Pacific",
      },
      sacramento: {
        conference: "West",
        division: "Pacific",
      },
      vegas: {
        conference: "West",
        division: "Pacific",
      },
      utah: {
        conference: "West",
        division: "Pacific",
      },
    },
  },
  {
    id: 18,
    name: "Melbourne United",
    nickname: "United",
    code: "MEL",
    city: "Melbourne",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Melbourne_United_logo.svg/220px-Melbourne_United_logo.svg.png",
    allStar: false,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "Intl",
        division: null,
      },
    },
  },
  {
    id: 19,
    name: "Memphis Grizzlies",
    nickname: "Grizzlies",
    code: "MEM",
    city: "Memphis",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1200px-Memphis_Grizzlies.svg.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "West",
        division: "Southwest",
      },
      vegas: {
        conference: "West",
        division: "Southwest",
      },
      utah: {
        conference: "West",
        division: "Southwest",
      },
      sacramento: {
        conference: "West",
        division: "Southwest",
      },
    },
  },
  {
    id: 20,
    name: "Miami Heat",
    nickname: "Heat",
    code: "MIA",
    city: "Miami",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1c/Miami_Heat_-_Logo.svg/1200px-Miami_Heat_-_Logo.svg.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "East",
        division: "Southeast",
      },
      sacramento: {
        conference: "East",
        division: "Southeast",
      },
      vegas: {
        conference: "East",
        division: "Southeast",
      },
      utah: {
        conference: "East",
        division: "Southeast",
      },
    },
  },
  {
    id: 21,
    name: "Milwaukee Bucks",
    nickname: "Bucks",
    code: "MIL",
    city: "Milwaukee",
    logo: "https://upload.wikimedia.org/wikipedia/fr/3/34/Bucks2015.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "East",
        division: "Central",
      },
      vegas: {
        conference: "East",
        division: "Central",
      },
      utah: {
        conference: "East",
        division: "Central",
      },
      sacramento: {
        conference: "East",
        division: "Central",
      },
    },
  },
  {
    id: 22,
    name: "Minnesota Timberwolves",
    nickname: "Timberwolves",
    code: "MIN",
    city: "Minnesota",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d9/Timberwolves_du_Minnesota_logo_2017.png/200px-Timberwolves_du_Minnesota_logo_2017.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "West",
        division: "Northwest",
      },
      vegas: {
        conference: "West",
        division: "Northwest",
      },
      utah: {
        conference: "West",
        division: "Northwest",
      },
      sacramento: {
        conference: "West",
        division: "Northwest",
      },
    },
  },
  {
    id: 23,
    name: "New Orleans Pelicans",
    nickname: "Pelicans",
    code: "NOP",
    city: "New Orleans",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/21/New_Orleans_Pelicans.png/200px-New_Orleans_Pelicans.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "West",
        division: "Southwest",
      },
      vegas: {
        conference: "West",
        division: "Southwest",
      },
      utah: {
        conference: "West",
        division: "Southwest",
      },
      sacramento: {
        conference: "West",
        division: "Southwest",
      },
    },
  },
  {
    id: 24,
    name: "New York Knicks",
    nickname: "Knicks",
    code: "NYK",
    city: "New York",
    logo: "https://upload.wikimedia.org/wikipedia/fr/d/dc/NY_Knicks_Logo_2011.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "East",
        division: "Atlantic",
      },
      vegas: {
        conference: "East",
        division: "Atlantic",
      },
      utah: {
        conference: "East",
        division: "Atlantic",
      },
      sacramento: {
        conference: "East",
        division: "Atlantic",
      },
    },
  },
  {
    id: 25,
    name: "Oklahoma City Thunder",
    nickname: "Thunder",
    code: "OKC",
    city: "Oklahoma City",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Thunder_d%27Oklahoma_City_logo.svg/1200px-Thunder_d%27Oklahoma_City_logo.svg.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "West",
        division: "Northwest",
      },
      vegas: {
        conference: "West",
        division: "Northwest",
      },
      utah: {
        conference: "West",
        division: "Northwest",
      },
      sacramento: {
        conference: "West",
        division: "Northwest",
      },
    },
  },
  {
    id: 26,
    name: "Orlando Magic",
    nickname: "Magic",
    code: "ORL",
    city: "Orlando",
    logo: "https://upload.wikimedia.org/wikipedia/fr/b/bd/Orlando_Magic_logo_2010.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "East",
        division: "Southeast",
      },
      vegas: {
        conference: "East",
        division: "Southeast",
      },
      utah: {
        conference: "East",
        division: "Southeast",
      },
      sacramento: {
        conference: "East",
        division: "Southeast",
      },
    },
  },
  {
    id: 27,
    name: "Philadelphia 76ers",
    nickname: "76ers",
    code: "PHI",
    city: "Philadelphia",
    logo: "https://upload.wikimedia.org/wikipedia/fr/4/48/76ers_2016.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "East",
        division: "Atlantic",
      },
      vegas: {
        conference: "East",
        division: "Atlantic",
      },
      utah: {
        conference: "East",
        division: "Atlantic",
      },
      sacramento: {
        conference: "East",
        division: "Atlantic",
      },
    },
  },
  {
    id: 28,
    name: "Phoenix Suns",
    nickname: "Suns",
    code: "PHX",
    city: "Phoenix",
    logo: "https://upload.wikimedia.org/wikipedia/fr/5/56/Phoenix_Suns_2013.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "West",
        division: "Pacific",
      },
      vegas: {
        conference: "West",
        division: "Pacific",
      },
      utah: {
        conference: "West",
        division: "Pacific",
      },
      sacramento: {
        conference: "West",
        division: "Pacific",
      },
    },
  },
  {
    id: 29,
    name: "Portland Trail Blazers",
    nickname: "Trail Blazers",
    code: "POR",
    city: "Portland",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "West",
        division: "Northwest",
      },
      vegas: {
        conference: "West",
        division: "Northwest",
      },
      utah: {
        conference: "West",
        division: "Northwest",
      },
      sacramento: {
        conference: "West",
        division: "Northwest",
      },
    },
  },
  {
    id: 30,
    name: "Sacramento Kings",
    nickname: "Kings",
    code: "SAC",
    city: "Sacramento",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "West",
        division: "Pacific",
      },
      sacramento: {
        conference: "West",
        division: "Pacific",
      },
      vegas: {
        conference: "West",
        division: "Pacific",
      },
      utah: {
        conference: "West",
        division: "Pacific",
      },
    },
  },
  {
    id: 31,
    name: "San Antonio Spurs",
    nickname: "Spurs",
    code: "SAS",
    city: "San Antonio",
    logo: "https://upload.wikimedia.org/wikipedia/fr/0/0e/San_Antonio_Spurs_2018.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "West",
        division: "Southwest",
      },
      vegas: {
        conference: "West",
        division: "Southwest",
      },
      utah: {
        conference: "West",
        division: "Southwest",
      },
      sacramento: {
        conference: "West",
        division: "Southwest",
      },
    },
  },
  {
    id: 32,
    name: "Shanghai Sharks",
    nickname: "Sharks",
    code: "SDS",
    city: "Shanghai",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f3/Shangaisharks.jpg/130px-Shangaisharks.jpg",
    allStar: false,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "Intl",
        division: null,
      },
    },
  },
  {
    id: 33,
    name: "Sydney Kings",
    nickname: "Kings",
    code: "SYD",
    city: "Sydney",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/c/c4/Sydney_Kings.jpg/220px-Sydney_Kings.jpg",
    allStar: false,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "Intl",
        division: null,
      },
    },
  },
  {
    id: 34,
    name: "Team Team Durant",
    nickname: "Team Durant",
    code: "DRT",
    city: "Team",
    logo: null,
    allStar: true,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "East",
        division: "East",
      },
      vegas: {
        conference: "East",
        division: "East",
      },
      utah: {
        conference: "East",
        division: "East",
      },
      sacramento: {
        conference: "East",
        division: "East",
      },
    },
  },
  {
    id: 35,
    name: "Team LeBron",
    nickname: "Team LeBron",
    code: "LBN",
    city: "Team",
    logo: null,
    allStar: true,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "West",
        division: "West",
      },
      vegas: {
        conference: "West",
        division: "West",
      },
      utah: {
        conference: "West",
        division: "West",
      },
      sacramento: {
        conference: "West",
        division: "West",
      },
    },
  },
  {
    id: 36,
    name: "Away Team Wilbon",
    nickname: "Team Wilbon",
    code: "WLB",
    city: "Away",
    logo: null,
    allStar: true,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "East",
        division: "East",
      },
    },
  },
  {
    id: 38,
    name: "Toronto Raptors",
    nickname: "Raptors",
    code: "TOR",
    city: "Toronto",
    logo: "https://upload.wikimedia.org/wikipedia/fr/8/89/Raptors2015.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "East",
        division: "Atlantic",
      },
      vegas: {
        conference: "East",
        division: "Atlantic",
      },
      utah: {
        conference: "East",
        division: "Atlantic",
      },
      sacramento: {
        conference: "East",
        division: "Atlantic",
      },
    },
  },
  {
    id: 39,
    name: "USA USA",
    nickname: "USA",
    code: "USA",
    city: "USA",
    logo: null,
    allStar: true,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "East",
        division: "East",
      },
    },
  },
  {
    id: 40,
    name: "Utah Jazz",
    nickname: "Jazz",
    code: "UTA",
    city: "Utah",
    logo: "https://upload.wikimedia.org/wikipedia/fr/3/3b/Jazz_de_l%27Utah_logo.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "West",
        division: "Northwest",
      },
      vegas: {
        conference: "West",
        division: "Northwest",
      },
      utah: {
        conference: "West",
        division: "Northwest",
      },
      sacramento: {
        conference: "West",
        division: "Northwest",
      },
    },
  },
  {
    id: 41,
    name: "Washington Wizards",
    nickname: "Wizards",
    code: "WAS",
    city: "Washington",
    logo: "https://upload.wikimedia.org/wikipedia/fr/archive/d/d6/20161212034849%21Wizards2015.png",
    allStar: false,
    nbaFranchise: true,
    leagues: {
      standard: {
        conference: "East",
        division: "Southeast",
      },
      vegas: {
        conference: "East",
        division: "Southeast",
      },
      utah: {
        conference: "East",
        division: "Southeast",
      },
      sacramento: {
        conference: "East",
        division: "Southeast",
      },
    },
  },
  {
    id: 42,
    name: "World World",
    nickname: "World",
    code: "WLD",
    city: "World",
    logo: null,
    allStar: true,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "East",
        division: "East",
      },
    },
  },
  {
    id: 43,
    name: "Team Africa",
    nickname: "Africa",
    code: "AFR",
    city: "Team",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      africa: {
        conference: null,
        division: null,
      },
    },
  },
  {
    id: 44,
    name: "Team World",
    nickname: "World",
    code: "WLD",
    city: "Team",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      africa: {
        conference: null,
        division: null,
      },
    },
  },
  {
    id: 83,
    name: "",
    nickname: "Paschoalotto/Bauru",
    code: "BAU",
    city: "Bauru",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "Internatio",
        division: null,
      },
    },
  },
  {
    id: 84,
    name: "",
    nickname: "Fenerbahce Sports Club",
    code: "FEN",
    city: "Istanbul",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "Internatio",
        division: null,
      },
    },
  },
  {
    id: 85,
    name: "",
    nickname: "Olimpia Milano",
    code: "MLN",
    city: "Milano",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "Internatio",
        division: null,
      },
    },
  },
  {
    id: 86,
    name: "Real Madrid Real Madrid",
    nickname: "Real Madrid",
    code: "RMD",
    city: "Real Madrid",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "Intl",
        division: null,
      },
    },
  },
  {
    id: 87,
    name: "Rio de Janeiro Flamengo",
    nickname: "Flamengo",
    code: "FLA",
    city: "Rio de Janeiro",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "Intl",
        division: null,
      },
    },
  },
  {
    id: 88,
    name: "Barcelona FC Barcelona",
    nickname: "FC Barcelona",
    code: "FCB",
    city: "Barcelona",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "Intl",
        division: null,
      },
    },
  },
  {
    id: 89,
    name: "Buenos Aires San Lorenzo",
    nickname: "San Lorenzo",
    code: "SLA",
    city: "Buenos Aires",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "Intl",
        division: null,
      },
    },
  },
  {
    id: 90,
    name: "Adelaide 36ers",
    nickname: "36ers",
    code: "ADL",
    city: "Adelaide",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "Intl",
        division: null,
      },
    },
  },
  {
    id: 91,
    name: "Beijing Ducks",
    nickname: "Ducks",
    code: "BJD",
    city: "Beijing",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "Intl",
        division: null,
      },
    },
  },
  {
    id: 92,
    name: "New Zealand Breakers",
    nickname: "Breakers",
    code: "NZB",
    city: "New Zealand",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "Intl",
        division: null,
      },
    },
  },
  {
    id: 93,
    name: "Perth Wildcats",
    nickname: "Wildcats",
    code: "PER",
    city: "Perth",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "Intl",
        division: null,
      },
    },
  },
  {
    id: 94,
    name: "Team USA",
    nickname: "USA",
    code: "USA",
    city: "Team",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      africa: {
        conference: null,
        division: null,
      },
    },
  },
  {
    id: 95,
    name: "Team World",
    nickname: "World",
    code: "WLD",
    city: "Team",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      africa: {
        conference: null,
        division: null,
      },
    },
  },
  {
    id: 96,
    name: "Team China",
    nickname: "China",
    code: "CHN",
    city: "China",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      vegas: {
        conference: "summer",
        division: null,
      },
    },
  },
  {
    id: 97,
    name: "Team Croatia",
    nickname: "Croatia",
    code: "CRO",
    city: "Croatia",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      vegas: {
        conference: "summer",
        division: null,
      },
    },
  },
  {
    id: 99,
    name: "Franca Franca",
    nickname: "Franca",
    code: "FRA",
    city: "Franca",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      standard: {
        conference: "Intl",
        division: null,
      },
    },
  },
  {
    id: 102,
    name: "Utah Blue",
    nickname: "Jazz",
    code: "UTB",
    city: "Utah",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      vegas: {
        conference: "West",
        division: "Northwest",
      },
      standard: {
        conference: "West",
        division: "Northwest",
      },
      utah: {
        conference: "West",
        division: "Northwest",
      },
      sacramento: {
        conference: "West",
        division: "Northwest",
      },
    },
  },
  {
    id: 103,
    name: "Utah White",
    nickname: "Jazz",
    code: "UTW",
    city: "Utah",
    logo: null,
    allStar: false,
    nbaFranchise: false,
    leagues: {
      vegas: {
        conference: "West",
        division: "Northwest",
      },
      standard: {
        conference: "West",
        division: "Northwest",
      },
      utah: {
        conference: "West",
        division: "Northwest",
      },
      sacramento: {
        conference: "West",
        division: "Northwest",
      },
    },
  },
];

module.exports = [
  {
    id: 'get-teams',
    url: '/api/teams',
    method: 'GET',
    variants: [
      {
        id: 'success',
        type: 'json',
        options: {
          status: 200,
          body: TEAMS.filter(t => t.nbaFranchise === true),
        }
      },
      {
        id: 'error',
        type: 'json',
        options: {
          status: 400,
          body: {
            message: 'Error fetching teams',
          }
        }
      }
    ]
  },
  {
    id: 'create-team',
    url: '/api/teams',
    method: 'POST',
    variants: [
      {
        id: 'success',
        type: 'status',
        options: {
          status: 201,
        },
      },
      {
        id: 'error',
        type: 'status',
        options: {
          status: 500,
        }
      }
    ],
  }
];
