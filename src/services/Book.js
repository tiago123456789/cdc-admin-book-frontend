import HttpClient from "./HttpClient";
import * as CONSTANTES from "../config/App";

export default class Book {

    constructor() {
        this._httpClient = new HttpClient(CONSTANTES.BASE_URL);
    }

    findAll() {
        return this._httpClient
                    .withMethod("get")
                    .withPath("books")
                    .request()
                    .then(response => response.data);
    }

    create(newRegister) {
        return this._httpClient
                    .withMethod("post")
                    .withPath("books")
                    .withBody(newRegister)
                    .request();
    }
}