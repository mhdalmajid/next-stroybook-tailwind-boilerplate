import classNames from 'classnames'
import { FC } from 'react'
import styles from './Button.module.scss'

export interface ButtonProps {
  /**
   * Define button behavior. Default: button
   */
  type?: 'button' | 'submit' | 'reset'

  /**
   * Define button size. Default: normal
   */
  size?: 'normal' | 'small' | 'big'
  /**
   * Disable button interaction and display button in gray colors. Default: false
   */
  disabled?: boolean

  /**
   * Button with loading indicator and disabled. Default: false
   */
  loading?: boolean
  /**
   * Button with loading indicator and disabled. Default: false
   */
  label: any
  /**
   * Register callback for click event
   */
  onClick?: () => void
}

const renderSpinner = () => (
  <div className={styles.spinner}>
    <div />
    <div />
  </div>
)

/**
 * Simple Button encapsulating all design variations
 */
export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  loading,
  type = 'button',
  size = 'normal',
}: ButtonProps) => {
  const classes = classNames(styles.button, styles[size], {
    [styles.loading]: loading,
  })
  const content = loading ? renderSpinner() : label

  return (
    <button className={classes} type={type} onClick={onClick} disabled={disabled || loading}>
      {content}
    </button>
  )
}

export default Button
