import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmGlimpseComponent } from './crm-glimpse.component';

describe('CrmGlimpseComponent', () => {
  let component: CrmGlimpseComponent;
  let fixture: ComponentFixture<CrmGlimpseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmGlimpseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmGlimpseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
