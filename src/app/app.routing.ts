import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { BarraComponent } from './components/barra/barra.component';
import { DonutComponent } from './components/donut/donut.component';
import { RadarComponent } from './components/radar/radar.component';
import { PastelComponent } from './components/pastel/pastel.component';
import { PolarComponent } from './components/polar/polar.component';
import { BubbleComponent } from './components/bubble/bubble.component';

const routes: Routes = [
  { path: 'linea', component: LineaComponent },
  { path: 'barra', component: BarraComponent },
  { path: 'donut', component: DonutComponent },
  { path: 'radar', component: RadarComponent },
  { path: 'pastel', component: PastelComponent },
  { path: 'polar', component: PolarComponent },
  { path: 'bubble', component: BubbleComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'linea' },
];

export const AppRoutes = RouterModule.forRoot(routes);
