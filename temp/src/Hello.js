
function Hello(props) {
    console.log(props);
    return <div>안녕하세요. {props.data}</div>;
}

export default Hello;