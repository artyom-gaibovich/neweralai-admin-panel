import {JsonPlaceholderInterface} from "./json-placeholder.interface.ts";
import {GetCategoriesRequestInterface, GetCategoriesResponseInterface} from "./model/get-categories.ts";
import axios from "axios";


export class JsonPlaceholder implements JsonPlaceholderInterface{


    getPosts(req: GetCategoriesRequestInterface): Promise<GetCategoriesResponseInterface> {
        return axios.get("")
    }
}