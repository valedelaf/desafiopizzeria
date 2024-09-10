const Header = ({title, imagen, subtitulo}) => {
    return (
    <>
    <h1 style={{position: 'absolute', marginTop: '5%', marginLeft:'30%', color:'white'}}> {title} </h1>
    <h3 style={{position: 'absolute', marginTop: '15%', marginLeft:'30%', color:'white'}}>{subtitulo}</h3>
    <img className="header" src= {imagen}/>
    </>
    )
    }
    export default Header;