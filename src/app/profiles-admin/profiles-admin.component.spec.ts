import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesAdminComponent } from './profiles-admin.component';

describe('ProfilesAdminComponent', () => {
  let component: ProfilesAdminComponent;
  let fixture: ComponentFixture<ProfilesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
