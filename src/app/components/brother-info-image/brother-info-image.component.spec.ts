import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrotherInfoImageComponent } from './brother-info-image.component';

describe('BrotherInfoImageComponent', () => {
    let component: BrotherInfoImageComponent;
    let fixture: ComponentFixture<BrotherInfoImageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BrotherInfoImageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BrotherInfoImageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
