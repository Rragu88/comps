import { GoChevronUp, GoChevronDown } from "react-icons/go";
import Table from "./Table.jsx";
import useSort from "../hooks/use-sort.jsx";

function SortTable(props) {
    const { config, data } = props;

    const { sortOrder, sortBy, sortedData, handleSortClick } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => (
                <th className='hover:bg-gray-100' onClick={() => handleSortClick(column.label)} role='button'>
                    <div className='flex items-center'>
                        {getIcons(column.label, sortOrder, sortBy)}
                        {column.label}
                    </div>
                </th>
            ),
        };
    });

    return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortOrder, sortBy) {
    if (label !== sortBy) {
        return (
            <div>
                <GoChevronUp />
                <GoChevronDown />
            </div>
        );
    }

    if (sortOrder === null) {
        return (
            <div>
                <GoChevronUp />
                <GoChevronDown />
            </div>
        );
    } else if (sortOrder === 'asc') {
        return (
            <div>
                <GoChevronUp />
            </div>
        );
    } else if (sortOrder === 'desc') {
        return (
            <div>
                <GoChevronDown />
            </div>
        );
    }

    return null;
}
export default SortTable;