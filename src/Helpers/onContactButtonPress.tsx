const onContactButtonPress = () => {
	window.innerWidth < 992
		? window.open('files/contact.vcf')
		: window.open('mailto:' + 'afsabbagh9@gmail.com');
};

export default onContactButtonPress;
