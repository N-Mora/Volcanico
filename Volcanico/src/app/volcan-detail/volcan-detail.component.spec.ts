import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolcanDetailComponent } from './volcan-detail.component';

describe('VolcanDetailComponent', () => {
  let component: VolcanDetailComponent;
  let fixture: ComponentFixture<VolcanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolcanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolcanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
