import React from 'react'
import ReactDom from 'react-dom'

// import TrailingQueue from './rxjs-hooks/trailing-queue'
import Drag from './rxjs-hooks/drag'

function App() {
  return (
    <div>
      <Drag />
      {/* <TrailingQueue /> */}
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('app'))

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then(registration => {
//         console.log('SW 已注册: ', registration)
//       })
//       ['catch'](registrationError => {
//         console.log('SW 注册失败: ', registrationError)
//       })
//   })
// }
