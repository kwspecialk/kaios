// src/components/ui/dropdown-menu.tsx
import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={`
        z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-foreground shadow-md
        data-[state=open]:animate-in data-[state=closed]:animate-out 
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
        data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
        data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 
        data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2
        ${className}
      `}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={`
      relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none
      transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent
      data-[disabled]:pointer-events-none data-[disabled]:opacity-50
      ${className}
    `}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
}