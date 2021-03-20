# Two-way binding

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