import { Fragment} from "react";

function Table({ data, config, keyFn }) {
    const renderedHeaders = config.map((item) => {
        if (item.header) {
            return <Fragment key={item.label}>{item.header()}</Fragment>
        }

        return (
            <th key={item.label} className='p-3'>{item.label}</th>
        )
    });

    const renderedRows = data.map((item) => {
        const renderedCells = config.map((configItem) => {
            return (
                <td key={configItem.label} className='p-3'>{configItem.render(item)}</td>
            )
        });

        return (
            <tr key={keyFn(item)} className='border-b-2'>
                {renderedCells}
            </tr>
        )
    });

    return (
        <table className='table-auto border-spacing-2'>
            <thead>
                <tr className='border-b-2'>
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )

}

export default Table;