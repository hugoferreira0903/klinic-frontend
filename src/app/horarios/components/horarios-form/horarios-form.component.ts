import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ListClientResponse } from '../../../services/api-client/clients/client.models';
import { CommonModule } from '@angular/common';
import { ClientsService } from '../../../services/api-client/clients/clients.service';
import { MatSelectModule } from '@angular/material/select';
import { ConsultaModelForm } from '../../horario.models';


@Component({
  selector: 'app-horarios-form',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,

  ],
  templateUrl: './horarios-form.component.html',
  styleUrl: './horarios-form.component.scss'
})
export class HorariosFormComponent {

  @Input() consulta: ConsultaModelForm = { dataConsulta: '', clientId: 0, consultaId: 0 };

  clients: ListClientResponse[] = [];
  showUsers: boolean = false;

  @Output() consultaSubmited = new EventEmitter<ConsultaModelForm>();


  constructor(private clientService: ClientsService, private router: Router) {}

  dia: number = 0;
  mes: number = 0;
  ano: number = 0;
  hora: number = 0;

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.list().subscribe({
      next: (users: ListClientResponse[]) => {
        this.clients = users;
      },
      error: (err) => console.error('Erro ao buscar clientes:', err)
    });
  }

  selectUser(client: ListClientResponse) {
    this.consulta.clientId = client.id;
  }

  onSubmit(_: NgForm) {
    this.consulta.dataConsulta = `${this.ano}-${this.mes < 10 ? '0' + this.mes : this.mes}-${this.dia < 10 ? '0' + this.dia : this.dia}T${this.hora}:00Z`;
    this.consultaSubmited.emit(this.consulta);
    this.router.navigate(['/menu']);
  }

  toggleUsers() {
    this.showUsers = !this.showUsers;
  }
}
