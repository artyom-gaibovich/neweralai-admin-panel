import {LinkInterface} from "../../../model/link.interface.ts";

export interface GetCategoriesRequestInterface extends LinkInterface{

}

export interface GetCategoriesResponseInterface {
    status : 'OK' | 'ERROR'
    categories? : CategoryInterface[] | []
}