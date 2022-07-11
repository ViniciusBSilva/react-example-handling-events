/**
 * Dentro de uma estrutura de repetição, é comum querer passar um parâmetro extra 
 * para um manipulador de evento. Por exemplo, se id é o ID de identificação da linha, 
 * qualquer um dos dois a seguir funcionará:
 * 
 */

function Button1(props) {
    return (
        <button
            onClick={(e) => props.onClick(props.id, e)}
        >
            Delete Row
        </button>
    );
}

function ListItem1(props) {
    return (
        <li>
            Item #{props.id} <Button1
                id={props.id}
                onClick={props.btnOnClick}
            // caller={props.caller}
            />
        </li>
    );
}

class List1 extends React.Component {

    deleteRow(id, event) {
        console.log("deleteRow");
        console.log("Event: ", event);
        console.log("Delete row: ", id);
        console.log("this: ", this);
    }

    render() {

        const items = [1, 2];
        const listItems = [];

        items.forEach((item) => {
            listItems.push(
                <ListItem1
                    key={item}
                    id={item}
                    btnOnClick={this.deleteRow}
                // caller={this}
                />
            );
        });

        return (
            <ul>
                {listItems}
            </ul>
        );

    }

    // render() {

    //     return (
    //         <ul>
    //             <li key={"1"} id={"1"}>
    //                 Item 1 <button onClick={(e) => this.deleteRow('1', e)}>Delete Row</button>
    //             </li>
    //             <li key={"2"} id={"2"}>
    //                 Item 2 <button onClick={(e) => this.deleteRow('2', e)}>Delete Row</button>
    //             </li>
    //         </ul>
    //     );

    // }
}

function Button2(props) {
    return (
        <button
            onClick={props.onClick.bind(props.caller, props.id)}
        >
            Delete Row
        </button>
    );
}

function ListItem2(props) {
    return (
        <li>
            Item #{props.id} <Button2
                id={props.id}
                onClick={props.btnOnClick}
                caller={props.caller} />
        </li>
    );
}

class List2 extends React.Component {

    deleteRow2(id) {
        console.log("deleteRow2");
        console.log("this: ", this);
        console.log("Delete row: ", id);
    }

    render() {

        const items = [3, 4];
        const listItems = [];

        items.forEach((item) => {
            listItems.push(
                <ListItem2
                    key={item}
                    id={item}
                    btnOnClick={this.deleteRow2}
                    caller={this}
                />
            );
        });

        return (
            <ul>
                {listItems}
            </ul>
        );
    }

    // render() {
    //     return (
    //         <ul>
    //             <li key={"1"} id={"1"}>
    //                 Item 1 <button onClick={this.deleteRow2.bind(this, "1")}>Delete Row</button>
    //             </li>
    //             <li key={"2"} id={"2"}>
    //                 Item 2 <button onClick={this.deleteRow2.bind(this, "2")}>Delete Row</button>
    //             </li>
    //         </ul>
    //     );
    // }
}


/**
 * As duas linhas acima são equivalentes e usam arrow functions e 
 * Function.prototype.bind respectivamente.
 * 
 * Em ambos os casos, o argumento e representando o evento do React será 
 * passado como segundo argumento após o ID. Com uma arrow function, nós 
 * temos que passá-lo explicitamente. Mas com o bind outros argumentos 
 * adicionais serão automaticamente encaminhados.
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <List1 />
        <List2 />
    </>
)