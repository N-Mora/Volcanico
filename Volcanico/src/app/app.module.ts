import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VolcansComponent } from './volcans/volcans.component';
import { VolcanDetailComponent } from './volcan-detail/volcan-detail.component';
import { Volcan } from './_models';
import { VolcanService } from './_services/volcan.service';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MapComponent } from './map/map.component';
import { VolcanComponent } from './volcan/volcan.component';


const appRoutes: Routes = [{ path: '', component: AccueilComponent },
{ path: 'volcan/:id', component: VolcanComponent }, { path: 'map', component: MapComponent },
{ path: 'volcans', component: VolcansComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    VolcansComponent,
    VolcanDetailComponent,
    AccueilComponent,
    MapComponent,
    VolcanComponent
  ],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule, FormsModule
  ],
  providers: [VolcanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
