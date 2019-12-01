import React, { Fragment } from "react"
import { Observer } from "mobx-react-lite"
// import { useCounterStore, Store } from "../hooks/useCounterStore"
// import { counterStore1 } from "../store/Counter"
import { useStore } from "../hooks/useStore"

const ShowCount: React.FC = () => {
  // const store = useCounterStore()
  const store = useStore()
  return (
    <Fragment>
      <Observer>
        {() => (
          <p>{store.counter}</p>
        )}
      </Observer>
    </Fragment>
  )
}

export default ShowCount