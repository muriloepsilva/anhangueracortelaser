import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { SustentabilidadeComponent } from './pages/sustentabilidade/sustentabilidade.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ProjetoComponent } from './pages/projeto/projeto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'sustentabilidade', component: SustentabilidadeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'solicite-projeto', component: ProjetoComponent },
];
