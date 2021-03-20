# Add Bootstrap 4

**Task:** add Bootstrap 4 to project

**Project**: `add-bootstrap-4`

<details>
<summary>Solution</summary>

<details>
<summary>Install dependencies</summary>

```bash
npm i bootstrap@4.5.3 popper.js@1.16.1 jquery@3.5.1
```
</details>

<details>
<summary>Add Bootstrap styles</summary>

Add styles to `angular.json` using path `projects.app.architect.build.options.styles`
```diff
"styles": [
  "src/styles.scss",
+ "./node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```
</details>

<details>
<summary>Add JQuery and Bootstrap scripts</summary>

Add styles to `angular.json` using path `projects.app.architect.build.options.scripts`
```diff
"scripts": [
+ "./node_modules/jquery/dist/jquery.min.js",
+ "./node_modules/bootstrap/dist/js/bootstrap.min.js"
],
```
</details>

</details>