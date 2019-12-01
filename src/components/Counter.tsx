import React, { Fragment } from "react"
import { Observer } from "mobx-react-lite"
// import { useCounterStore, Store } from "../hooks/useCounterStore"
import { counterStore1 } from "../store/Counter"

const Counter: React.FC = () => {
  // const store = useCounterStore()
  return (
    <Fragment>
      <Observer>
        {() => (
          <Fragment>
            <p>{counterStore1.count}</p>
          </Fragment>
        )}
      </Observer>
      <button
        onClick={(() => counterStore1.increment())}
      >+</button>
      <button
        onClick={(() => counterStore1.decrement())}
      >-</button>
    </Fragment>
  )
}

export default Counter