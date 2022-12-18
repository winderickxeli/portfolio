export interface IAssignments {
    ArrAssignments:string[]
  }

export interface IThemeContext {
  theme:string,
  setTheme: (theme:string) => void
}

export interface IComic {
  title:string,
  alt:string,
  img: string
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
