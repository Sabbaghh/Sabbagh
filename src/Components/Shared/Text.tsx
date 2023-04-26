import React from 'react';
import localFont from 'next/font/local';
import styled from 'styled-components';
import { Cairo } from 'next/font/google';
const SFMono = localFont({ src: '../../Fonts/SFMonoRegular.otf' });
const cairo = Cairo({
	weight: '400',
	style: 'normal',
	subsets: ['latin'],
});
const cairoSemiBold = Cairo({
	weight: '700',
	style: 'normal',
	subsets: ['latin'],
});

interface Props {
	type?: string;
	size?: string;
	color?: string;
	text: string;
	align?: string;
	hover?: boolean;
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const types = {
	primaryBold: 'primaryBold',
	primaryRegular: 'primaryRegular',
	secondaryRegular: 'secondaryRegular',
};
function Text(Props: Props) {
	switch (Props.type) {
		case types.primaryBold:
			return (
				<StyledText
					as={Props.as}
					{...Props}
					className={cairoSemiBold.className}
				>
					{Props.text}
				</StyledText>
			);
		case types.primaryRegular:
			return (
				<StyledText as={Props.as} {...Props} className={cairo.className}>
					{Props.text}
				</StyledText>
			);
		case types.secondaryRegular:
			return (
				<StyledText as={Props.as} {...Props} className={SFMono.className}>
					{Props.text}
				</StyledText>
			);
		default:
			return (
				<StyledText {...Props} className={cairo.className}>
					{Props.text}
				</StyledText>
			);
	}
}

const StyledText = styled.span<Props>`
	transition: color ease-in-out 0.3s;
	text-align: ${(props) => (props.align ? props.align : 'left')};
	color: ${(props) =>
		props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
	font-size: ${(props) =>
		props.size
			? `${props.theme.fontSizeSmallScreen[props.size]}rem`
			: `${props.theme.fontSizeSmallScreen.md}rem`};
	line-height: ${(props) =>
		props.size
			? `${props.theme.fontSizeSmallScreen[props.size]}rem`
			: `${props.theme.fontSizeSmallScreen.md}rem`};
	@media (min-width: 1400px) {
		font-size: ${(props) =>
			props.size
				? `${props.theme.fontSize[props.size]}rem`
				: `${props.theme.fontSize.md}rem`};
		line-height: ${(props) =>
			props.size
				? `${props.theme.fontSize[props.size]}rem`
				: `${props.theme.fontSize.md}rem`};
	}
	&:hover {
		color: ${(props) =>
			props.hover
				? props.theme.colors.secondary
				: props.theme.colors[props.color || 'primary']};
		cursor: ${(props) => (props.hover ? 'pointer' : 'default')};
	}
`;
export default Text;
