import React from 'react'
import Box from './Compnent/Box'

const App = () => {
  return (
    <div>
      <Box heading={"hello"}
        count={1245}
        fun={(a: string) => { console.log(a) }}
      >
        {/* below elements  will be treated as child */}
        <p>hello worlds</p>
        <button>click me</button>
      </Box>
    </div>
  )
}

export default App