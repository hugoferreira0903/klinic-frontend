#clients
ng g c clients/new-client &&
ng g c clients/list-clients &&
ng g c clients/edit-client &&
ng g c clients/components/client-form &&
ng g c clients/components/client-table &&

touch src/app/clients/client.models.ts &&


#commons components
ng g c commons/components/card-header &&
ng g c commons/components/menu-bar &&
ng g c commons/components/yes-no-dialog &&
ng g c commons/components/login &&
ng g c commons/components/header-klinic &&
ng g c commons/components/card-menu &&

#service
ng g s services/dialog-manager &&
ng g s services/snackbar-manager &&
ng g s services/api-client/clients/clients &&


touch src/app/services/idialog-manager.service.ts &&
touch src/app/services/isnackbar-manager.service.ts &&
touch src/app/services/service.token.ts &&

touch src/app/services/api-client/clients/iclients.service.ts &&
touch src/app/services/api-client/clients/client.models.ts &&

npm install @angular/cdk bootstrap ngx-mask
