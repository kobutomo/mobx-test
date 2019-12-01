import React from "react"
import { useLocalStore } from 'mobx-react-lite'
import { action } from 'mobx'

export type Store = {
  counter: number
  increment: () => void
  decrement: () => void
}
const storeContext = React.createContext<Store | null>(null)

export const StoreProvider: React.FC = ({ children }) => {
  const store: Store = useLocalStore(() => {
    return {
      counter: 0,
      increment: action(() => {
        store.counter++
      }),
      decrement: action(() => {
        store.counter++
      })
    }
  })
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {
  const store = React.useContext(storeContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}