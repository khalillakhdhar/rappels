import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtachesComponent } from './addtaches.component';

describe('AddtachesComponent', () => {
  let component: AddtachesComponent;
  let fixture: ComponentFixture<AddtachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddtachesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
