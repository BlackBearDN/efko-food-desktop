import {AxiosResponse} from "axios"

import { $rest_api } from "../http";

export default class CartService {
  static async generateCart(products: IProduct[], ceilParam: string, ceilFunc: string, userInfo: IUserInfo): Promise<AxiosResponse<ICart>> {
    return $rest_api.post<ICart>(`/cart`, { products, ceilParam, ceilFunc, userInfo })
  }
}
