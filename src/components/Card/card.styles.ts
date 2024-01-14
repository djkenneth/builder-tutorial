import { cva } from 'class-variance-authority';

export const cardContainerStyles = cva(['block w-72 p-6 border border-gray-200 rounded-lg shadow'], {
    variants: {
        bgColor: {
            white: ['bg-white'],
            red: ['bg-red-500']
        }
    }
}); 