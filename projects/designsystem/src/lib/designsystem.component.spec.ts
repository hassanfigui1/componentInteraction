import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsystemComponent } from './designsystem.component';

describe('DesignsystemComponent', () => {
  let component: DesignsystemComponent;
  let fixture: ComponentFixture<DesignsystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignsystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
