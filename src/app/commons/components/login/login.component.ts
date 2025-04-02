import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from '../../../services/api-client/clients/clients.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListClientResponse, LoginRequest } from '../../../services/api-client/clients/client.models'; // Importando a interface correta
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginComponent implements OnInit {

  clients: ListClientResponse[] = [];

  selectedClient: any = null;

selectUser(client: any) {
  this.selectedClient = client;
  this.email = client.email;
  this.password = '';
}

  email = '';
  password = '';

  showUsers = false;

  constructor(private clientService: ClientsService, private router: Router) {}

  ngOnInit(): void {
    this.loadClients();
  }

  onLogin() {
    const request: LoginRequest = { email: this.email, password: this.password };

    this.clientService.login(request).subscribe({
      next: () => this.router.navigate(['/menu']),
      error: () => alert('E-mail ou PASSWORD inválidos!')
    });
  }

  onSignup() {
    this.router.navigate(['/clients/new-client']);
  }

  loadClients(): void {
    this.clientService.list().subscribe({
      next: (users: ListClientResponse[]) => {
        this.clients = users;
      },
      error: (err) => console.error('Erro ao buscar clientes:', err)
    });
  }

  toggleUsers() {
    this.showUsers = !this.showUsers;
  }

}
