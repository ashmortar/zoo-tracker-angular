import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="form-group">
  <h3>Filter Animals By Age: </h3>
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="young">Young Animals (age < 2)</option>
    <option value="mature">Mature Animals(age >= 2)</option>
  </select>
  </div>
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge">Name: {{currentAnimal.name}}
      <ul>
        <li>Species: {{currentAnimal.species}}</li>
        <li>Age: {{currentAnimal.age}}</li>
        <li>Diet: {{currentAnimal.diet}}</li>
        <li>Location: {{currentAnimal.location}}</li>
        <li>Caretakers: {{currentAnimal.caretakers}}</li>
        <li>Sex: {{currentAnimal.sex}}</li>
        <li>Likes: {{currentAnimal.likes}}</li>
        <li>Dislikes: {{currentAnimal.dislikes}}</li>
        <li><button class="btn btn-info" (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button></li>
      </ul>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() editClickSender = new EventEmitter();
  filterByAge: string = "allAnimals";


  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.editClickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

}
