import useSWR from 'swr'
import { fetcher } from '../libs/fetcher'

import React from 'react'

export const useTMDBDataSWR = (url: string) => {
  const { data, error } = useSWR(url, fetcher)
  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
  }
}
