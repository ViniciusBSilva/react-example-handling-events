function ToggleButton(props) {
    return (
        <button
            onClick={props.onClick}
        >
            {props.isToggleOn ? "ON" : "OFF"}
        </button>
    );
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
        /**
         * Você precisa ter cuidado com o significado do this nos callbacks do JSX. 
         * Em JavaScript, os métodos de classe não são vinculados por padrão. 
         * Se você esquecer de fazer o bind de this.handleClick e passá-lo para um onClick, 
         * o this será undefined quando a função for realmente chamada.
         * 
         * Este não é um comportamento específico do React. 
         * É uma parte de como funcionam as funções em JavaScript. 
         * Geralmente, se você referir a um método sem () depois dele, 
         * como onClick={this.handleClick}, você deve fazer o bind manual deste método.
         */
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        console.log("this: ", this);
    }

    render() {
        return (
            <ToggleButton
                onClick={this.handleClick}
                isToggleOn={this.state.isToggleOn}
            />
        );
    }

    // render() {
    //     return (
    //         <button onClick={this.handleClick}>
    //             {this.state.isToggleOn ? "ON" : "OFF"}
    //         </button>
    //     );
    // }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Toggle />
)