import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailsComponent } from './details/details.component';
import { ApiAcessService } from './api-acess.service';
import { AccessoiresComponent } from './accessoires/accessoires.component';


const approute : Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:id', component: DetailsComponent },
  { path: 'service', component: AccessoiresComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    DetailsComponent,
    AccessoiresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approute),
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [
    ServiceService,
    ApiAcessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
