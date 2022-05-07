import {makeAutoObservable} from "mobx";

import RootStore from "./store";

export default class ExceptionsStore {
  root: RootStore

  constructor(root: RootStore) {
    this.root = root
    makeAutoObservable(this)
  }

  infoType = ''
  showedInfoMessage = false
  infoMessage = null as string | null

  setInfoMessage(errorMessage: string, infoType: string) {
    this.infoType = infoType
    this.infoMessage = errorMessage
    this.showedInfoMessage = true
    setTimeout(() => {
      this.showedInfoMessage = false
      this.infoMessage = ''
      this.infoType = ''
    }, 3000)
  }
}
