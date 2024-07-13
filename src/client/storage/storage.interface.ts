import {GetCategoriesRequestInterface, GetCategoriesResponseInterface} from "./model/get-categories.ts";

export interface StorageInterface {
    getPosts(req : GetCategoriesRequestInterface) : Promise<GetCategoriesResponseInterface>
}