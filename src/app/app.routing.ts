import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Pagina3Component } from "./pagina3/pagina3.component";
import { MaquiagemComponent } from "./maquiagem/maquiagem.component";
import { Pagina2Component } from "./pagina2/pagina2.component";
import { ContornoComponent } from "./contorno/contorno.component";
import { PrincipalComponent } from "./principal/principal.component";
import { PinceisComponent } from "./pinceis/pinceis.component";
import { Pagina6Component } from "./pagina6/pagina6.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { EnviadoComponent } from "./enviado/enviado.component";

const APP_ROUTES: Routes = [
  { path: "pagina3", component: Pagina3Component },
  { path: "maquiagem", component: MaquiagemComponent },
  { path: "pagina2", component: Pagina2Component },
  { path: "contorno", component: ContornoComponent },
  { path: "", component: PrincipalComponent },
  { path: "pinceis", component: PinceisComponent },
  { path: "pagina6", component: Pagina6Component },
  { path: "feedback", component: FeedbackComponent },
  { path: "enviado", component: EnviadoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
