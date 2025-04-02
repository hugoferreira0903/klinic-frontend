import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { HorariosFormComponent } from '../components/horarios-form/horarios-form.component';
import { HorariosService } from '../../services/api-client/horarios/horarios.service';
import { SnackbarManagerService } from '../../services/snackbar-manager.service';
import { SERVICES_TOKEN } from '../../services/service.token';
import { Subscription } from 'rxjs';
import { IHorario } from '../../services/api-client/horarios/ihorario.service';
import { Router } from '@angular/router';
import { ConsultaModelForm } from '../horario.models';

@Component({
  selector: 'app-horarios-new',
  imports: [HorariosFormComponent],
  templateUrl: './horarios-new.component.html',
  styleUrl: './horarios-new.component.scss',
   providers: [
      { provide: SERVICES_TOKEN.HTTP.HORARIO, useClass: HorariosService },
      { provide: SERVICES_TOKEN.SNACKBAR, useClass: SnackbarManagerService }
    ]
})
export class HorariosNewComponent implements OnDestroy, OnInit {

  constructor(
    @Inject(SERVICES_TOKEN.HTTP.HORARIO) private readonly httpService: IHorario,
    @Inject(SERVICES_TOKEN.SNACKBAR) private readonly snackBarManager: SnackbarManagerService,
    private readonly router: Router
  ){}

  private httpSubscription?: Subscription;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    if (this.httpSubscription) {
      this.httpSubscription.unsubscribe()
    }
  }

  onSubmitConsulta(value: ConsultaModelForm){
    this.httpSubscription = this.httpService.save(value).subscribe(_ => {
      this.snackBarManager.show('Consulta agendada com sucesso');
      this.router.navigate(['/menu']);
    });
  }

}
