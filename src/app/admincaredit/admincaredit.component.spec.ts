import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincareditComponent } from './admincaredit.component';

describe('AdmincareditComponent', () => {
  let component: AdmincareditComponent;
  let fixture: ComponentFixture<AdmincareditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincareditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincareditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
