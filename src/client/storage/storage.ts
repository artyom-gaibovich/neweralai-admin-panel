import {GetCategoriesRequestInterface, GetCategoriesResponseInterface} from "./model/get-categories.ts";
import axios, {AxiosResponse} from "axios";


export class StorageService implements StorageService{


    static async getCategories(req: GetCategoriesRequestInterface): Promise<GetCategoriesResponseInterface> {
        try {
            const result : AxiosResponse<GetCategoriesResponseInterface> = await axios.get(req.url, {})
            console.log('cat', result.data)
            return result.data
        }
        catch (e) {
            console.log(e)
        }
    }
}