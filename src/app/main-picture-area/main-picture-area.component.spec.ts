import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPictureAreaComponent } from './main-picture-area.component';

describe('MainPictureAreaComponent', () => {
  let component: MainPictureAreaComponent;
  let fixture: ComponentFixture<MainPictureAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPictureAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPictureAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
