interface IProps {
	type?: 'profile' | 'project';
}
export interface meta {
	appstore: string;
	playstore: string;
	downloads: string;
}
interface CardProps extends IProps {
	title?: string;
	subtitle?: string;
	description: string;
	name?: string;
	def?: string;
	tag: string;
	tagNumber: string;
	avatar?: string;
	social: {
		link: string;
		name: string;
	};
	meta?: meta;
}

interface HeaderProps extends IProps {
	social: {
		link: string;
		name: string;
	};
	tag: string;
	tagNumber: string;
	title?: string;
}
interface AvatarProps {
	avatar?: string;
}
interface BodyProps extends IProps {
	description?: string;
	title?: string;
	subtitle?: string;
}
interface FooterProps extends IProps {
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
	IProps,
	CardProps,
	HeaderProps,
	BodyProps,
	FooterProps,
	AvatarProps,
};
