# WebServiceCVG

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

Run `ng serve --o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Movil Development server

Run ng serve --host=0.0.0.0 --disable-host-check

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Crearte Componente

ng generate component componentName --module=app.module
ng g c components/mantenimiento/permisos/listarPermisos  --module=app.module
## Configuraciones

## 1.- Setup

clonar manualmente el repositorio y luego ejecutar `npm install`.

## 2.- add angular material

ejecutar  `ng add @angular/material`.

## 2.- FlexLayoutModule

ejecutar `npm install @angular/flex-layout`.

## 3.- go to tsconfig.json and add

"strictPropertyInitialization": false

## example : 


  ## "angularCompilerOptions": {
  ##  "enableI18nLegacyMessageIdFormat": false,
  ##  "strictInjectionParameters": true,
  ##  "strictInputAccessModifiers": true,
  ##  "strictTemplates": true,

  ##  "strictPropertyInitialization": false    <---------
  ## }


## 4.- Install dataTable

1. npm install jquery --save
2. npm install datatables.net --save
3. npm install datatables.net-dt --save
4. npm install angular-datatables --save
5. npm install @types/jquery --save-dev
6. npm install @types/datatables.net --save-dev
7. npm install bootstrap --save

## 5.- config angular.json

            "styles": [
              "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
              "src/styles.css",
              "node_modules/datatables.net-dt/css/jquery.dataTables.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.js",
              "node_modules/datatables.net/js/jquery.dataTables.js",
              "node_modules/bootstrap/dist/js/bootstrap.js"
            ]

## 6. Add dataTable on Module.ts File visit src/app directory and open app.module.ts file


import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



## 6. Api Sunat

http://www.dayangels.com/home/dni-lite
