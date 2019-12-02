import React, { Fragment } from "react"
import { Observer } from "mobx-react-lite"
import { useStore } from "../hooks/useStore"

const ShowName: React.FC<{ name: string }> = ({ name }) => {
  console.log("ShowName has been rerendered")
  return <p>{name}</p>
}

const Name: React.FC = () => {
  const store = useStore()
  return (
    <Fragment>
      <Observer>
        {() => <ShowName name={store.name}></ShowName>}
      </Observer>
      <button
        onClick={() => store.setName(Math.floor(Math.random() * 100).toString())}
      >
        change name
      </button>
    </Fragment>
  )
}

export default Name