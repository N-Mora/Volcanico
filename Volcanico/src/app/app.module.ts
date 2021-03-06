import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VolcansComponent } from './volcans-liste/volcans.component';
import { VolcanDetailComponent } from './volcan-detail/volcan-detail.component';
import { Volcan } from './_models';
import { VolcanService } from './_services/volcan.service';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { VolcanComponent } from './volcan/volcan.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { WebComponent } from './web/web.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';



const appRoutes: Routes = [{ path: 'map', component: MapComponent },
{ path: 'volcans', component: VolcansComponent }, { path: 'volcan/:id', component: VolcanComponent },
{ path: '', component: HomeComponent }, { path: 'map/:latitude/:longitude', component: MapComponent },
{ path: 'about', component: AboutComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VolcansComponent,
    VolcanDetailComponent,
    MapComponent,
    VolcanComponent,
    HomeComponent,
    SearchComponent,
    WebComponent,
    AboutComponent
  ],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [VolcanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
