import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresUpdateComponent } from './adres.update.compenent';

describe('AdresUpdateComponent', () => {
  let component: AdresUpdateComponent;
  let fixture: ComponentFixture<AdresUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
