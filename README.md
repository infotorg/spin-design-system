# Spin Design System

## Installation
`npm install infotorg/spin-design-system --save`

## Configuration

At the beginning of your main SCSS file follow the next steps:

### 1. Import design tokens
Design Tokens contains:
- Color Palette
- Font Sizes
- Font Weights
- Spacing
```scss
//-------
// Design Tokens from the "SPIN Design System"
//-------
@import 'path/to/node_modules/spin-design-system/dist/assets/tokens/tokens';
```

### 2. Override Bootstrap variables 
```scss
//-------
// Custom Bootstrap variables overrides go first.
// Setting them up from the "SPIN Design System" tokens
//-------
@import 'path/to/node_modules/spin-design-system/dist/assets/styles/bootstrap';
```

### 3. Import Bootstrap SCSS files
```scss
//-------
// Bootstrap and its default variables
//-------
@import 'path/to/node_modules/bootstrap/scss/bootstrap';
```

### 4. Import Basic styles from the Design System 
```scss
//-------
// Styles from the "SPIN Design System"
//-------
@import 'path/to/node_modules/spin-design-system/dist/assets/styles/styles';
```

### 5. Apply your application styles
```scss
@import 'path/to/your/awesome/styles';
```

## Usage
After including all necessary files, you have access to tokens and styles. 
which are located in the `node_modules/spin-design-system/dist/assets/tokens/tokens.scss` and `node_modules/spin-design-system/dist/assets/styles/styles.scss` files.


Licensed under the MIT license.
