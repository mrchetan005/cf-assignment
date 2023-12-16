import { useState } from "react";
import { Button, Input, Select } from "../FormUtils";
import Form1 from "./TestType";
import Portal from "../Portal";
import { validateFormData } from "../../../utilityFunctions";
import { useDispatch, useSelector } from "react-redux";
import { addData, updateData } from "../../store/slices/testSlice";
import { useNavigate } from "react-router-dom";

const initialData = {
    name: "", type: "", email: "", mobileNo: "", alternateNo: ""
}

const TestForm = ({ id, onClose }) => {
    const { testTypes, data } = useSelector(state => state.test);
    const [errorData, setErrorData] = useState(initialData);

    console.log(id);

    const initialState = id ? { ...data.find(item => item.id === id) } : initialData;
    const [testData, setTestData] = useState(initialState);

    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTestData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleInputBlur = (e) => {
        const { name, value } = e.target;
        setErrorData(prev => ({
            ...prev,
            [name]: validateFormData(name, value)
        }))
    }
    const disabled = !!Object.values(errorData).join("") || Object.values(testData).some((data) => data === '');

    console.log(disabled);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (disabled) return;
        console.log(testData);

        if (id) {
            dispatch(updateData(testData));
            onClose();
        } else {
            dispatch(addData(testData));
        }
        navigate('/data-table');
    };

    const openForm = () => {
        setShowModal(true);
    }

    const closeForm = () => {
        setShowModal(false);
    }

    return (
        <div className="w-11/12 m-auto bg-white sm:rounded-xl sm:w-4/5">
            <h1 className="py-5 text-xl font-medium text-center">{id ? 'Edit' : 'Create'} Test</h1>

            <form onSubmit={handleSubmit} className="w-11/12 px-4 m-auto mb-10 sm:w-4/5">
                <Input
                    required
                    id="name"
                    name="name"
                    label="Test Name"
                    placeholder="Enter Test Name"
                    value={testData?.name}
                    errors={errorData}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                />

                <Select
                    required
                    id="type"
                    name="type"
                    label="Test Type"
                    defaultValue="Select Test Type"
                    value={testData?.type || ""}
                    errors={errorData}
                    options={testTypes.map(({ type }) => type)}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                />

                <div className="flex items-center justify-end">
                    <p onClick={openForm} className="inline-block px-4 pb-4 text-sm text-right underline capitalize cursor-pointer">Create new test type</p>
                </div>

                <Input
                    required
                    id="email"
                    name="email"
                    label="Email: "
                    placeholder="example@email.com"
                    value={testData?.email || ""}
                    errors={errorData}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                />

                <Input
                    required
                    id="mobileNo"
                    name="mobileNo"
                    label="Tester Mobile Number"
                    placeholder="Enter 10 digit mobile number"
                    value={testData?.mobileNo}
                    errors={errorData}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                />
                <Input
                    required
                    id="alternateNo"
                    name="alternateNo"
                    label="Tester Alternate Mobile Number"
                    placeholder="Enter 10 digit mobile number"
                    value={testData?.alternateNo}
                    errors={errorData}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                />

                <Button text={id ? "Update" : "Create"} type="submit" disabled={disabled} className="m-auto" />
            </form>
            {
                showModal &&
                <Portal onClose={closeForm}>
                    <Form1 onClose={closeForm} type={testData.type} name={testData.name} />
                </Portal>
            }
        </div>

    );
};

export default TestForm;
