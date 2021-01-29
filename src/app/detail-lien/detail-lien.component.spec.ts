import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLienComponent } from './detail-lien.component';

describe('DetailLienComponent', () => {
  let component: DetailLienComponent;
  let fixture: ComponentFixture<DetailLienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
