import { Fragment } from 'react';
import Layout from '@/Components/Layout';
import Profile from '@/Components/Profile';
import Resume from '@/Components/Resume';
import Projects from '@/Components/Projects';
import Contact from '@/Components/Contact';
import Head from '@/Components/Head';
export const ids = {
	profile: 'profile',
	resume: 'resume',
	projects: 'projects',
	contact: 'contact',
};
export default function Home() {
	return (
		<>
			<Head />
			<Layout>
				<Profile id={ids.profile} />
				<Resume id={ids.resume} />
				<Projects id={ids.projects} />
				<Contact id={ids.contact} />
			</Layout>
		</>
	);
}
