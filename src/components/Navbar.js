import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';


export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="navbar-brand">
				Личный план
			</div>

			<ul className="navbar-nav">
				<li className="nav-item">
					<NavLink
						className="nav-link"
						to='/'
						exact
					>
						Главная
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						className="nav-link"
						to='/about'
					>
						Информация
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}