import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { ClientModelForm } from '../../client.models';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-form',
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxMaskDirective
  ],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})
export class ClientFormComponent {

  constructor(private router: Router) {}

  @Input() client: ClientModelForm = { id: 0, name: '', email: '', phone: '', cpf: '' , password: ''}

  @Output() clientSubmited = new EventEmitter<ClientModelForm>();

  onSubmit(_: NgForm) {
    this.clientSubmited.emit(this.client)
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }


}
