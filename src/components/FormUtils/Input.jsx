
const Input = (props) => {
    const { label, id, name, errors, className, icon, required = false, type = "text", ...otherInputProps } = props;

    return (
        <div className="flex flex-col pb-4">
            <label htmlFor={id} className="mb-1">
                {label}{required && <span className="text-red-500">{" * "}</span>}
            </label>
            <div className={`border relative rounded ${errors[name] ? 'border-red-500 shadow-sm shadow-red-100' : 'border-[#888888]'}`}>
                {icon && icon}
                <input
                    id={id} name={name} required={required} type={type}
                    className={`rounded w-full outline-none p-2 ${className}`}
                    {...otherInputProps}
                />
            </div>
            {
                errors[name] && <p className="pl-1 mt-1 text-sm text-red-500">{errors[name]}</p>
            }
        </div>
    )
}

export default Input;