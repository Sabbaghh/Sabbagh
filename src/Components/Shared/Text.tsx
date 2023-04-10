import React from 'react';
import localFont from 'next/font/local';
import styled from 'styled-components';
import { Cairo } from 'next/font/google';
const SFMono = localFont({ src: '../../Fonts/SFMonoRegular.otf' });
const CalibreRegular = localFont({ src: '../../Fonts/CalibreRegular.otf' });
const CalibreSemibold = localFont({ src: '../../Fonts/CalibreSemibold.otf' });
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
				<StyledText {...Props} className={cairoSemiBold.className}>
					{Props.text}
				</StyledText>
			);
		case types.primaryRegular:
			return (
				<StyledText {...Props} className={cairo.className}>
					{Props.text}
				</StyledText>
			);
		case types.secondaryRegular:
			return (
				<StyledText {...Props} className={SFMono.className}>
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
`;
export default Text;
