import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationListeComponent } from './application-liste.component';

describe('ApplicationListeComponent', () => {
  let component: ApplicationListeComponent;
  let fixture: ComponentFixture<ApplicationListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
