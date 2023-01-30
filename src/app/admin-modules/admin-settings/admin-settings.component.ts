import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Socket } from 'ngx-socket-io';
import { MenuDistribution } from 'src/app/models/menuDistribution.model';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss']
})
export class AdminSettingsComponent implements OnInit {
  negativePoints: boolean = false;
  bonusesWrongAnswers: boolean = true;
  teamThreshold: number = 0;
  teamThresholdModifier: number = 0;
  percentErrorsTiers: number[] = [];
  bonusWrong: number[] = [];
  menuDistribution: MenuDistribution[] = [];
  durationInSeconds: number = 2;
  lockSpeed: boolean = true;

  columnsToDisplay2: string[] = ['round', 'menuNb', 'teamGroup', 'groupManagement'];

  constructor(private socket: Socket,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    //------------------------------------------------------------------------------------
    //---------------------- Questions management ----------------------------------------
    //------------------------------------------------------------------------------------
    this.socket.on('send-menu-groups', (menuTeamGroup: any[]) => {
      this.menuDistribution = Object.keys(menuTeamGroup).map((key: any) => menuTeamGroup[key]);
    })

    this.socket.emit('refresh-scoreSettings')
    this.socket.on('update-scoreSettings', (lockState: boolean, negPts: boolean, bonuses: boolean, threshold: number, thresholdModifier: number, percentErrorsTiers: number[], bonusWrong: number[]) => {
      this.lockSpeed = lockState
      this.negativePoints = negPts
      this.bonusesWrongAnswers = bonuses
      this.teamThreshold = threshold
      this.teamThresholdModifier = thresholdModifier
      this.percentErrorsTiers = percentErrorsTiers
      this.bonusWrong = bonusWrong
    })
  }

  onSave(): void {
    this.socket.emit('save')
    this._snackBar.open("Data saved!", "OK", {
      duration: this.durationInSeconds * 1000
    });
  }

  onReload(): void {
    this.socket.emit('reload')
    this._snackBar.open("Data reloaded!", "OK", {
      duration: this.durationInSeconds * 1000
    });
  }

  onChangeMenuGroup(menuNb: number, round: number, teamGroup: number): void {
    this.socket.emit('update-menu-team-group', menuNb, round, teamGroup);
  }

  onChangeLockSpeed(): void {
    this.socket.emit('change-lock-speed', this.lockSpeed)
  }

  onChangeNegPoints(): void {
    this.socket.emit('change-negative-points', this.negativePoints)
  }

  onChangeBonusesWrongAnswers(): void {
    this.socket.emit('change-bonuses-wrong-answers', this.bonusesWrongAnswers)
  }

  onChangeTreshold(): void {
    this.socket.emit('change-threshold', this.teamThreshold)
  }

  onChangeTresholdModifier(): void {
    this.socket.emit('change-threshold-modifier', this.teamThresholdModifier)
  }

  onChangePercentError(): void {
    this.socket.emit('change-percent-error', this.percentErrorsTiers)
  }

  onChangeBonuses(id: number, bonus: number): void {
    this.bonusWrong[id] = bonus
    this.socket.emit('update-bonuses', this.bonusWrong)
  }

}
