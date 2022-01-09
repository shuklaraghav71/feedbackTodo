import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RkstodoComponent } from './rkstodo.component';

describe('RkstodoComponent', () => {
  let component: RkstodoComponent;
  let fixture: ComponentFixture<RkstodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RkstodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RkstodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
