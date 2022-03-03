import {makeAutoObservable} from "mobx";

import RootStore from "./store";

export default class ProductsStore {
  root: RootStore

  constructor(root: RootStore) {
    this.root = root
    makeAutoObservable(this)
  }

  products: IProduct[] = [
    {
      name: "Бананы",
      category: "Фрукты и овощи",
      price: 0.06,
      calories: 0.89,
      NJK: 0.001,
      MNJK: 0,
      omega3: 0,
      omega6: 0,
      carbohydrates: 0.228,
      proteins: 0.011,
      fats: 0.003,
      threonine: 0,
      isoleucine: 0,
      methionine: 0,
      cystine: 0,
      arginine: 0.00049,
      valine: 0,
      saccharides: 0.023
    },
    {
      name: "Яблоки",
      category: "Фрукты и овощи",
      price: 0.07,
      calories: 0.52,
      NJK: 0,
      MNJK: 0,
      omega3: 0,
      omega6: 0,
      carbohydrates: 0.138,
      proteins: 0.003,
      fats: 0.0017,
      threonine: 0,
      isoleucine: 0,
      methionine: 0,
      cystine: 0,
      arginine: 0.00006,
      valine: 0,
      saccharides: 0.014
    }
  ]

  activeProductIndex: number | null = null

}
