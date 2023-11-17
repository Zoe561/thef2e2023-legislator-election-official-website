import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorCardComponent } from './sponsor-card.component';

describe('SponsorCardComponent', () => {
  let component: SponsorCardComponent;
  let fixture: ComponentFixture<SponsorCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SponsorCardComponent]
    });
    fixture = TestBed.createComponent(SponsorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
