import { Component, Inject } from '@angular/core';
import { Confirmation } from '../models/confirmation-model.component';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from "@angular/material";

@Component({
  selector: 'dialog-box',
  templateUrl: 'dialog-box.component.html',
  styleUrls: ['dialog-box.component.css']
})
export class DialogBox {

  private comment: string = '';
  private showComment: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogBox>,
    @Inject(MAT_DIALOG_DATA) private data: MatDialogConfig) {
    if(data === 'REJECTED') this.showComment = true;
  }

  private answerYes(): Confirmation {
    return new Confirmation('YES', this.comment);
  }

  private answerNo(): Confirmation {
    return new Confirmation('NO', '');
  }

}
