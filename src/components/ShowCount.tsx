import React, { Fragment } from "react"
import { Observer } from "mobx-react-lite"
// import { useCounterStore, Store } from "../hooks/useCounterStore"
import { counterStore1 } from "../store/Counter"

const ShowCount: React.FC = () => {
  // const store = useCounterStore()
  return (
    <Fragment>
      <Observer>
        {() => (
          <p>{counterStore1.count}</p>
        )}
      </Observer>
    </Fragment>
  )
}

export default ShowCount