const app = document.getElementById("app")

function Header({title}){
    const textH1 = "Título por Defecto (default title)"
    return <h1>{title ? title : textH1}</h1>
}

function HomePage(){
    const arrayList = ["HTML","CSS","JavaScript"]

    const [likes, setLikes] = React.useState(0)

    function handledClick(){
        return setLikes(likes + 1)
    }

    return (
        <div>
            <Header title="Desarrollo Web Básico"/>
            <ul>
                {arrayList.map((arrayList) => (
                    <li key={arrayList}>{arrayList}</li>                
                ))}
            </ul>
            <button onClick = {handledClick}>Me gusta ({likes})</button>
        </div>
    )
}

ReactDOM.render(<HomePage />, app)















/*
function Header({title}){
    return <h1>{title ? title : "Default Title"}</h1>
}



ReactDOM.render(<Header title = "prueba" />,app)
*/