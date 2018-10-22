import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedquestionsComponent } from './savedquestions.component';

describe('SavedquestionsComponent', () => {
  let component: SavedquestionsComponent;
  let fixture: ComponentFixture<SavedquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
