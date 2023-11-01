import Blits from '@lightningjs/blits'

export default Blits.Component('HelloWorld', {
  template: `
  <Element>

    <Element w="200" h="200" x="20" y="100" pivot="{x: 0.5, y: 0.8}" rotation="69" color="red"/>

  </Element>
  `
})
