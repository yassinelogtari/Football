import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCompetitionComponent } from './selected-competition.component';

describe('SelectedCompetitionComponent', () => {
  let component: SelectedCompetitionComponent;
  let fixture: ComponentFixture<SelectedCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectedCompetitionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
