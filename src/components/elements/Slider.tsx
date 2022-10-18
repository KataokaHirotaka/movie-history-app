import React from 'react'
import { useTMDBDataSWR } from '~/src/hooks/useTMDBDataSWR'
import { sliderProps } from '~/src/types'

export const Slider = ({ url }: sliderProps) => {
  const { data, isLoading, isError } = useTMDBDataSWR(url)
  console.log(data)

  return <div></div>
}
