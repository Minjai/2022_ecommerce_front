import { useEffect, useState } from "react"

export const useSearchDebounce = (isSearch, value, delay = 300) => {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    setDebounced(value)
  }, [isSearch, delay])

  return debounced
}