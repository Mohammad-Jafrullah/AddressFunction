import React, { useEffect, useState, useContext } from 'react';
import './BottomBar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function BottomBar() {
    const [border, setBorder] = useState({});
    const [border1, setBorder1] = useState({});
    const [border2, setBorder2] = useState({});
    const [border3, setBorder3] = useState({});
    const location = useLocation();

    // ************************************************

    useEffect(() => {
        switch (location.pathname) {
            case "/": setBorder({ boxShadow: '1px 3px 5px #282c34' }); setBorder1({}); setBorder2({}); setBorder3({}); break;
            case "/home": setBorder({ boxShadow: '1px 3px 5px #282c34' }); setBorder1({}); setBorder2({}); setBorder3({}); break;
            case "/history": setBorder1({ boxShadow: '1px 3px 5px #282c34' }); setBorder({}); setBorder2({}); setBorder3({}); break;
            case "/fav": setBorder2({ boxShadow: '1px 3px 5px #282c34' }); setBorder1({}); setBorder({}); setBorder3({}); break;
            case "/setting": setBorder3({ boxShadow: '1px 3px 5px #282c34' }); setBorder1({}); setBorder2({}); setBorder({}); break;
        }
    },[location.pathname]);

    return (
        <>
            <ul className='bottom-bar'>
                <li style={border}><i className="fa-solid fa-house-user"></i><Link to='/home' >Home</Link></li>
                <li style={border1}><i className="fa-solid fa-clock-rotate-left"></i><Link to="/history">History</Link></li>
                <li style={border2}><i className="fa-solid fa-bookmark"></i><Link to="/fav">Favourite</Link></li>
                <li style={border3}><i className="fa-solid fa-gear"></i><Link to="/setting">Setting</Link></li>
            </ul>
        </>
    )
}
