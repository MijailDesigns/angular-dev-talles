import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  // el valor que se le pone aca seria el por defecto que se mostraria cuando no recibe nada
  public characterList: Character[] = [{ name: 'Thunks', power: 10 }];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    // emitir el id del personaje
    console.log(index);
    this.onDelete.emit(index);
  }
}
