import { Story } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { Button, ButtonProps } from './Button'

export default {
  component: Button,
  title: 'Form/Button',
  decorators: [withKnobs],

  argTypes: {
    label: { control: 'text' },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
}

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Big = Template.bind({})
Big.args = {
  size: 'big',
  type: 'button',
  label: 'Primary',
}

export const Small = Template.bind({})
Small.args = {
  size: 'normal',
  type: 'button',
  label: 'Primary',
}

export const disabled = Template.bind({})
disabled.args = {
  size: 'normal',
  type: 'button',
  disabled: true,
  label: 'Primary',
}

export const loading = Template.bind({})
loading.args = {
  size: 'normal',
  type: 'button',
  loading: true,
}
// Knobs as dynamic variables.
export const asDynamicVariables = () => {
  const name = text('Name', 'James')
  const age = number('Age', 35)
  const content = `I am ${name} and I'm ${age} years old.`

  return <div>{content}</div>
}
