
const Select = (props) => {
    const { label, id, name, errors, className = "", required = false, defaultValue = "", options = [], ...otherInputProps } = props;

    return (
        <div className="flex flex-col pb-4">
            <label htmlFor={id} className="mb-1">
                {label}{required && <span className="text-red-500">{" * "}</span>}
            </label>

            <div className={`border relative rounded ${errors[name] ? 'border-red-500 shadow-sm shadow-red-100' : 'border-[#888888]'}`}>
                <select id={id} name={name}
                    className={`border outline-none w-full truncate rounded p-2 relative ${className}`}
                    {...otherInputProps}>
                    <option value="" className="p-4">{defaultValue}</option>
                    {
                        options?.map((value, i) => (
                            <option key={i} value={value} className="truncate">
                                {value}
                            </option>
                        ))
                    }
                </select>
            </div>

            {errors[name] && <p className="pl-1 mt-1 text-sm text-red-500">{errors[name]}</p>}
        </div>
    )
}

export default Select;