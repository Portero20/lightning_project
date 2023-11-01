import Blits from '@lightningjs/blits'

import HelloWorld from './pages/Home.js'

export default Blits.Application({
  template: `
    <Element>
      <RouterView />
    </Element>
   `,
  routes: [{ path: '/', component: HelloWorld }],
})
