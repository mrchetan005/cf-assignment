import { useDispatch } from "react-redux";
import { Button } from "../FormUtils";
import { deleteData } from "../../store/slices/testSlice";
import { useState } from "react";
import Portal from "../Portal";
import TestForm from "../Forms";

const TableRow = ({ data, isTestTable }) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteData(data?.id));
    }

    const openForm = () => {
        setShowModal(true);
    }
    const closeForm = () => {
        setShowModal(false);
    }

    return (
        <tr key={data?.id} className={`${getRowColor(data?.type)} text-center border h-full`}>
            {
                isTestTable
                    ? <>
                        <td className="p-1 border">{data?.id}</td>
                        <td className="p-1 border">{data?.type}</td>
                    </> : <>
                        <td className="p-1 border">{data?.id}</td>
                        <td className="p-1 border">{data?.name}</td>
                        <td className="p-1 border">{data?.type}</td>
                        <td className="p-1 border">{data?.email}</td>
                        <td className="p-1 border">{data?.mobileNo}</td>
                        <td className="p-1 border">{data?.alternateNo}</td>
                        <td className="p-1 border">{new Date(data?.createdAt)?.toLocaleString()}</td>
                        <td className="p-1 border">{new Date(data?.updatedAt)?.toLocaleString()}</td>
                        <td className="flex items-center h-full gap-1 p-1 justify-evenly">
                            <Button className="bg-gray-700 border-gray-700 hover:bg-black hover:text-white hover:border-black" onClick={openForm}>Edit</Button>
                            <Button className="!text-red-500 bg-red-50 !border-red-50 hover:bg-red-500 hover:!text-white hover:!border-red-500" onClick={handleDelete}>Delete</Button>
                        </td>
                    </>
            }

            {
                showModal &&
                <Portal onClose={closeForm}>
                    <TestForm id={data.id} onClose={closeForm} />
                </Portal>
            }
        </tr>
    )
}

export default TableRow;

const getRowColor = (testType) => {
    switch (testType) {
        case 'PHP':
            return 'bg-[#4E944F] text-white';
        case 'Node Js':
            return 'bg-[#F1C93B]';
        default:
            return 'bg-[#F79327]  text-white';
    }
};