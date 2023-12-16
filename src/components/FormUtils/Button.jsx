

const Button = ({ text = "", children, className = '', disabled = false, ...otherButtonProps }) => {
    return (
        <button disabled={disabled} className={`flex items-center justify-center p-1 min-w-[7rem] bg-[#1A8FE6] transition-all duration-300 shadow-md active:scale-[0.97] px-4 rounded uppercase text-white disabled:opacity-75 disabled:cursor-no-drop border border-transparent ${className}`} {...otherButtonProps}>
            {text || children}
        </button>
    )
}

export default Button;