import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamScoreDetailComponent } from './team-score-detail.component';

describe('TeamScoreDetailComponent', () => {
  let component: TeamScoreDetailComponent;
  let fixture: ComponentFixture<TeamScoreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamScoreDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamScoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
