import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { environment } from './../environments/environment';

import { ServiceWorkerModule } from '@angular/service-worker';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appReducers, appEffects, logger } from './store';

const metaReducers = environment.production ? [] : [logger];

let DEV_IMPORTS: any[] = [];
if (!environment.production) {
    DEV_IMPORTS = [...DEV_IMPORTS, StoreDevtoolsModule.instrument()];
}

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { RequestService } from './services/request.service';
import { StravaService } from './services/strava.service';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ActivityTimelineComponent } from './components/activity-timeline/activity-timeline.component';

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent, SubHeaderComponent, ActivityComponent, ActivityTimelineComponent],
    imports: [
        BrowserModule,
        ServiceWorkerModule,
        StoreModule.forRoot(appReducers, { metaReducers }),
        EffectsModule.forRoot(appEffects),
        HttpClientModule,
        DEV_IMPORTS
    ],
    providers: [RequestService, StravaService],

    bootstrap: [AppComponent]
})
export class AppModule {}
