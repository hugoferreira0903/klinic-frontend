import { Component, Inject } from '@angular/core';
import { ICLientService } from '../../services/api-client/clients/iclients.service';
import { SERVICES_TOKEN } from '../../services/service.token';

@Component({
  selector: 'app-edit-client',
  imports: [],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.scss'
})
export class EditClientComponent {

  constructor(@Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly httpService: ICLientService){}

}
