import {LinkInterface} from "../../../model/link.interface.ts";

export interface GetCategoriesRequestInterface {
    url : LinkInterface
}

export interface GetCategoriesResponseInterface {
    status : 'OK' | 'ERROR'
    categories? : CategoryInterface[] | []
}