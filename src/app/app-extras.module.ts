import { NgModule } from '@angular/core';
import { BoardDataService } from './boarddata.service';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  providers: [ BoardDataService ],
  entryComponents: []
})
export class AppExtrasModule { }
