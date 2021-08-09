export type ButtonStyledProps = {
  outline?: boolean,
  fullWidth?: boolean,
}

export type ButtonProps =  ButtonStyledProps & { 
  href: string,
}