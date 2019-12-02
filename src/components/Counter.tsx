import React, { Fragment, useMemo } from "react"
import { Observer } from "mobx-react-lite"
import { useStore } from "../hooks/useStore"
import useIncrement from "../hooks/useIncrement"

type Props = {
  counter: number
}
const ShowCounter: React.FC<Props> = ({ counter }) => {
  console.log("ShowCounter has been rerendered")
  const someExpensiveNum = useMemo(() => {
    return 2 ** counter
  }, [counter])
  return (
    <Fragment>
      <p>{someExpensiveNum}</p>
      <p>{counter}</p>
    </Fragment>
  )
}

const Counter: React.FC = () => {
  const store = useStore()
  const increment = useIncrement()
  return (
    <Fragment>
      <Observer>
        {() => <ShowCounter counter={store.counter}></ShowCounter>}
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