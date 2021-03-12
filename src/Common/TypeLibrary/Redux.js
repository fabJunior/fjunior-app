// @flow

export type State = {

};

export class Action {
  type:string;
  payload:Object;
  errorMessage:string;
}

//THUNK Actions
export type GetState = () => State;
export type ThunkAction = (dispatch:Dispatch, getState:GetState) => any;
export type PromiseAction = Promise<Action>;
export type Dispatch = (action:Action | ThunkAction | PromiseAction) => any;