import { GoBell, GoCloud, GoDatabase } from 'react-icons/go';
import Button from "../components/Button.jsx";

function ButtonPage() {
    const handleClick = () => {};

    return (
        <>
            <div>
                <Button
                    primary
                    rounded
                    outline
                    className="mt-5 mb-5 ml-1.5"
                    onClick={handleClick}
                >
                    <GoBell />
                    Click Me!
                </Button>
            </div>
            <div>
                <Button success outline className="mb-5 ml-1.5">Buy Now!</Button>
            </div>
            <div>
                <Button secondary className="mb-5 ml-1.5">
                    <GoCloud />
                    Save
                </Button>
            </div>
            <div>
                <Button danger outline className="mb-5 ml-1.5">Close</Button>
            </div>
            <div>
                <Button warning rounded className="mb-5 ml-1.5">
                    <GoDatabase />
                    Next
                </Button>
            </div>
        </>
    )
}

export default ButtonPage
