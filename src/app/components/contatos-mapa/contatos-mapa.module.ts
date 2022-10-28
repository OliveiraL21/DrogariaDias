import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatosMapaComponent } from './contatos-mapa.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [ContatosMapaComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7D3xQ8eAG4tBCWGXfNVAFyQAdL_0IfdQ',
    }),
  ],
  exports: [ContatosMapaComponent],
})
export class ContatosMapaModule {}
