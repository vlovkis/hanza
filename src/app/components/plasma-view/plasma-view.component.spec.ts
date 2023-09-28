import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasmaViewComponent } from './plasma-view.component';

describe('PlasmaViewComponent', () => {
  let component: PlasmaViewComponent;
  let fixture: ComponentFixture<PlasmaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasmaViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlasmaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
