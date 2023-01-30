import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent implements OnInit {
  text: string = '';

  constructor(private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
      this.text = data.text
    }

  ngOnInit(): void {
  }

  yes(): void {
    this.dialogRef.close(true);
  }

  no(): void {
    this.dialogRef.close(false);
  }

}
