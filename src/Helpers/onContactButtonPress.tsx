const onContactButtonPress = () => {
	window.innerWidth < 992
		? window.open('files/contact.vcf', '_blank')
		: window.open('mailto:' + 'afsabbagh9@gmail.com');
};

export default onContactButtonPress;
