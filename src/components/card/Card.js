import "./Card.css";

const Card = (props) => {
    const paragraphStyle = {
        textTransform: "uppercase",
        color: props.color,
    };

    const titleStyle = {
        color: props.titleColor,
    };

    return (
        <div className="card">
            <h3 style={titleStyle}>{props.title}</h3>
            <p style={paragraphStyle}>{props.paragraph}</p>
        </div>
    );
};

Card.defaultProps = {
    title: "Título do componente",
    paragraph:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore est, praesentium ullam quod nisi provident magnam nemo cum",
    color: "red",
    titleColor: "blue",
};

export default Card;
