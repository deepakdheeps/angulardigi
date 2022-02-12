import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import{ BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CardComponent } from './card/card.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { MytreeComponent } from './mytree/mytree.component';
import { Snackbar2Component } from './snackbar2/snackbar2.component';
import { Snackbar3Component } from './snackbar3/snackbar3.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    CardComponent,
    SnackbarComponent,
    MytreeComponent,
    Snackbar2Component,
    Snackbar3Component,
   
    
 
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    LayoutModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatTreeModule,
    MatDividerModule,
    MatCheckboxModule
    ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule {
 
 }

