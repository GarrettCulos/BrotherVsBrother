import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrotherInfoComponent } from './brother-info.component';

describe('BrotherInfoComponent', () => {
  let component: BrotherInfoComponent;
  let fixture: ComponentFixture<BrotherInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrotherInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrotherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
