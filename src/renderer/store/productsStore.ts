import {makeAutoObservable} from "mobx";

import RootStore from "./store";
import ProductsService from "../services/productsService";

export default class ProductsStore {
  root: RootStore

  constructor(root: RootStore) {
    this.root = root
    makeAutoObservable(this)
  }

  products: IProduct[] = []
  viewedProducts: IProduct[] = []
  viewedCategories: string[] = []

  activeProductIndex: number | null = null

  async getAllProducts() {
    try {
      this.root.isLoading = true

      await ProductsService.getAllProducts().then((response) => {
        this.products = response.data
        this.viewedProducts = response.data
      })

    } catch (e: any) {
      this.root.exceptionsStore.setInfoMessage('Возникла ошибка при получении списка продуктов', 'error')
    } finally {
      this.root.isLoading = false
    }
  }

  addViewedCategory(category: string) {
    this.root.isLoading = true
    this.viewedProducts = []

    if (this.viewedCategories.find((viewedCategory) => viewedCategory === category) === undefined) {
      this.viewedCategories.push(category)
    }

    this.viewedCategories.forEach(category => {
      this.products.forEach(product => {
        product.category.includes(category) && this.viewedProducts.push(product)
      })
    })
    console.log(this.viewedCategories)
    this.root.isLoading = false
  }

  removeViewedCategory(category: string) {
    this.root.isLoading = true
    this.viewedProducts = []

    this.viewedCategories.forEach((viewedCategory, viewedCategoryKey) => {
      if (viewedCategory === category) {
        this.viewedCategories.splice(viewedCategoryKey, 1)
      }
    })
    this.viewedCategories.forEach(category => {
      this.products.forEach(product => {
        product.category.includes(category) && this.viewedProducts.push(product)
      })
    })

    if (this.viewedCategories.length === 0) {
      this.viewedProducts = this.products
    }
    console.log(this.viewedCategories)
    this.root.isLoading = false
  }

  viewAllProducts() {
    this.root.isLoading = true

    this.viewedCategories = []
    this.viewedProducts = this.products

    this.root.isLoading = false
  }

}
