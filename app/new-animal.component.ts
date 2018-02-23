import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>New Animal</h1>

  <div class="form-group">
  <label>Enter Animal Name:</label>
  <input #newName>
  </div>

  <div class="form-group">
  <label>Enter Animal Species:</label>
  <input #newSpecies>
  </div>

  <div class="form-group">
  <label>Enter Animal Age:</label>
  <input #newAge>
  </div>

  <div class="form-group">
  <label>Enter Animal Diet:</label>
  <input #newDiet>
  </div>

  <div class="form-group">
  <label>Enter Animal Location:</label>
  <input #newLocation>
  </div>

  <div class="form-group">
  <label>Enter Animal CareTakers:</label>
  <input #newCareTakers>
  </div>

  <div class="form-group">
  <label>Enter Animal Sex:</label>
  <input #newSex>
  </div>

  <div class="form-group">
  <label>Enter Animal Likes:</label>
  <input #newLikes>
  </div>

  <div class="form-group">
  <label>Enter Animal Dislikes:</label>
  <input #newDislikes>
  </div>

  <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCareTakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCareTakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, careTakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, careTakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
