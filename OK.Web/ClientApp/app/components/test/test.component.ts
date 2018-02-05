import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
/** test component*/
export class TestComponent implements OnInit
{
    /** test ctor */
    constructor() { }

    /** Called by Angular after test component initialized */
    ngOnInit(): void { }
}