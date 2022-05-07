import {AxiosResponse} from "axios"

import { $rest_api } from "../http";

export default class DashesService {
  static async getAllDashes(): Promise<AxiosResponse<IDash[]>> {
    return $rest_api.get<IDash[]>(`/dashes`)
  }

  static async getDashById(_id: string): Promise<AxiosResponse<IDash>> {
    return $rest_api.get<IDash>(`/dashes/${_id}`)
  }
}
