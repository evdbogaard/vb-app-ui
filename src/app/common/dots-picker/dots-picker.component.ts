import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'vb-dots-picker',
    templateUrl: './dots-picker.component.html',
    styleUrls: ['./dots-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DotsPickerComponent implements OnInit {

    @Input() value: number = 0;

    get unselected(): number {
        return 5 - this.value;
    }

    constructor() { }

    ngOnInit(): void {
    }

    sequence(n: number) {
        return new Array(n);
    }

}
