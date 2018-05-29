import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolcansComponent } from './volcans.component';

describe('VolcansComponent', () => {
  let component: VolcansComponent;
  let fixture: ComponentFixture<VolcansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolcansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolcansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
