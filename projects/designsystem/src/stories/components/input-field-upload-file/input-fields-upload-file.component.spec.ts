import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldsUploadFileComponent } from './input-fields-upload-file.component';

describe('InputFieldsUploadFileComponent', () => {
  let component: InputFieldsUploadFileComponent;
  let fixture: ComponentFixture<InputFieldsUploadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputFieldsUploadFileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputFieldsUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
