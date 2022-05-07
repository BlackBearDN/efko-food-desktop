import {AxiosResponse} from "axios"

import { $rest_api } from "../http";

export default class ProductsService {
  static async getAllProducts(): Promise<AxiosResponse<IProduct[]>> {
    return $rest_api.get<IProduct[]>(`/products`)
  }
}
