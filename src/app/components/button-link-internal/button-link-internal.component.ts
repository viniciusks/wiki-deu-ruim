import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'app-button-link-internal',
    templateUrl: './button-link-internal.component.html',
    styleUrls: ['./button-link-internal.component.css'],
})
export class ButtonLinkInternalComponent implements OnInit {
    @Input() value = ''
    @Input() routerLink = ''

    constructor(private _router: Router) {}

    ngOnInit(): void {}

    goTo(): void {
        if (this.routerLink != '') {
            this._router.navigate([this.routerLink])
        }
    }
}
