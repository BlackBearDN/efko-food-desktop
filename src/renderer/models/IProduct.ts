interface IProduct {
  _id: string,
  name: string,
  category: string,
  price: number,
  calories: number,
  params: {
    proteins: number,
    njk: number,
    carbohydrates: number
  }
}
