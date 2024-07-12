import {GetCategoriesRequestInterface, GetCategoriesResponseInterface} from "./model/get-categories.ts";

export interface JsonPlaceholderInterface {
    getPosts(req : GetCategoriesRequestInterface) : Promise<GetCategoriesResponseInterface>
}