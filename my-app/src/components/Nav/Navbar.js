import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavItem,
	NavItemBtn,
	NavLinks,
	NavBtnLink,
} from './NavbarElements'

function Navbar() {
	const [click, setClick] = useState(false)
	const [button, setButton] = useState(true)

	const handleClick = () => setClick(!click)
	const closeMobileMenu = () => setClick(false)

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false)
		} else {
			setButton(true)
		}
	}

	useEffect(() => {
		showButton()
	}, [])

	window.addEventListener('resize', showButton)
	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav>
					<NavbarContainer>
						<NavLogo to="/" onClick={closeMobileMenu}>
							<NavIcon />
							Sauti.
						</NavLogo>
						<MobileIcon onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</MobileIcon>
						<NavMenu onClick={handleClick} click={click}>
							<NavItem>
								<NavLinks to="/" onClick={closeMobileMenu}>
									Home
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/dashboard" onClick={closeMobileMenu}>
									Dashboard
								</NavLinks>
							</NavItem>

							<NavItemBtn>
								{button ? (
									<NavBtnLink to="/login">
										<Button primary>Login</Button>
									</NavBtnLink>
								) : (
									<NavBtnLink to="/login">
										<Button onClick={closeMobileMenu} fontBig primary>
											Login
										</Button>
									</NavBtnLink>
								)}
							</NavItemBtn>

							<NavItemBtn>
								{button ? (
									<NavBtnLink to="/signup">
										<Button primary>Sign Up</Button>
									</NavBtnLink>
								) : (
									<NavBtnLink to="/signup">
										<Button onClick={closeMobileMenu} fontBig primary>
											Sign Up
										</Button>
									</NavBtnLink>
								)}
							</NavItemBtn>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	)
}

export default Navbar
