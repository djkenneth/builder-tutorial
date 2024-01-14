import React from 'react'
import { twMerge } from 'tailwind-merge'
import { VariantProps, cva } from 'class-variance-authority';

const button = cva(['btn'], {
    variants: {
      variant: {
        solid: [''],
        outline: ['btn-outline'],
        ghost: ['btn-ghost'],
        link: ['btn-link']
      },
      colorScheme: {
          info: ['btn-info'],
          success: ['btn-success'],
          warning: ['btn-warning'],
          error: ['btn-error']
      },
      size: {
        lg: ['btn-lg'],
        default: [''],
        sm: ['btn-sm'],
        xs: ['btn-xs']
      },
      isSquare: {
        true: ['btn-square'],
        false: ['']
      },
      isCircle: {
        true: ['btn-circle'],
        false: ['']
      },
      isLoading: {
        true: ['btn-circle'],
        false: ['']
      }, 
      isDisabled: {
        true: ['btn-disabled'],
        false: ['']
      },
      isBlock: {
        true: ['btn-block'],
        false: ['']
      }
    },
    defaultVariants: {
    variant: "solid",
    size: "default"
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button: React.FC<ButtonProps> = ({
  className,
  colorScheme,
  variant,
  size,
  isSquare,
  isCircle,
  isBlock,
  isDisabled,
  ...props
}) => {
  return (
    <button className={twMerge(button({ variant, colorScheme, size, isDisabled, isCircle, isSquare, isBlock, className }))} {...props} />
  )
}

export default Button;
