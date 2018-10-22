import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedquestionsComponent } from './publishedquestions.component';

describe('PublishedquestionsComponent', () => {
  let component: PublishedquestionsComponent;
  let fixture: ComponentFixture<PublishedquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
