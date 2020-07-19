import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresCreateComponent } from './adres.create.compenent';

describe('AdresCreateComponent', () => {
  let component: AdresCreateComponent;
  let fixture: ComponentFixture<AdresCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
