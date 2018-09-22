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
import { BrotherInfoComponent } from './components/brother-info/brother-info.component';
import { BrotherInfoImageComponent } from './components/brother-info-image/brother-info-image.component';
import { RunInstanceComponent } from './components/run-instance/run-instance.component';
import { RunDetailsComponent } from './components/run-details/run-details.component';

import { RequestService } from './services/request.service';
import { StravaService } from './services/strava.service';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        BrotherInfoComponent,
        BrotherInfoImageComponent,
        RunInstanceComponent,
        RunDetailsComponent,
        SubHeaderComponent
    ],
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
