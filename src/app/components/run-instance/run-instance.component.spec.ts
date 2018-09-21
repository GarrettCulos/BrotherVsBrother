import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunInstanceComponent } from './run-instance.component';

describe('RunInstanceComponent', () => {
    let component: RunInstanceComponent;
    let fixture: ComponentFixture<RunInstanceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RunInstanceComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RunInstanceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
