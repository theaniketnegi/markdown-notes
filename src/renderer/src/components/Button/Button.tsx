import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const Button = ({
  children,
  className,
  ...props
}: ComponentProps<'button'>): React.ReactNode => {
  return (
    <button
      {...props}
      className={twMerge(
        'px-2 py-1 rounded-md border border-zinc-400/50 hover:bg-zinc-600/50 transition duration-100',
        className
      )}
    >
      {children}
    </button>
  )
}
