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

4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

## Methods

* getSelectedElements() - returns array of selected elements objects
* getSelectedElementsIds() - returns array of selected elements ids (int)
* addElement(newElement) - adds a new element to the list

## Run Demo
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
