# Checklist

This projects ilustrates the usages of the component checklist.

#Usage

`<app-checklist [elements]=checklistElements (onClick)="logClickedElement($event)"></app-checklist>`

## Input

In order to render a list of element you need to provide one using *[elements]* attribute.

Example:
`[elements]=myChecklistElements`

## Events

..* onClick()
...`(onClick)="logClickedElement($event)"`
...Returns the clicked element in the checklist

## Methods

* getSelectedElements() - returns array of selected elements objects
* getSelectedElementsIds() - returns array of selected elements ids (int)
* addElement(newElement) - adds a new element to the list

## Run Demo
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
