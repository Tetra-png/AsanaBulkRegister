import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSelectedListComponent } from './app-selected-list.component';

describe('AppSelectedListComponent', () => {
  let component: AppSelectedListComponent;
  let fixture: ComponentFixture<AppSelectedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSelectedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSelectedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
