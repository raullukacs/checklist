import { Component, ViewChild } from '@angular/core';
import { ChecklistElement } from './components/checklist/checklist-element.model';
import { ChecklistComponent } from './components/checklist/checklist.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ChecklistComponent) checklist: ChecklistComponent;

  result = null;

  checklistElements: ChecklistElement[] = [];

  constructor() {

    const el1 = new ChecklistElement();
    el1.id = Date.now();
    el1.label = 'Do homework';

    const el2 = new ChecklistElement();
    el2.id = Date.now();
    el2.label = 'Cleanup home';

    this.checklistElements.push(el1);
    this.checklistElements.push(el2);
  }

  logClickedElement(element) {
    this.result = JSON.stringify(element);
  }

  getSelectedElements(){
    this.result = JSON.stringify(this.checklist.getSelectedElements());
  }

  getSelectedElementIds(){
    this.result = JSON.stringify(this.checklist.getSelectedElementsIds());
  }

  addElement(){
    const newEl = new ChecklistElement();
    newEl.id = Date.now();
    newEl.label = 'New Element ' + Date.now();
    this.checklist.addElement(newEl);
  }
}
