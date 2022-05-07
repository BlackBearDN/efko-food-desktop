interface ICart {
  productsInfo: {
    name: string,
    value: number,
    resultParams: {
      proteins: number,
      njk: number,
      carbohydrates: number,
      calories: number
    },
    resultPrice: number
  }[],
  resultParams: {
    proteins: number,
    njk: number,
    carbohydrates: number,
    calories: number
  }
  allPrice: number
}
