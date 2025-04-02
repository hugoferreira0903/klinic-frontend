import { InjectionToken } from "@angular/core";
import { ICLientService } from "./api-client/clients/iclients.service";
import { ISnackbarManagerService } from "./isnackbar-manager.service";
import { IHorario } from "./api-client/horarios/ihorario.service";


export const SERVICES_TOKEN = {
  HTTP: {
      CLIENT: new InjectionToken<ICLientService>('SERVICES_TOKEN.HTTP.CLIENT'),
      HORARIO: new InjectionToken<IHorario>('SERVICES_TOKEN.HTTP.HORARIO'),
      //MEDICO: new InjectionToken<IMedicoService>('SERVICES_TOKEN.HTTP.MEDICO')
  },
  SNACKBAR: new InjectionToken<ISnackbarManagerService>('SERVICES_TOKEN.SNACKBAR'),
  //DIALOG: new InjectionToken<IDialogManagerService>('SERVICES_TOKEN.DIALOG')
}
