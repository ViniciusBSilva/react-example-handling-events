function Form() {

    function handleSubmit(e) {
        e.preventDefault();
        alert("You clicked send");
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Send</button>
        </form>
    );

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Form />
);