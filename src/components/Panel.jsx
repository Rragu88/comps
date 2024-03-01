import classNames from 'classnames';

function Panel({ children, className, ...props }) {
    const finalClassName = classNames('border rounded p-3 shadow bg-white w-full', className);

    return (
        <div {...props} className={finalClassName}>
            {children}
        </div>
    );
}

export default Panel;