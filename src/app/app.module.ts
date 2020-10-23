import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { routing } from "./app.routing";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ContornoComponent } from "./contorno/contorno.component";
import { MaquiagemComponent } from "./maquiagem/maquiagem.component";
import { Pagina2Component } from "./pagina2/pagina2.component";
import { Pagina3Component } from "./pagina3/pagina3.component";
import { PrincipalComponent } from "./principal/principal.component";
import { PinceisComponent } from "./pinceis/pinceis.component";
import { Pagina6Component } from "./pagina6/pagina6.component";
import { FeedbackComponent } from './feedback/feedback.component';
import { EnviadoComponent } from './enviado/enviado.component';

@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [
    AppComponent,
    HelloComponent,
    ContornoComponent,
    MaquiagemComponent,
    Pagina2Component,
    Pagina3Component,
    PrincipalComponent,
    PinceisComponent,
    Pagina6Component,
    FeedbackComponent,
    EnviadoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
