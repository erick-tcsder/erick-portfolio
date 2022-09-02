import axios from "axios";
import { useCallback, useState } from "react";
import useSWR from "swr";
import { PageContent } from "../pages/api/content";
import { useLastValidValue } from "./useLastValidValue";

const fetcher = async (locale:string)=>{
  return await axios.get<PageContent>('/api/content',{
    params:{
      locale
    }
  }) 
}

export const usePageContent = (params:{
  locale: string;
}) => {
  const [locale, setLocale] = useState<string>(params.locale)
  const {
    isValidating,
    data,
    mutate
  } = useSWR([locale,'content'],fetcher)

  const handleChangeLocale = useCallback((newLocale:string)=>{
    setLocale(newLocale)
  },[])

  const validData = useLastValidValue(data, !!data && !isValidating)

  return {
    loading: !data,
    isValidating,
    content: validData?.data,
    mutate,
    handleChangeLocale
  }
}