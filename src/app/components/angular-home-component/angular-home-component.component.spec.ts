import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHomeComponentComponent } from './angular-home-component.component';

describe('AngularHomeComponentComponent', () => {
  let component: AngularHomeComponentComponent;
  let fixture: ComponentFixture<AngularHomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularHomeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
