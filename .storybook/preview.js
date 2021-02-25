import React from 'react'
import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Layout from './Layout'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import  '../app/styles/globals.scss'


// TODO: set viewports
const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px'
    }
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px'
    }
  }
}

export const decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
]


// addDecorator(
//   withInfo({
//     inline: true,
//     propTables:false
//     // propTablesExclude: [Layout]
//   })
// )

// export const globalTypes = {
//   theme: {
//     name: 'Theme',
//     description: 'Global theme for components',
//     defaultValue: 'light',
//     toolbar: {
//       icon: 'circlehollow',
//       items: ['light', 'dark']
//     }
//   }
// }

export const parameters = {
//   layout: 'centered',

  actions: { argTypesRegex: '^on[A-Z].*' },
  // Story sorting
  options: {
    // storySort: (a, b) =>
    //   a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports
    },
    defaultViewport: 'iphonex'
  },
  // Storybook a11y addon configuration
  a11y: {
    // the target DOM element
    // element: '#root',
    // sets the execution mode for the addon
    // manual: false
  }
  //   backgrounds: {
  //     default: 'twitter',
  //     values: [
  //       {
  //         name: 'twitter',
  //         value: '#00aced'
  //       },
  //       {
  //         name: 'facebook',
  //         value: '#3b5998'
  //       }
  //     ],
  //     grid: {
  //       cellSize: 20,
  //       opacity: 0.5,
  //       cellAmount: 5,
  //       offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
  //       offsetY: 16 // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
  //     }
  //   }
}
