import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
    @Input() text = ''

    constructor(private _router: Router) {}

    ngOnInit(): void {}
}
