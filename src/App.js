import "./App.css";
import Button from "./components/button/Button";
import Card from "./components/card/Card";

function App() {
    return (
        <div>
            <Card
                title="Unlimited Blade Works"
                paragraph="I am the bone of my sword, steel is body and fire is my blood"
                color="#fff"
                titleColor="#800000"
            />
            <Button label="Emiya" />
        </div>
    );
}

export default App;
