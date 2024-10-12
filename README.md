# Koaku
A CSS parsing library written in TS that converts CSS to JSON and vise versa

## TODO
- [ ] `@import ""` Parsing
- [ ] `@import url("")` Parsing
- [ ] Support for:
```css
h1, h2 {
    color: black
}
```

## Usage
```ts
import { parse, generate } from '@scaratech/koaku'; // npm i @scaratech/koaku

const css = 
`h1 {
    color: red;
}

body {
    background-color: black;
}`;

// Convert CSS -> JSON
let cssJson = parse(css);

// Modify the CSS via JSON
cssJson.body['background-color'] = 'red';

// Covert JSON -> CSS
generate(cssJson);
```
