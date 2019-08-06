import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { LineaComponent } from './components/linea/linea.component';
import { BarraComponent } from './components/barra/barra.component';
import { AppRoutes } from './app.routing';
import { DonutComponent } from './components/donut/donut.component';
import { RadarComponent } from './components/radar/radar.component';
import { PastelComponent } from './components/pastel/pastel.component';
import { PolarComponent } from './components/polar/polar.component';
import { BubbleComponent } from './components/bubble/bubble.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    BarraComponent,
    DonutComponent,
    RadarComponent,
    PastelComponent,
    PolarComponent,
    BubbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
