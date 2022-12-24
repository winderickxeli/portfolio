export interface IAllPages {
  ArrAllPages:string[]
}

export interface IAssignments {
    ArrAssignments:string[]
  }

export interface IThemeContext {
  theme:string,
  setTheme: (theme:string) => void
}

export interface ITweakersNewsItem {
  title: string,
  description: string,
  url: string,
  link: string,
  published: number,
  created: number,
  category: string,
}

export interface INasaPicture {
    copyright: string,
    date: string,
    explanation: string,
    hdurl: string
    media_type: string,
    service_version: string,
    title: string,
    url: string
}

interface IRocketDetails {
  id:string,
  wikipedia: string
}

interface IRocket {
  rocket_name: string,
  rocket_type: string,
  rocket_details: IRocketDetails
}

interface ILaunchDate {
  launch_date_utc: string,
  details: string,
  mission_name: string,
  rocket : IRocket
}

export interface ISpaceXMission {
  launchNext: ILaunchDate
}