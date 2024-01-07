let intersectionObserver: IntersectionObserver;

function ensureIntersectionObserver() {
	if ( intersectionObserver ) return;

  intersectionObserver = new IntersectionObserver(
		( entries ) => {
			entries.forEach( entry => {
				const eventName = entry.isIntersecting ? 'viewportEnter' : 'viewportExit';
				entry.target.dispatchEvent( new CustomEvent( eventName ) );
			});
		},
        {
            rootMargin: '0px 0px -50% 0px'
        }
	);
}

export default function viewport( element: Element ) {
	ensureIntersectionObserver();

	intersectionObserver.observe( element );

	return {
		destroy() {
			intersectionObserver.unobserve( element );
		}
	}
}