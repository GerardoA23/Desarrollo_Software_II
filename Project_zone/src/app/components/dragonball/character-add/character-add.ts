import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-character-add',
  imports: [],
  templateUrl: './character-add.html',
  styles: ``
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);
  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() && !this.power() && this.power() < 0) {
      return;
    }

    const newObjectCharacter = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    }

    this.newCharacter.emit(newObjectCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
