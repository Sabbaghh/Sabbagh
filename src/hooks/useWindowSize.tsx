import { useState, useEffect } from 'react';
// Define general type for useWindowSize hook, which includes width and height
export interface Size {
	width: number | undefined;
	height: number | undefined;
	mobileSize: boolean;
}
// Hook
function useWindowSize(): Size {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState<Size>({
		width: undefined,
		height: undefined,
		mobileSize: false,
	});
	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
				mobileSize: window.innerWidth < 768,
			});
		}
		// Add event listener
		window.addEventListener('resize', handleResize);
		// Call handler right away so state gets updated with initial window size
		handleResize();
		// Remove event listener on cleanup
		return () => window.removeEventListener('resize', handleResize);
	}, []); // Empty array ensures that effect is only run on mount
	return {
		...windowSize,
		mobileSize: windowSize.width ? windowSize.width < 850 : false,
	};
}

export default useWindowSize;
