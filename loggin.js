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
 * 
 * Se ficar chamando “bind” incomoda você, há duas maneiras de contornar isso. 
 * Se você estiver usando a sintaxe experimental de campos de classe pública, 
 * você pode usar campos de classe para vincular callbacks corretamente
 */
class LogginButton1 extends React.Component {
    // Essa sintaxe garante que o `this` seja vinculado ao handleClick.
    // Atenção: essa é uma sintaxe *experimental*.
    handleClick = () => {
        console.log("this is:", this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Click here 1
            </button>
        );
    }

}

 /**
 * Essa sintaxe é habilitada por padrão no Create React App.
 * 
 * Se você não estiver usando a sintaxe de campos de classe, 
 * poderá usar uma arrow function como callback:
 * 
 * !!! O problema com esta sintaxe é que um callback diferente é criado toda vez que o 
 * LoggingButton é renderizado. Na maioria dos casos, tudo bem. No entanto, 
 * se esse callback for passado para componentes inferiores através de props, 
 * esses componentes poderão fazer uma renderização extra. 
 * 
 * Geralmente recomendamos a vinculação no construtor ou a sintaxe dos campos de 
 * classe para evitar esse tipo de problema de desempenho.
 */

class LogginButton2 extends React.Component {

    handleClick() {
        console.log("this is:", this);
    }

    render() {
        return (
            // Essa sintaxe garante que o `this` seja vinculado ao handleClick.            
            <button onClick={() => this.handleClick()}>
                Click here 2
            </button>
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <LogginButton1 />
        <LogginButton2 />
    </>
);