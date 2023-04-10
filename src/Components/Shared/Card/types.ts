type cardType = 'profile' | 'project' | string;
export interface meta {
	appstore: string;
	playstore: string;
	downloads: string;
}
interface CardProps {
	cardtype?: cardType;
	title?: string;
	subtitle?: string;
	description: string;
	name?: string;
	def?: string;
	tag?: string;

	avatar?: string;
	social: {
		link: string;
		name: string;
	};
	meta?: meta;
}

interface HeaderProps {
	cardtype?: cardType;
	social: {
		link: string;
		name: string;
	};
	tag?: string;
	title?: string;
}
interface AvatarProps {
	avatar?: string;
}
interface BodyProps {
	cardtype?: cardType;
	description?: string;
	title?: string;
	subtitle?: string;
}
interface FooterProps {
	cardtype?: cardType;
	name?: string;
	def?: string;
	meta?: meta | any;
}

const cardTypes = {
	profile: 'profile',
	project: 'project',
};
export { cardTypes };
export type {
	cardType,
	CardProps,
	HeaderProps,
	BodyProps,
	FooterProps,
	AvatarProps,
};
