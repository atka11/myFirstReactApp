import panda from "../images/red-panda.jpg"

function ButtonNew() {
    return (
        <>
        <img src={panda} alt="" className="myPanda" />
        <button>Click me</button>
        </>
    );
}

export default ButtonNew;