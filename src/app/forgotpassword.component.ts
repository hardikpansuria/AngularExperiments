import {Component, Inject, Injectable} from  '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material';

@Component({
templateUrl:  'forgotpassword.component.html'
})
export  class  PasswordComponent {
    constructor(private  dialogRef:  MatDialogRef<PasswordComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
    }
    public  closeDialog() {
        this.dialogRef.close();
    }
}