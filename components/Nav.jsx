import React, { useRef } from "react";
import style from "../styles/Nav.module.css";

const Nav = () => {
	const header = useRef();

	const applyActiveClassName = () => {
		header.current.classList.toggle(`${style.active}`);
	};

	return (
		<>
			<header className={style.header} ref={header}>
				<div className={style.container}>
					<nav className={style.nav}>
						<ul className={`${style.navList} ${style.navListMobile}`}>
							<li className={style.navItem}>
								<div
									className={style.mobileMenu}
									onClick={applyActiveClassName}
								>
									<span className={`${style.line} ${style.lineTop}`}></span>
									<span className={`${style.line} ${style.lineBottom}`}></span>
								</div>
							</li>
							<li className={style.navItem}>
								<a
									href="#"
									className={`${style.navLink} ${style.navLinkLogo}`}
								></a>
							</li>
							<li className={style.navItem}>
								<a
									href="#"
									className={`${style.navLink} ${style.navLinkBag}`}
								></a>
							</li>
						</ul>
						<ul className={`${style.navList} ${style.navListLarger}`}>
							<li className={`${style.navItem} ${style.navItemHidden}`}>
								<a
									href="#"
									className={`${style.navLink} ${style.navLinkLogo}`}
								></a>
							</li>
							<li className={style.navItem}>
								<a href="#" className={style.navLink}>
									Boutiques
								</a>
							</li>
							<li className={style.navItem}>
								<a href="#" className={style.navLink}>
									Catégories
								</a>
							</li>
							<li className={style.navItem}>
								<a href="#" className={style.navLink}>
									Meilleures ventes
								</a>
							</li>
							<li className={style.navItem}>
								<a href="#" className={style.navLink}>
									High Tech
								</a>
							</li>
							{/* <li className={style.navItem}>
								<a href="#" className={style.navLink}>
									Support
								</a>
							</li> */}
							<li className={style.navItem}>
								<a
									href="#"
									className={`${style.navLink} ${style.navLinkSearch}`}
								></a>
							</li>
							<li className={style.navItem}>
								<a
									href="#"
									className={`${style.navLink} ${style.navLinkBag}`}
								></a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Nav;
