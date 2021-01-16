<!---
<details>
<summary>Summary</summary>

Details
</details>
-->

<!---
Exercise format:
- title
  - task
  - project name
  - solution
    - steps
-->
# Angular exercises

![angular-logo](./angular-logo.png)

To create new exercise from exercise template execute `create-exercise.sh` script with exercise name as parameter:

```bash
./create-exercise.sh example-exarcise
```

## Exercises list

<details>
<summary>Generate Angular project</summary>

**Task**

Generate Angular project:
- without routing
- without component tests
- use SCSS for styling

**Project**: `generate-angular-project`

<details>
<summary>Solution</summary>

```bash
npx ng new project --routing false --skip-tests true --style scss
```
</details>

---
</details>

<!--- -->

<details>
<summary>Generate component</summary>

**Task:** generate component without test files

**Project**: `generate-compent`

<details>
<summary>Solution</summary>

```bash
ng g c user --skip-tests true
```
</details>

---
</details>

<!--- -->

<details>
<summary>Bind events</summary>

**Task**
- create application with text `Default text` and button
- when user clicks on button text should be changed to `Changed text`

**Project**: `bind-events`

<details>
<summary>Solution</summary>

<details>
<summary>Create property in component with default text</summary>

```diff
export class AppComponent {
+ text: string = 'Default text'
}
```
</details>

<details>
<summary>Output property to the template using interpolation</summary>

```diff
+ Text: {{text}}
```
</details>

<details>
<summary>Create method in component that will change text in property</summary>

```diff
export class AppComponent {
...
+ changeText() {
+   this.text = 'Custom text'
+ }
}
```
</details>

<details>
<summary>Create button in template</summary>

```
<button>Change text</button>
```
</details>

<details>
<summary>Bind button's <code>click</code> event to method that changes property value</summary>

```
<button (click)="changeText()">Change text</button>
```
</details>

</details>

---
</details>

<!--- -->

<details>
<summary>Two-way binding</summary>

**Task**
- create application with text `Default text`, input field and button
- text on page and in the input field should be synchronized
  - when user changes text in the input field, text on page should be changed also
- when user clicks on a button, text on page and in input field should be changed to `Default text`
- use banana-syntax for two-way binding

**Project**: `two-way-binding`

<details>
<summary>Solution</summary>

<details>
<summary>Create property in component with default text</summary>

```diff
export class AppComponent {
+ text: string = 'Default text'
}
```
</details>

<details>
<summary>Output property to the template using interpolation</summary>

```diff
+ Text: {{text}}
```
</details>

<details>
<summary>Create method in component that will sets default text to property</summary>

```diff
export class AppComponent {
...
+ setDefaultText() {
+   this.text = 'Default text'
+ }
}
```
</details>

<details>
<summary>Create button in template</summary>

```
<button>Set default text</button>
```
</details>

<details>
<summary>Bind button's <code>click</code> event to method that sets default text to property</summary>

```
<button (click)="setDefaultText()">Set default text</button>
```
</details>

<details>
<summary>Add text field</summary>

```
<input type="text"/>
```
</details>

<details>
<summary>Import <code>FormsModule</code> to use banana-syntax for two-way binding</summary>

```diff
+ import {FormsModule} from '@angular/forms';

@NgModule({
  ...
  imports: [
    BrowserModule,
+   FormsModule
  ],
  ...
})
```
</details>

<details>
<summary>use <code>ngModel</code> directive with input for two-way binding</summary>

```
<input [(ngModel)]="text" type="text"></input>
```
</details>

</details>

---
</details>