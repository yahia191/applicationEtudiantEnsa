import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiensListeComponent } from './liens-liste.component';

describe('LiensListeComponent', () => {
  let component: LiensListeComponent;
  let fixture: ComponentFixture<LiensListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiensListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiensListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
