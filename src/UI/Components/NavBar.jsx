import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-white bg-white shadow-sm  bg-body-tertiary rounded"  >


            <div className="navbar-collapse d-flex justify-content-between mx-5">
                <div className="box-width navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                        to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                        to="/docs"
                    >
                        Docs
                    </NavLink>

                </div>

                <Link
                    to="/"
                >
                    <img className='non' style={{ 'height': '60px' }} src="https://res.cloudinary.com/iluiss/image/upload/v1693087901/Heroes/osnhrbarsjsymztpajie.png" alt="" />
                </Link>

                <div className="box-width">
                    <ul className="navbar-nav ">

                        <span style={{ color: '#ED1D24' }} className='nav-item nav-link '> {user?.name}</span>
                        <button className='nav-item nav-link ' onClick={onLogout}> Logout</button>
                    </ul>
                </div>
            </div>


        </nav >
    )
}