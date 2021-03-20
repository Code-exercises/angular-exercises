# Bind events

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