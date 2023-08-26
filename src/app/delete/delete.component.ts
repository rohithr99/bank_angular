import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  @Input() item: String | undefined ; // if currentAcno is not there then undefined works
  @Output() onCancel = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  cancel(){
    this.onCancel.emit();
  }

  deleteac(){
    this.onDelete.emit(this.item);
  }
}
