import {makeAutoObservable} from "mobx";

import ProductsStore from "./productsStore";

export default class RootStore {
  productsStore: ProductsStore

  constructor() {
    this.productsStore = new ProductsStore(this)
    makeAutoObservable(this)
  }

  themeBool: boolean = false

}
