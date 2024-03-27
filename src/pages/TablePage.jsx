// import Table from '../components/Table';
import SortTable from "../components/SortTable.jsx";

function TablePage() {
    const keyFn = (item) => item.name;

    const data = [
        {
            name: 'Orange', color: 'bg-orange-500', score: 5,
        },
        {
            name: 'Apple', color: 'bg-red-500', score: 3,
        },
        {
            name: 'Banana', color: 'bg-yellow-500', score: 1,
        },
        {
            name: 'Lime', color: 'bg-green-500', score: 4,
        },
    ];

    const config = [
        {
            label: 'Name',
            render: (item) => item.name,
            sortValue: (item) => item.name,
        },
        {
            label: 'Color',
            render: (item) => <div className={`w-6 h-6 rounded-full ${item.color}`}></div>
        },
        {
            label: 'Score',
            render: (item) => item.score,
            sortValue: (item) => item.score,
        }
    ];

    return (
        <div>
            <SortTable data={data} config={config} keyFn={keyFn} />
        </div>
    );
}

export default TablePage;