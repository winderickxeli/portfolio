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
