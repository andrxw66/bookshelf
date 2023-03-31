import { DivComponent } from '../../common/div-component'
import './pagination.css'

export class Pagination extends DivComponent {
	constructor(state) {
		super()
		this.state = state
	}

	#nextPage() {
		this.state.offset += 10
	}

	#previousPage() {
		this.state.offset -= 10
	}

	render() {
		this.el.classList.add('pagination')
		this.el.innerHTML = `
			<button class='pagination__button previous'>
				<img src='/static/arrow_back.svg' class='reverse__arrow' alt='Arrow back'/>
				Previous page
			</button>
			<button class='pagination__button next'>
				Next page
				<img src='/static/arrow_back.svg' alt='Arrow back'/>
			</button>
		`
		if (this.state.offset === 0) {
			this.el.querySelector('.previous').disabled = true
		}
		this.el
			.querySelector('.previous')
			.addEventListener('click', this.#previousPage.bind(this))
		this.el
			.querySelector('.next')
			.addEventListener('click', this.#nextPage.bind(this))
		return this.el
	}
}
