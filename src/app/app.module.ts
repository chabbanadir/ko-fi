import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExploreComponent } from './explore/explore.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CategoryComponent } from './category/category.component';
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { ListProfilesComponent } from './list-profiles/list-profiles.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.services';
import { ShopService } from './services/shop.services';
import { CreatorsComponent } from './creators/creators.component';
import { ShopsComponent } from './shops/shops.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExploreComponent,
    HeaderComponent,
    SearchBarComponent,
    CategoryComponent,
    ProfileComponent,
    ProfileComponent,
    ListProfilesComponent,
    RegisterComponent,
    LoginComponent,
    CreatorsComponent,
    ShopsComponent
  ],
  imports: [
    FormsModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UserService,ShopService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
