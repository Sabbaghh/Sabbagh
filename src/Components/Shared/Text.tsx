import React from 'react';
import localFont from 'next/font/local';
import styled from 'styled-components';
const SFMono = localFont({ src: '../../Fonts/SFMonoRegular.otf' });
const InterRegular = localFont({ src: '../../Fonts/InterRegular.ttf' });
const InterSemibold = localFont({ src: '../../Fonts/InterSemiBold.ttf' });

interface Props {
	type?: string;
	size?: string;
	color?: string;
	style?: string;
	text?: string;
	mobileSize?: boolean;
}
function Text({
	size = 'sm',
	color = 'primary', //primary, secondary, primaryLight , background
	style = 'regular', //bold
	type = 'primary', //secondary
	text,
}: Props) {
	if (type === 'secondary') {
		return (
			<StyledText
				type={type}
				size={size}
				className={SFMono.className}
				color={color}
			>
				{text}
			</StyledText>
		);
	} else {
		if (style === 'regular') {
			return (
				<StyledText
					type={type}
					size={size}
					className={InterRegular.className}
					color={color}
				>
					{text}
				</StyledText>
			);
		} else {
			return (
				<StyledText
					type={type}
					size={size}
					className={InterSemibold.className}
					color={color}
				>
					{text}
				</StyledText>
			);
		}
	}
}

const StyledText = styled.span<Props>`
	color: ${(props) =>
		props.color
			? props.theme.colors[props.color]
			: props.theme.colors.secondary};
	font-size: ${(props) =>
		props.size ? props.theme.fontSize[props.size] : props.theme.fontSize.md};
	/* border: 1px solid red; */
`;
export default Text;
