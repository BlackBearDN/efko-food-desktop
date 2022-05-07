import {makeAutoObservable} from "mobx";

import RootStore from "./store";
import CartService from "../services/cartService";

export default class CartStore {
  root: RootStore

  constructor(root: RootStore) {
    this.root = root
    makeAutoObservable(this)
  }

  cartProducts: IProduct[] = []
  cartResult: ICart | null = null
  ceilParam: string = 'price'
  ceilFunc: string = 'min'

  async generateCart() {
    if (this.cartProducts.length < 2) {
      this.root.exceptionsStore.setInfoMessage('Необходимо выбрать более 1 продукта', 'info')
      return
    }

    try {
      this.root.isLoading = true

      await CartService.generateCart(this.cartProducts, this.ceilParam, this.ceilFunc, this.root.userStore.userInfo).then((response) => {
        this.cartResult = response.data
        console.log(this.cartResult)
      })

    } catch (e: any) {
      this.root.exceptionsStore.setInfoMessage('Возникла ошибка при формировании корзины', 'error')
    } finally {
      this.root.isLoading = false
    }
  }

  addProductToCart = (_id: string) => {
    if (this.cartProducts.find((product) => product._id === _id) === undefined) {
      this.cartProducts.push(this.root.productsStore.products.find(product => product._id === _id)!)
      this.root.dashesStore.refreshViewedDashes()
    }
  }

  deleteProductFromCart = (_id: string) => {
    this.cartProducts.forEach((cartProduct, cartProductKey) => {
      if (cartProduct._id === _id) {
        this.cartProducts.splice(cartProductKey, 1)
        this.root.dashesStore.refreshViewedDashes()
      }
    })
  }

}
