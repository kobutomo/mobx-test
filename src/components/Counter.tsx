import React, { Fragment } from "react"
import { Observer, observer } from "mobx-react-lite"
import { useStore } from "../hooks/useStore"

const Counter: React.FC = () => {
  const store = useStore()
  return (
    <Fragment>
      <Observer>
        {() => (
          <p>{store.counter}</p>
        )}
      </Observer>
      <button
        onClick={(() => store.increment())}
      ></button>
    </Fragment>
  )
}

export default Counter