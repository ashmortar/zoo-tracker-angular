import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { AppComponent }       from './app.component';
import { FormsModule }        from '@angular/forms';
import { EditAnimalComponent }from './edit-animal.component';
import { NewAnimalComponent } from './new-animal.component';
import { AgePipe }            from './age.pipe';
import { AnimalListComponent }from './aminal-list.component';


@NgModule({
  imports: [ BrowserModule,
              FormsModule ],
  declarations: [ AppComponent,
                  EditAnimalComponent,
                  NewAnimalComponent,
                  AgePipe,
                  AnimalListComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
