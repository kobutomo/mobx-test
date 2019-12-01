import { useLocalStore } from 'mobx-react-lite'

export type Store = {
  counter: number
  increment: () => void
  decrement: () => void
}

export const useCounterStore = () => {
  const store: Store = useLocalStore(() => {
    return {
      counter: 0,
      increment: () => {
        store.counter++
      },
      decrement: () => {
        store.counter++
      }
    }
  })
  return store
}
