import axios from "axios";

export default class HttpClient {

    constructor(baseUrl) {
        this._baseUrl = baseUrl;
        this._method = null;
        this._path = null;
        this._body = null;
    }

    withMethod(method) {
        this._method = method;
        return this;
    }

    withPath(path) {
        this._path = path;
        return this;
    }

    withBody(body) {
        this._body = body;
        return this;
    }

    request() {
        if (!this._method) {
            throw new Error("Not specified method http.");
        }

        if (!this._path) {
            throw new Error("Not specified path.");
        }

        if ((this._method == "post" || this._method == "put") && !this._body) {
            throw new Error("Not specified body to request.")
        }

        const url = this._baseUrl + this._path;
        if ((this._method == "post" || this._method == "put")) {
            return axios[this._method](url, this._body);
        }

        return axios[this._method](url);
    }
}