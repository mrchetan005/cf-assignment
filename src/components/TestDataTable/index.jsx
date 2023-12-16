import { useSelector } from "react-redux";
import TableRow from "./TableRow";
import { useLocation } from "react-router-dom";

const options = {
    'types-table': ['ID', 'Types'],
    'data-table': ['ID', 'Test Name', 'Test Type', 'Tester Email', 'Tester Mobile Number', 'Alternative Mobile Number', 'Creation Date', 'Updation Date', 'Actions'],
};


const TestDataTable = () => {
    const { data, testTypes } = useSelector(state => state.test);
    const { pathname } = useLocation();

    const option = pathname.split('/')[1];

    return (
        <div className="w-full">
            <h1 className="py-5 text-xl font-medium text-center">{option?.split('-').join(' ').toUpperCase()}</h1>

            <div className="w-full overflow-x-auto rounded-md">
                <table className={`w-full`}>
                    <thead className="text-center">
                        <tr className="text-gray-200 bg-gray-800 border">
                            {
                                options[option]?.map((name, i) => (
                                    <th key={i} className="p-2 truncate border max-w-14" title={name}>{name}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody className="border">
                        {(option?.includes('types') ? testTypes : data)?.map((data) => (
                            <TableRow key={data?.id} data={data} isTestTable={option.includes('types')} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TestDataTable;
