import { useCallback, useState } from 'react'

export const useIsActive = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const handleClick: boolean | (() => void) = useCallback(() => {
    setIsActive(prevIsActive => !prevIsActive)
  }, [])
  return [isActive, handleClick]
}
