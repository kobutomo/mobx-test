import { action, observable, configure, computed } from "mobx"

configure({ enforceActions: "observed" })

export class CounterStore {
  @observable private _count: number
  constructor() {
    this._count = 0
  }
  @computed
  get count() {
    return this._count
  }
  @action
  increment = () => {
    this._count++
  }
  @action
  decrement = () => {
    this._count--
  }
}

export const counterStore1 = new CounterStore()