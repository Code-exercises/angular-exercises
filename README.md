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
<summary>Bind button's `click` event to method that changes property value</summary>

```
<button (click)="changeText()">Change text</button>
```
</details>

</details>

---
</details>

<!--- -->