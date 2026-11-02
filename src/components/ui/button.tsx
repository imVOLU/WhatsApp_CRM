import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 items-center justify-center rounded-xl border text-sm font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:ring-3 focus-visible:ring-sky-400/50 active:translate-y-0.5 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 overflow-hidden cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600 text-white border-white/50 shadow-[inset_0_1.5px_2px_0_rgba(255,255,255,0.85),inset_0_-2px_3px_0_rgba(0,0,0,0.15),0_6px_20px_-2px_rgba(37,99,235,0.4)] backdrop-blur-md hover:from-sky-300 hover:via-blue-500 hover:to-blue-700 hover:shadow-[inset_0_2px_2px_0_rgba(255,255,255,1),0_8px_26px_-2px_rgba(37,99,235,0.55)] hover:-translate-y-0.5",
        outline:
          "bg-gradient-to-b from-white/90 to-sky-50/60 text-slate-800 border-white/90 shadow-[inset_0_1.5px_2px_0_rgba(255,255,255,1),inset_0_-1.5px_2px_0_rgba(14,116,144,0.06),0_4px_16px_-2px_rgba(31,38,135,0.08)] backdrop-blur-md hover:from-white hover:to-sky-100/70 hover:border-white hover:shadow-[inset_0_2px_2px_0_rgba(255,255,255,1),0_6px_22px_-2px_rgba(14,116,144,0.16)] hover:-translate-y-0.5 dark:from-slate-800/80 dark:to-slate-900/60 dark:text-slate-100 dark:border-white/15 dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),0_4px_16px_rgba(0,0,0,0.3)]",
        secondary:
          "bg-gradient-to-b from-white/80 to-blue-50/50 text-slate-800 border-white/80 shadow-[inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),0_4px_14px_rgba(14,116,144,0.07)] backdrop-blur-md hover:from-white/95 hover:to-blue-100/60 hover:-translate-y-0.5 dark:from-slate-800/70 dark:to-slate-900/50 dark:text-slate-100 dark:border-white/15",
        ghost:
          "text-slate-700 hover:bg-white/70 hover:text-slate-900 hover:backdrop-blur-md hover:border-white/70 hover:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.9),0_2px_8px_rgba(31,38,135,0.06)] border border-transparent dark:text-slate-200 dark:hover:bg-slate-800/60 dark:hover:border-white/10",
        destructive:
          "bg-gradient-to-b from-rose-400 via-rose-500 to-red-600 text-white border-white/40 shadow-[inset_0_1.5px_2px_0_rgba(255,255,255,0.8),inset_0_-2px_3px_0_rgba(0,0,0,0.15),0_6px_20px_-2px_rgba(225,29,72,0.4)] backdrop-blur-md hover:from-rose-300 hover:to-red-700 hover:shadow-[inset_0_2px_2px_0_rgba(255,255,255,1),0_8px_26px_-2px_rgba(225,29,72,0.55)] hover:-translate-y-0.5",
        link: "text-primary underline-offset-4 hover:underline border-transparent shadow-none",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-variant={variant ?? "default"}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
