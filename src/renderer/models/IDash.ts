interface IDash {
  _id: string,
  name: string,
  photoUrl?: string,
  recipeUrl?: string,
  products: IProduct[],
  calories: number,
  params: {
    proteins: number,
    njk: number,
    carbohydrates: number
  }
}
