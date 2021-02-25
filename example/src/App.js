import React from 'react'

import DimenionsControl from 'wp-dimensions-control'
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

export default App
