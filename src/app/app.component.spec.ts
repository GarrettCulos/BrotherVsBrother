import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ActivityTimelineComponent } from './components/activity-timeline/activity-timeline.component';
import { StravaService } from './services/strava.service';
import { RequestService } from './services/request.service';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                HeaderComponent,
                FooterComponent,
                SubHeaderComponent,
                ActivityComponent,
                ActivityTimelineComponent
            ],
            providers: [RequestService, StravaService]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
