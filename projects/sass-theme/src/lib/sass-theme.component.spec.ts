import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SassThemeComponent } from './sass-theme.component';

describe('SassThemeComponent', () => {
  let component: SassThemeComponent;
  let fixture: ComponentFixture<SassThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SassThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SassThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
