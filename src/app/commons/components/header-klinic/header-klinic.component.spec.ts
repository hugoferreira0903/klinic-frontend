import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderKlinicComponent } from './header-klinic.component';

describe('HeaderKlinicComponent', () => {
  let component: HeaderKlinicComponent;
  let fixture: ComponentFixture<HeaderKlinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderKlinicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderKlinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
