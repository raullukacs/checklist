import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChecklistElement } from './checklist-element.model';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  @Input() elements: ChecklistElement[];

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickElement(clickedEl: ChecklistElement) {
    clickedEl.checked = !(clickedEl.checked || false);
    this.onClick.emit(clickedEl);
  }

  getSelectedElements(){
    return this.elements.filter(el => el.checked);
  }

  getSelectedElementsIds(){
    return this.elements.filter(el => el.checked).map(el => el.id);
  }

  addElement(newElement: ChecklistElement) {
    this.elements.push(newElement);
  }
}
