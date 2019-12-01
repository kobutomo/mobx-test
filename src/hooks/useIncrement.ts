import { useStore } from "./useStore"

const useImcrement = () => {
  const store = useStore()
  return store.increment
}

export default useImcrement