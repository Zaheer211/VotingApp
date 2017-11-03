import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderPollsComponent } from './render-polls.component';

describe('RenderPollsComponent', () => {
  let component: RenderPollsComponent;
  let fixture: ComponentFixture<RenderPollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderPollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
