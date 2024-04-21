import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocadoresComponent } from './locadores.component';

describe('LocadoresComponent', () => {
  let component: LocadoresComponent;
  let fixture: ComponentFixture<LocadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
