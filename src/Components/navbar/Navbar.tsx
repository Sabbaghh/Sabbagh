import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackDrop from '../Shared/BackDrops';
import Text, { types } from '../Shared/Text';
import { ids } from '@/pages';
import SocialMedia from '../SocialMedia';
let scrollPosition = 0;
function Navbar() {
	const [hideNavbar, setHideNavbar] = useState(false);
	const [changeColor, setChangeColor] = useState(false);
	const [open, setOpen] = useState(false);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setHideNavbar(position > scrollPosition && !hideNavbar);
		//some browsers have bouncing effect when scrolling
		if (position <= 100) {
			setHideNavbar(false);
		}
		setChangeColor(position > 20 && !changeColor);

		scrollPosition = position;
	};

	const onNavOpen = () => {
		setOpen(true);
	};
	const onNavClose = () => {
		setOpen(false);
		console.log('close');
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	const navItems = [
		{
			text: 'Profile',
			id: ids.profile,
		},
		{
			text: 'Resume',
			id: ids.resume,
		},
		{
			text: 'Work',
			id: ids.projects,
		},
		{
			text: 'Contact',
			id: ids.contact,
		},
	];
	return (
		<>
			<BackDrop onClose={onNavClose} open={open}>
				<MenuContainer>
					<MenuHeader flex={1}>
						<Text
							text='>'
							type={types.primaryRegular}
							size='md'
							color='secondary'
						/>
						<Text text='Menu' type={types.primaryBold} size='lg' />
					</MenuHeader>
					<MenuBody flex={4}>
						{navItems.map((item, i) => (
							<MenuBodyItem
								onClick={onNavClose}
								href={`#${item.id}`}
								key={item.id}
							>
								<Text
									hover
									text={`${i + 1}.0`}
									type={types.secondaryRegular}
									size='md'
									color={'primary'}
								/>
								<Text
									hover
									size='lg'
									text={` ${item.text}`}
									type={types.secondaryRegular}
									color={'secondary'}
								/>
							</MenuBodyItem>
						))}
					</MenuBody>
					<MenuFooter flex={3}>
						<SocialMedia />
					</MenuFooter>
				</MenuContainer>
			</BackDrop>
			<Container changeColor={changeColor} hideNavbar={hideNavbar}>
				<NavItemContainer>
					<NavItem onClick={onNavOpen} flexStart>
						<BurgerButtonContainer>
							<BurgerButtonSlice />
							<BurgerButtonSlice width='70%' />
							<BurgerButtonSlice width='35%' />
						</BurgerButtonContainer>
					</NavItem>
				</NavItemContainer>
				<NavItemContainer className='Navbar' hideSm flex={2}>
					{navItems.map((item, i) => (
						<NavItem href={`#${item.id}`} key={item.id}>
							<Text
								hover
								text={`${i + 1}.0`}
								type={types.secondaryRegular}
								size='xsm'
								color={'primary'}
							/>
							<Text
								hover
								size='sm'
								text={` ${item.text}`}
								type={types.secondaryRegular}
								color={'secondary'}
							/>
						</NavItem>
					))}
				</NavItemContainer>
			</Container>
		</>
	);
}

interface navProps {
	hideNavbar: boolean;
	changeColor: boolean;
}

const Container = styled.div<navProps>`
	background: ${(props) =>
		props.changeColor ? props.theme.colors.background : 'transparent'};
	border-bottom: ${(props) =>
		props.changeColor ? '1px solid #eaeaea' : 'none'};
	display: flex;
	height: 3em;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
	justify-content: center;
	align-items: center;
	opacity: ${(props) => (props.hideNavbar ? '0' : '1')};
	transition: all 0.3s ease-in-out;
`;

interface navItemContainerProps {
	flex?: number;
	hideSm?: boolean;
	widthPercentage?: number;
}

const NavItemContainer = styled.div<navItemContainerProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	//hide on large screens
	display: ${(props) => (props.hideSm ? 'flex' : 'none')};
	width: min(70%, 700px);
	// hide on small screens
	@media (max-width: 768px) {
		display: ${(props) => (props.hideSm ? 'none' : 'flex')};
		width: 100%;
	}
`;

interface navItemProps {
	flexStart?: boolean;
}

const NavItem = styled.a<navItemProps>`
	display: flex;
	flex: 1;
	justify-content: ${(props) => (props.flexStart ? 'flex-start' : 'center')};
	padding-left: ${(props) => (props.flexStart ? '1em' : '0')};
	align-items: center;
	gap: 1em;
	text-decoration: none;
`;

const MenuContainer = styled.div`
	background: ${(props) => props.theme.colors.background};
	height: 100%;
	width: 60vw;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;
interface MenuItemProps {
	flex?: number;
}

const MenuItem = styled.div<MenuItemProps>`
	width: 100%;
	flex: ${(props) => props.flex || 1};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	border-bottom: 1px solid #eaeaea;
	padding: 1.2em 1em;
`;
const MenuHeader = styled(MenuItem)`
	flex: 1;
	flex-direction: row;
	gap: 1em;
	justify-content: flex-start;
	align-items: center;
`;
const MenuBody = styled(MenuItem)`
	gap: 15%;
`;
const MenuBodyItem = styled.a`
	text-decoration: none;
	display: flex;
	gap: 1em;
	width: 100%;
`;

const MenuFooter = styled(MenuItem)`
	justify-content: flex-start;
	align-items: space-around;
	width: 80%;
	align-self: center;
`;

const BurgerButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 1.5em;
	width: 2.5em;
	justify-content: space-between;
	align-items: flex-start;
`;

interface BurgerButtonSliceProps {
	width?: string;
}
const BurgerButtonSlice = styled.div`
	width: 100%;
	background: ${(props) => props.theme.colors.secondary};
	width: ${(props: BurgerButtonSliceProps) => props.width || '100%'};
	height: 20%;
	border-radius: 0.2em;
`;
export default Navbar;
