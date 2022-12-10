import { useEffect, useState } from "react";

export function useLocalStorage(value, localStorageItemName){

  const [ data, setData] = useState(value)

  useEffect(()=> {
    localStorage.setItem(localStorageItemName, JSON.stringify(data))
    // localStorage.setItem(localStorageItemName, data)
  }, [data])

  return [ data, setData ]
}
