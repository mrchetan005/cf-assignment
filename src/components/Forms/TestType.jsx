import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "../FormUtils";
import { useState } from "react";
import { addTestTypes } from "../../store/slices/testSlice";

const Form1 = ({ onClose }) => {
    const { testTypes } = useSelector(state => state.test);
    const [errorData, setErrorData] = useState({ type: '' });
    const [typeData, setTypeData] = useState({ type: '' })

    const dispatch = useDispatch();

    const validateType = (value) => testTypes.some(({ type }) => type.toLowerCase() === value.toLowerCase())
        ? "This test type already exists" : "";

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTypeData(prev => ({
            ...prev,
            [name]: value
        }));

        setErrorData(prev => ({
            ...prev,
            [name]: validateType(value)
        }));
    };

    const disabled = !!Object.values(errorData).join("") || Object.values(typeData).some((data) => data === '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (disabled) return;
        dispatch(addTestTypes(typeData.type));
        setTypeData({ type: '' });
        onClose();
    };

    return (
        <div className="sm:rounded-xl w-full h-full sm:h-max sm:max-h-[calc(100vh-6rem)] sm:w-3/5 overflow-y-auto m-auto shadow bg-white">
            <h1 className="my-5 text-xl font-medium text-center">Create New Test Type</h1>
            <form onSubmit={handleSubmit} className="w-11/12 m-auto mb-8 sm:w-4/5">
                <Input
                    required
                    id="type"
                    name="type"
                    label="Test Type"
                    placeholder="Enter test type"
                    value={typeData?.type || ""}
                    errors={errorData}
                    onChange={handleInputChange}
                />
                <div className="flex gap-4">
                    <Button text="Cancel" type="button" onClick={onClose} className="!text-gray-600 bg-transparent !border-gray-500 " />
                    <Button text="Create" type="submit" disabled={disabled} />
                </div>
            </form>
        </div>
    )
}

export default Form1;