<!---
<details>
<summary>Summary</summary>

Details
---
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

<img src="./angular-logo.png" alt="angular-logo" width="120"/>

To create new exercise from exercise template execute `create-exercise.sh` script with exercise name as parameter:

```bash
./create-exercise.sh example-exarcise
```

Exercise template app was created using command:
```bash
npx ng new app --routing false --skip-tests true --style scss
```

## Exercises list

<details>
<summary>Generate Angular project</summary>

**Task**

Generate Angular project:
- without routing
- without component tests
- use SCSS for styling
- use `abc` prefix for components

**Project**: `generate-angular-project`

<details>
<summary>Solution</summary>

```bash
npx ng new app --routing false --skip-tests true --style scss --prefix abc
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

<details>
<summary>Add Bootstrap 4</summary>

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

---
</details>

<details>
<summary>Add routing</summary>

**Task:**
- add routing to project
- add a header with links `Home`, `About`
- when user clicks on `Home` link it should be redirected to `Home` page with `/` url
- when user clicks on `About` link it should be redirected to `About` page with `/about` url
- show list of products on the `Home` page
  - user should have sorting options: by price, by name
  - when user clicks on the product, product details should be shown on page with `/products/:id` url
  - on the page with product details should be `Products list` button;
    - when user clicks on `Products list` button it should be redirected to products list
- when users inputs wrong url `Not found` page should be shown

**Project**:
- `routing`
- note: `0-start` project was generated without routing:
  ```bash
  npx ng new app --routing false --skip-tests true --style scss
  ```

<details>
<summary>Solution</summary>

<details>
<summary>Add routes configuration to the project</summary>

<details>
<summary>Generate <code>AppRouting</code> module</summary>

```bash
ng g m app-routing --flat true
```
</details>

<details>
<summary>Configure routes in <code>AppRouting</code> module</summary>

```diff
import { NgModule } from '@angular/core';
- import { CommonModule } from '@angular/common';
+ import { Routes, RouterModule } from '@angular/router';
+ const routes: Routes = [];
@NgModule({
- declarations: [],
- imports: [CommonModule]
+ imports: [RouterModule.forRoot(routes)],
+ exports: [RouterModule]
})
export class AppRoutingModule { }
```
</details>

<details>
<summary>Import <code>AppRouting</code> module to <code>App</code> module</summary>


</details>
</details>

<details>
<summary>Create service for persisting products</summary>

```bash
ng g s product
```

```typescript
import {Injectable} from '@angular/core';

class Product {
  id: number
  title: string
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {id: 1, title: 'car', price: 100},
    {id: 2, title: 'door', price: 10}
  ]

  getAllProducts(): Product[] {
    return [...this.products]
  }

  getProductById(id: number): Product {
    return this.products.find(product => product.id === id)
  }
}
```

</details>

<details>
<summary>Add top level components</summary>

```bash
ng g c home
ng g c about
ng g c product-list
ng g c prosuct-details
```

</details>

<details>
<summary>Add routes to <code>AppRouting</code> module</summary>

**Don't use slashes in `path`**
```typescript
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
]
```
</details>

<details>
<summary>Add router outlet to <code>App</code> component</summary>

```http
<router-outlet></router-outler>
```
</details>

<details>
<summary>Add links to components to <code>App</code> page</summary>

- use slashes
- you can omit `href` attribute
```html
<ul>
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="/about">About</a></li>
</ul>
```
</details>

<details>
<summary>Add child routes</summary>

```javascript
{
  path: '',
  component: HomeComponent,
  children: [
    {path: '', component: ProductListComponent},
    {path: 'products/:id', component: ProductDetailComponent},
  ]
}
```
</details>


<details>
<summary>List products on the <code>ProductList</code> component</summary>

<details>
<summary>Inject <code>ProductService</code> into <code>ProductList</code> component</summary>

```typescript
constructor(public productService: ProductService) { }
```
</details>

<details>
<summary>Use <code>ProductService</code> to list products</summary>

```html
<ul>
  <li *ngFor="let product of productService.getAllProducts()">
    <a [routerLink]="['/product', product.id]">{{product.title}}</a>
  </li>
</ul>
```
</details>

<details>
<summary>Add products sorting</summary>

- add link with query parameter:
  ```html
  <a routerLink="/" [queryParams]="{sorting: 'price'}">by price</a>
  ```
- subscribe to `ActivatedRoute.quaryParams`.
</details>

</details>

<details>
<summary>Show product details</summary>

Use `ActivatedRoute` and `ProductService`

```typescript
constructor(
  public activatedRoute: ActivatedRoute,
  public productService: ProductService,
) { }
ngOnInit(): void {
  this.activatedRoute.params.subscribe(params => {
    this.product = this.productService.getProductById(Number.parseInt(params['id']))
  });
}
```

For `Go to Home` button:
- inject `Router`
- use `router.navigate([])` method
</details>

</details>

<details>
<summary>Add Not Found page</summary>

- add route with `**` path
</details>

---
</details>
