import '../style/Header.css';
import { useNavigate,Link } from 'react-router-dom';
const Header = () => {
    //navigate handles the scripting part only
    const navigate = useNavigate();
    const onSignInClickHandler = (e) =>{
        e.preventDefault();
        navigate('/login');
    }
    return (
        <header className="topNav">
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container-fluid">
                    {/* link is used to be redirected to a particular page 
                    Link = it is used for a particular a tag*/}
                    <Link className='navbar-brand' to="/">
                        <img  className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt=""/>    
                    </Link>
                    <div className="navbar">
                        <form className="d-flex" role="search">
                            <select>
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                            <button className="btn btn-danger" onClick={onSignInClickHandler}>SignIn</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;