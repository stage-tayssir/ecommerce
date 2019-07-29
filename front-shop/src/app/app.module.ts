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
import { AccessoiresComponent } from './equipement/accessoires.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AccessoiresService } from './accessoires.service';
import { AccessComponent } from './access/access.component';
import { CartService } from './cart.service';
import { CartlistComponent } from './cartlist/cartlist.component';


const approute : Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:id', component: DetailsComponent },
  { path: 'service', component: AccessoiresComponent },
  { path: 'access', component: AccessComponent },
  { path: 'cart', component: CartlistComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    DetailsComponent,
    AccessoiresComponent,
    AccessComponent,
    CartlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approute),
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [
    ServiceService,
    ApiAcessService,
    AccessoiresService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
