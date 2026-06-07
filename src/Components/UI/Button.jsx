import clsx from "clsx";

const Button = ({
    label = '',
    variant = 'accent',
    size = 'small',
    corner = "small",
    action = () => { },
    loading = false,
    className = '',
    type = 'button',
    disabled = false,
    icon = null,
}) => {

    const variantsClasses = {
        primary: `border-[1.5px] border-primary bg-primary text-secondary`,
        secondary: `border-[1.5px] border-secondary bg-secondary text-primary`,
        accent: `border-[1.5px] border-accent bg-accent text-white font-bold`,
        danger: `border-[1.5px] border-red-600 bg-red-600 text-white`,
        white: `border-[1.5px] border-white bg-white text-red-600`,
        warn: `border-[1.5px] border-yellow-600 bg-yellow-600 text-white`,
        disable: `border-[1.5px] border-border/10 bg-border/70 text-secondary/40 !cursor-not-allowed hover:opacity-100 select-none`,
        outline: `border-[1.5px] border-border bg-primary  !text-secondary/70 hover:border-secondary/30 `,
        text: `text-secondary/70`,
        transparent: `bg-transparent border-[1.5px] border-transparent `
    }

    const sizeClasses = {
        large: `py-2 px-6 text-lg font-semibold`,
        medium: `!min-h-10 px-6 text-[16px]/[16px] font-semibold`,
        small: `!h-8 px-4 w-max text-sm font-medium`,
    }

    const cornerClasses = {
        none: `rounded-none`,
        small: `rounded-md`,
        medium: `rounded-lg`,
        full: `rounded-full`
    }


    return (
        <button
            type={type}
            onClick={action}
            disabled={loading || disabled}
            className={clsx(
                "fontDmmono relative cursor-pointer hover:opacity-85 box-border transition-all  ",
                disabled ? variantsClasses?.disable : variantsClasses?.[variant],
                sizeClasses?.[size],
                cornerClasses?.[corner],
                className
            )}
        >
            <div className={clsx(loading ? "invisible" : "visible", "flex items-center justify-center gap-2")}>
                {icon && (
                    icon
                )}
                {label && (
                    <span className={clsx(loading ? "invisible" : "visible", "text-nowrap")}>
                        {label}
                    </span>
                )}
            </div>

            {loading && (
                <span className="absolute inset-0 flex items-center justify-center">
                    {'loafon'}
                </span>
            )}
        </button>
    )
}

export default Button