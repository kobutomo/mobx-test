import React from "react"
import { useLocalStore } from 'mobx-react-lite'
import { action } from 'mobx'

const useCreateStore = () => {
  const store = useLocalStore(() => {
    return {
      counter: 0,
      name: "Tomoro",
      increment: action(() => {
        store.counter++
      }),
      decrement: action(() => {
        store.counter--
      }),
      setName: action((newName: string) => {
        store.name = newName
      })
    }
  })
  return store
}
export type Store = ReturnType<typeof useCreateStore>

const storeContext = React.createContext<Store | null>(null)

export const StoreProvider: React.FC = ({ children }) => {
  const store = useCreateStore()
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {
  const store = React.useContext(storeContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}