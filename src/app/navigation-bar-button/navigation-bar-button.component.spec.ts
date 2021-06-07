import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarButtonComponent } from './navigation-bar-button.component';

describe('NavigationBarButtonComponent', () => {
  let component: NavigationBarButtonComponent;
  let fixture: ComponentFixture<NavigationBarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationBarButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
