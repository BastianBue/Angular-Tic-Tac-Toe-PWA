import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardSmartComponent } from './board-smart.component';

describe('BoardSmartComponent', () => {
  let component: BoardSmartComponent;
  let fixture: ComponentFixture<BoardSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardSmartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
