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
</details>
