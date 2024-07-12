import {JsonPlaceholderInterface} from "./json-placeholder.interface.ts";
import {GetCategoriesRequestInterface, GetCategoriesResponseInterface} from "./model/get-categories.ts";


export class JsonPlaceholder implements JsonPlaceholderInterface{


    getPosts(req: GetCategoriesRequestInterface): Promise<GetCategoriesResponseInterface> {

    }
}