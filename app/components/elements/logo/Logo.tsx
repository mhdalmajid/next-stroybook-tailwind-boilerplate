import classNames from 'classnames'
import { FC } from 'react'

export interface LogoProp {
  /**
   * Define button behavior. Default: button
   */
  label?: string

  /**
   * Define Logo size. Default: normal
   */
  size?: 'normal' | 'small' | 'big'
  /**
   * Disable button interaction and display button in gray colors. Default: false
   */

  onClick?: () => void
}
/**
 * Simple Button encapsulating all design variations
 */
export const Button: FC<LogoProp> = ({ label, size = 'normal' }: LogoProp) => {
  return <div className="p-1 m-4">{label}</div>
}

export default LogoProp
