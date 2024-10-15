import "../button/Button.css";

const Button = (props) => {
    const clicked = (label) => {
        alert(`A label desse botão é: '${props.label}'`);
    };
    return (
        <>
            <button className="btn" onClick={clicked}>
                {props.label}
            </button>
        </>
    );
};

Button.defaultProps = {
    label: "Keep fighting",
};

export default Button;
