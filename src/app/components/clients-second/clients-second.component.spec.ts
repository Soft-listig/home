import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsSecondComponent } from './clients-second.component';

describe('ClientsSecondComponent', () => {
  let component: ClientsSecondComponent;
  let fixture: ComponentFixture<ClientsSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
