import { makeAutoObservable } from "mobx";

import RootStore from "./store";
import DashesService from "../services/dashesService";

export default class DashesStore {
  root: RootStore

  constructor(root: RootStore) {
    this.root = root
    makeAutoObservable(this)
  }

  dashes: IDash[] = []
  viewedDashes: IDash[] = []
  viewedDash?: IDash

  async getAllDashes() {
    try {
      this.root.isLoading = true

      await DashesService.getAllDashes().then((response) => {
        this.dashes = response.data
        this.viewedDashes = response.data
      })

    } catch (e: any) {
      this.root.exceptionsStore.setInfoMessage('Возникла ошибка при получении списка блюд', 'error')
    } finally {
      this.root.isLoading = false
    }
  }

  async getDashById(_id: string) {
    try {
      this.root.isLoading = true

      await DashesService.getDashById(_id).then((response) => {
        this.viewedDash = response.data
      })

    } catch (e: any) {
      this.root.exceptionsStore.setInfoMessage('Возникла ошибка при получении списка блюд', 'error')
    } finally {
      this.root.isLoading = false
    }
  }

  refreshViewedDashes() {
    if (this.root.cartStore.cartProducts.length === 0) {
      this.viewedDashes = this.dashes
      return
    }

    this.viewedDashes = []

    this.root.cartStore.cartProducts.forEach((cartProduct) => {
      this.dashes.forEach((dash) => {
        if (dash.products.find(dashProduct => dashProduct._id === cartProduct._id)) {
          if (this.viewedDashes.find(viewedDash => viewedDash._id === dash._id) === undefined) {
            this.viewedDashes.push(dash)
          }
        }
      })
    })

  }

}
