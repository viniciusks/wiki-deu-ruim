import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { faHome } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-button-link-internal',
    templateUrl: './button-link-internal.component.html',
    styleUrls: ['./button-link-internal.component.css'],
})
export class ButtonLinkInternalComponent implements OnInit {
    @Input() value = ''
    @Input() routerLink = ''
    @Input() faIcon = faHome

    constructor(private _router: Router) {}

    ngOnInit(): void {}

    goTo(): void {
        if (this.routerLink != '') {
            this._router.navigate([this.routerLink])
        }
    }
}
