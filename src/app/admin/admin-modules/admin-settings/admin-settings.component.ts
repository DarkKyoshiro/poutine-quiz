import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Socket } from 'ngx-socket-io';
import { CourseDialogComponent } from 'src/app/course-dialog/course-dialog.component';

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
  durationInSeconds: number = 2;
  lockSpeed: boolean = true;
  bonusSpeedNumberTeams: number = 3;

  columnsToDisplay2: string[] = ['round', 'menuNb', 'teamGroup', 'groupManagement'];

  constructor(private socket: Socket,
    private dialog: MatDialog, 
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    //------------------------------------------------------------------------------------
    //---------------------- Questions management ----------------------------------------
    //------------------------------------------------------------------------------------
    this.socket.emit('refresh-scoreSettings')
    this.socket.on('update-scoreSettings', (lockState: boolean, negPts: boolean, bonuses: boolean, threshold: number, thresholdModifier: number, percentErrorsTiers: number[], bonusWrong: number[], bonusSpeedNumberTeams: number) => {
      this.lockSpeed = lockState
      this.negativePoints = negPts
      this.bonusesWrongAnswers = bonuses
      this.teamThreshold = threshold
      this.teamThresholdModifier = thresholdModifier
      this.percentErrorsTiers = percentErrorsTiers
      this.bonusWrong = bonusWrong
      this.bonusSpeedNumberTeams = bonusSpeedNumberTeams
    })
  }

  onSave(): void {
    this.socket.emit('save')
    this._snackBar.open("Data saved!", "OK", {
      duration: this.durationInSeconds * 1000
    });
  }

  onReload(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      text: 'Vous êtes sur le point de restaurer les réponses sauvegardées, effaçant par la même occasions les réponses actuelles. Voulez-vous continuer ?'
    }

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(
      data => {
        if(data) {
          this.socket.emit('reload')
          this._snackBar.open("Data reloaded!", "OK", {
            duration: this.durationInSeconds * 1000
          });
        }
      }
    )
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

  onChangeBonusSpeed(): void {
    this.socket.emit('change-bonus-speed', this.bonusSpeedNumberTeams)
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
