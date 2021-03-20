# Generate Angular project

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