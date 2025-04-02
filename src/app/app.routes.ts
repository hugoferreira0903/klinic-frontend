import { Routes } from '@angular/router';
import { EditClientComponent } from './clients/edit-client/edit-client.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { NewClientComponent } from './clients/new-client/new-client.component';
import { CardMenuComponent } from './commons/components/card-menu/card-menu.component';
import { LoginComponent } from './commons/components/login/login.component';
import { HorariosNewComponent } from './horarios/horarios-new/horarios-new.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'clients/edit-client/:id', component: EditClientComponent, data: { title: 'Atualizar Cliente' } },
  { path: 'clients/new-client', component: NewClientComponent, data: { title: 'Cadastrar Cliente' } },
  { path: 'clients/list', component: ListClientsComponent, data: { title: 'Clientes Cadastrados' } },
  {path: 'menu', component : CardMenuComponent, data: {title: 'Menu'}},
  { path: 'consulta', component: HorariosNewComponent},
  {path: '**', redirectTo: 'login'}
];
