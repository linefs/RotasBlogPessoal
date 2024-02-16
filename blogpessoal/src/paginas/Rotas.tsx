function Rotas {
    function handleClick(){ 
        navigate('/outr-rota')
    }
    return (
        <div>
        <button onClick={handleClick}>Navegar</button>
        </div>
        <div>
        <Link to="/outra-rota"</button>
        </div>
    )
}
export default Rotas;