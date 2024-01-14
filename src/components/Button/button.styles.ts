import { cva } from 'class-variance-authority';

export const buttonStyles = cva(['btn'], {
    variants: {
        variant: {
            info: ['btn-info'],
            success: ['btn-success'],
            warning: ['btn-warning'],
            error: ['btn-error']
        }
    }
})