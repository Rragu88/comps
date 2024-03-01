import {useState} from "react";
import Dropdown from "../components/Dropdown.jsx";

function DropdownPage() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    }

    const options = [
        { value: 'red', label: 'Red' },
        { value: 'green', label: 'Green' },
        { value: 'blue', label: 'Blue' }
    ]

    return (
        <div>
            <Dropdown options={options} value={selection} onChange={handleSelect} />
        </div>
    );
}

export default DropdownPage;
