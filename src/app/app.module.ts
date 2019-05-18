import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ApproutingModule} from './approuting/approuting.module';
import { SideNavComponent } from './approuting/side-nav/side-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule,
        MatIconModule, MatListModule} 
        from '@angular/material';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, 
                  ApproutingModule, LayoutModule, MatToolbarModule, 
                  MatButtonModule, MatSidenavModule, MatIconModule, 
                  MatListModule ],
  declarations: [ AppComponent, HelloComponent, SideNavComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


