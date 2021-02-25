# wp-dimensions-control

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/wp-dimensions-control.svg)](https://www.npmjs.com/package/wp-dimensions-control) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save wp-dimensions-control
```

## Usage
Works only as a WordPress gutenberg block controller

```jsx
import React, { Component } from 'react'

import DimensionsControl from 'wp-dimensions-control'
import 'wp-dimensions-control/dist/index.css'

const App = () => {
  return (
    <DimenionsControl
      onChange={({ top, right, bottom, left }) =>
        console.log(top, right, bottom, left)
      }
    />
  )
}
```

## License

MIT © [tasnimAlam](https://github.com/tasnimAlam)
