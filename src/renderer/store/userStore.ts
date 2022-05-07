import {makeAutoObservable} from "mobx";

import RootStore from "./store";

export default class UserStore {
  root: RootStore

  constructor(root: RootStore) {
    this.root = root
    makeAutoObservable(this)
  }

  userInfo: IUserInfo = {
    gender: '',
    age: 0,
    weight: 0,
    lifestyle: 'low' // low, average, high
  }

}
