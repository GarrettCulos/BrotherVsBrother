import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export class RequestType {
    uri: string;
    data?: any;
    headers?: HttpHeaders;
}

@Injectable()
export class RequestService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) {}

    /**
     * Joins an array of headers. If the same header is specified, it merges the header values.
     **/
    public joinHeaders(headers: HttpHeaders[]): HttpHeaders {
        let headerRes = new HttpHeaders({});
        for (let i = 0; i < headers.length; i++) {
            if (headers[i]) {
                const currentHeaders = headers[i];
                const keys = currentHeaders.keys();
                for (let k = 0; k < keys.length; k++) {
                    const key = keys[k];
                    const values = currentHeaders.getAll(key);
                    if (!headerRes.has(key)) {
                        headerRes = headerRes.append(key, values);
                    } else {
                        headerRes.set(key, values);
                    }
                }
            }
        }
        return headerRes;
    }

    /**
     * General method for making requests.
     * @param uri string
     * @param options request options
     */
    public request(uri: string, options: any): Observable<any> {
        const headers = this.joinHeaders([this.headers, options.headers]);
        options.headers = headers;
        if (!options.method) {
            options.method = 'GET';
        }

        return this.http.request(options.method, uri, options);
    }
}
