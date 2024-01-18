import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'

// Font Awesome - Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

// Componentes
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { ButtonComponent } from './components/button/button.component'
import { ButtonLinkInternalComponent } from './components/button-link-internal/button-link-internal.component'

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ButtonComponent,
        ButtonLinkInternalComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
