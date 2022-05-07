import {makeAutoObservable} from "mobx";

import ProductsStore from "./productsStore";
import ExceptionsStore from "./exceptionsStore";
import CartStore from "./cartStore";
import UserStore from "./userStore";
import DashesStore from "./dashesStore";

export default class RootStore {
  productsStore: ProductsStore
  exceptionsStore: ExceptionsStore
  cartStore: CartStore
  userStore: UserStore
  dashesStore: DashesStore

  constructor() {
    this.productsStore = new ProductsStore(this)
    this.exceptionsStore = new ExceptionsStore(this)
    this.cartStore = new CartStore(this)
    this.userStore = new UserStore(this)
    this.dashesStore = new DashesStore(this)
    makeAutoObservable(this)
  }

  themeBool: boolean = false
  isLoading: boolean = false

}
