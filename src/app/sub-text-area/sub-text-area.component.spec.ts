import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTextAreaComponent } from './sub-text-area.component';

describe('SubTextAreaComponent', () => {
  let component: SubTextAreaComponent;
  let fixture: ComponentFixture<SubTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTextAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
