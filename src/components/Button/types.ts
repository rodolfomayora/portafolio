export type ButtonStyledProps = {
  fullWidth?: boolean,
  outline?: boolean,
  children: any,
}

export type ButtonProps =  ButtonStyledProps & { 
  as?: 'innerLink' | 'externalLink',
  className?: string,
  disabled?: boolean,
  href?: string,
  type?: "button" | "submit" | "reset",
  onClick?: () => void,
}