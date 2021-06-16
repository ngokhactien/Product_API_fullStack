import React from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản Lý Sản Phẩm',
        to: '/product-list',
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};

export default function Menu (){
    return (
        <div className="navbar navbar-default">
            <a href className="navbar-brand">Tien And Friend</a>
            <ul className="nav navbar-nav">
                {showMenus(menus)}
            </ul>
        </div>
    );
}

const showMenus = (menus) => {
    var result = null;
    if(menus.length > 0){
        result = menus.map((menu, index) => {
            return (
                <MenuLink 
                    key={index}
                    label={menu.name}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact}
                />
            );
        });
    }
    return result;
}
