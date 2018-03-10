import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsFirstComponent } from './clients-first.component';

describe('ClientsFirstComponent', () => {
  let component: ClientsFirstComponent;
  let fixture: ComponentFixture<ClientsFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
