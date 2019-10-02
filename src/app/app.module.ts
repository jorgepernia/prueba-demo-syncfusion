import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//pivot table syncfusion
import { PivotViewModule } from '@syncfusion/ej2-angular-pivotview';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PivotViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
