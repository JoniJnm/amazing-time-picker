import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimePickerComponent} from './time-picker/time-picker.component';
import {AtpTimePickerComponent} from './atp-time-picker/atp-time-picker.component';
import {AtpDirective} from './atp.directive';
import {AmazingTimePickerService} from './amazing-time-picker.service';
import {AtpCoreService} from './atp-core.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TimePickerComponent,
    AtpTimePickerComponent,
    AtpDirective
  ],
  providers: [
    AmazingTimePickerService,
    AtpCoreService
  ],
  entryComponents: [
    TimePickerComponent
  ],
  exports: [
    TimePickerComponent,
    AtpTimePickerComponent,
    AtpDirective
  ]
})
export class AmazingTimePickerModule { }
