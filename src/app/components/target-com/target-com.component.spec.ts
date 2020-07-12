import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetComComponent } from './target-com.component';

describe('TargetComComponent', () => {
  let component: TargetComComponent;
  let fixture: ComponentFixture<TargetComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
