import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureAreaComponent } from './picture-area.component';

describe('PictureAreaComponent', () => {
  let component: PictureAreaComponent;
  let fixture: ComponentFixture<PictureAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PictureAreaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
