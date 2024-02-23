export class WcOffcanvas extends HTMLElement {
    static observedAttributes = ['open'];
    
    connectedCallback() {
        document.addEventListener('DOMContentLoaded', this.onMount.bind(this))
        document.documentElement.classList.add('has-offcanvas')
        
        this.createHeaderElement()
    }

    onMount() {
        const closeBtn = this.querySelector('.offcanvas-close')

        closeBtn?.addEventListener('click', () => this.setAttribute('open', 'false'))
    }

    createHeaderElement() {
        const headerEl = document.createElement('div')
        
        headerEl.classList.add('offcanvas-header')
        headerEl.innerHTML = `
            <button class="offcanvas-close">
                <span class="material-symbols-outlined">
                    arrow_left_alt
                </span>
                <span>sluiten</span>
            </button>
        `

        this.prepend(headerEl)
    }

    close() {
        document.documentElement.classList.remove('offcanvas-open')
        document.documentElement.classList.add('offcanvas-closed')

        const activeElements = document.querySelectorAll('[data-offcanvas-open].active')
        const delay = getComputedStyle(this).getPropertyValue('--codeit-offcanvas-animation-delay');

        [...activeElements].forEach(activeEl => {
            activeEl.classList.remove('active', 'is-active');
        })

        setTimeout(() => {
            document.documentElement.classList.remove('offcanvas-closed')
            this.fixStickyLikeElements(true)
            document.documentElement.style.removeProperty('overflow')
        }, parseFloat(delay) * 2000)
    }

    open() {
        let openOffCanvasElements = document.querySelectorAll('wc-offcanvas[open=true]')
        // @ts-ignore
        openOffCanvasElements = [...openOffCanvasElements].filter(el => el !== this)

        // Close previously opened offcanvas elements
        if( openOffCanvasElements.length > 0 ) {
            openOffCanvasElements.forEach(el => el.setAttribute('open', 'false'))
        }

        // Position fixed wont work using css
        // Keep position at top of window using JS
        ['load', 'scroll'].forEach(event => window.addEventListener(event, () => this.style.top = `${window.scrollY}px`))

        this.style.top = `${window.scrollY}px`

        document.documentElement.classList.remove('offcanvas-closed')
        document.documentElement.classList.add('offcanvas-open')

        if( 'hidden' === this.getAttribute('body') ) {
            document.documentElement.style.overflow = 'hidden'
        }
        
        this.fixStickyLikeElements()
    }

    /**
     * Fix sticky elements
     * 
     * Sticky elemets lose their stickyness when a transform is
     * set on its parent.
     * 
     * @param {boolean} reset 
     */
    fixStickyLikeElements(reset = false) {
        const fixedTop = document.getElementsByClassName('fixed-top') as HTMLCollectionOf<HTMLElement>;

        [...fixedTop].forEach(el => {
            el.style.position = 'absolute'
            el.style.top = `${window.scrollY}px`

            if( reset ) {
                el.style.removeProperty('position')
                el.style.removeProperty('top')
            }
        })
    }

    attributeChangedCallback(name: string, oldVal: string, newVal: string) {        
        if( 
            name === 'open' &&
            newVal === '' ||
            newVal === 'true'
        ) {
            this.open()
        }

        if( 
            name === 'open' &&
            newVal === 'false'
        ) {
            this.close()
        }
    }
}

window.customElements.define('wc-offcanvas', WcOffcanvas);