import { Component, computed, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList],
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.css'
})
export class DragonballSuper {
name = signal('');
power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 8000 },
    { id: 2, name: 'Vegeta', power: 7000 },
    { id: 3, name: 'Gohan', power: 4000 },
    { id: 4, name: 'Piccolo', power: 500 },
  ]);

  powerClass = computed(() => {
    return {
      'text-danger': true,
    };
  });

  addCharacter() {
    if (!this.name() && !this.power() && this.power() < 0) {
      return;
    }

    const newCharacter = {
      id: this.characters.length + 1,
      name: this.name(),
      power: this.power()
    }
    /*
    const objectTest = {
      name: this.name(),
      apellido: 'perez'
    }
    console.log(objectTest);

    const copyObjectTest = {
      ...objectTest,
      edad: 20,
      name: 'Carlos'
    };
    */
    const newListCharacters = [...this.characters(), newCharacter];

    //this.characters().push(newCharacter);
    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
