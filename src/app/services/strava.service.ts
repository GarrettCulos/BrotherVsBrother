import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable()
export class StravaService {
    constructor(private req: RequestService) {}

    dumb() {}
}
