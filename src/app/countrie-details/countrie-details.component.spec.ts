import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrieDetailsComponent } from './countrie-details.component';

describe('CountrieDetailsComponent', () => {
  let component: CountrieDetailsComponent;
  let fixture: ComponentFixture<CountrieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
