import React, { Fragment } from "react"
import { Observer, observer } from "mobx-react-lite"
import { useStore } from "../hooks/useStore"
import useIncrement from "../hooks/useIncrement"

const Counter: React.FC = () => {
  const store = useStore()
  const increment = useIncrement()
  return (
    <Fragment>
      <Observer>
        {() => (
          <p>{store.counter}</p>
        )}
      </Observer>
      <button
        onClick={(() => increment())}
      >+</button>
      <button
        onClick={(() => store.decrement())}
      >-</button>
    </Fragment>
  )
}

export default Counter