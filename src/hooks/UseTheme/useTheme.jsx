import { createContext, useState, useContext } from "react"


const ThemeContext = createContext()

export function ThemeProvider(props){

  const themeSavedLocalStorage = localStorage.getItem('theme')

  const [ theme, setTheme] = useState(themeSavedLocalStorage === null ? 'dark' : themeSavedLocalStorage)

  function changeTheme(themeReceived){

    if(themeReceived !== theme){
      setTheme(themeReceived)
      localStorage.setItem('theme', themeReceived)
    }

  }
  return(
    <ThemeContext.Provider value={{ theme, changeTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}



export function useTheme(){
  const context = useContext(ThemeContext)
  return context
}
