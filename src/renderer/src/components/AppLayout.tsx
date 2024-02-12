import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({
  children,
  className,
  ...props
}: ComponentProps<'main'>): React.ReactNode => {
  return (
    <main {...props} className={twMerge('flex h-screen', className)}>
      {children}
    </main>
  )
}

export const Sidebar = ({
  children,
  className,
  ...props
}: ComponentProps<'aside'>): React.ReactNode => {
  return (
    <aside className={twMerge('w-[250px] h-[100vh+10px]', className)} {...props}>
      {children}
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref): React.ReactNode => {
    return (
      <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
        {children}
      </div>
    )
  }
)
Content.displayName = 'Content'
