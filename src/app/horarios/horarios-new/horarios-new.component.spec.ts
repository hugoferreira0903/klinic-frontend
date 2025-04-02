import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosNewComponent } from './horarios-new.component';

describe('HorariosNewComponent', () => {
  let component: HorariosNewComponent;
  let fixture: ComponentFixture<HorariosNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorariosNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorariosNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
