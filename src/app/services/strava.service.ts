import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { RequestService } from './request.service';

@Injectable()
export class StravaService {
    constructor(private req: RequestService) {}
    getActivities(userId) {
        if (!environment.production) {
            return this.req.request(`/assets/${userId}.response.json`, {});
        }
        return this.req.request(`${environment.stravaApiProxy}/person/${userId}/activities`, {});
    }
}
