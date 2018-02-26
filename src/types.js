// @flow

export type Store = {
  stuff: Stuff
}

export type Stuff = Array<string>
export type StuffAction = {
  type: string,
  payload: Stuff
}
export type StuffStateProps = {
  stuff: Stuff
}
export type StuffDispatchProps = {
  fetchStuff(): Promise<Stuff>
}
export type StuffListProps = StuffStateProps & StuffDispatchProps
