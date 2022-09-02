import React, { createContext, useCallback, useContext, useState } from "react";

export interface HeaderContextProps {
  currentHeader: TypeHeader,
  handleChangeHeader: (newHeader: TypeHeader)=>void;
}

export type TypeHeader = {
  title:string,
  link: string,
}

export const HeaderContext = createContext<HeaderContextProps>({
  currentHeader: {
    link: '#',
    title: 'Home'
  },
  handleChangeHeader: (newHeader)=>{return}
})

export const HeaderContextProvider : React.FC<{children: React.ReactNode}> = (props)=>{
  const [header, setHeader] = useState<TypeHeader>({
    title: 'Home',
    link: '#'
  })

  const handleChangeHeader = useCallback((newHeader:TypeHeader)=>{
    setHeader(newHeader)
  },[])

  return (
    <HeaderContext.Provider value={{
      currentHeader: header,
      handleChangeHeader
    }}>
      {props.children}
    </HeaderContext.Provider>
  )
}

export const useHeaderContext = ()=>{
  const ctx = useContext(HeaderContext)
  return ctx
}