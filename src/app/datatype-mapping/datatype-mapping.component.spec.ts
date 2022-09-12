import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatypeMappingComponent } from './datatype-mapping.component';

describe('DatatypeMappingComponent', () => {
  let component: DatatypeMappingComponent;
  let fixture: ComponentFixture<DatatypeMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatypeMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatypeMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
