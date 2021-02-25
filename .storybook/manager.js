
import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'
import flankBg from './flankBg'

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: flankBg,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  showRoots: false
})
