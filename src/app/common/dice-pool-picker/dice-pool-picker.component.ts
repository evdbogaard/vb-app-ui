import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'vb-dice-pool-picker',
    templateUrl: './dice-pool-picker.component.html',
    styleUrls: ['./dice-pool-picker.component.scss']
})
export class DicePoolPickerComponent implements OnInit {

    selectedAttribute: any = "???"
    useSpeciality: boolean = false;
    miscModifier: number = 0;
    reason: string = "testing a roll";

    constructor(private dialogRef: MatDialogRef<DicePoolPickerComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
    }

    roll(): void {
        this.dialogRef.close({
            pool: this.data.skillValue + this.selectedAttribute.value + (this.useSpeciality ? 1 : 0),
            attribute: this.selectedAttribute,
            speciality: this.useSpeciality,
            miscMod: this.miscModifier,
            reason: this.reason,
            difficulty: 0
        });
    }

}
