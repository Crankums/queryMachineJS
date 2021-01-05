class App {
    constructor() {
        this.initBindingsAndEventListeners()
    }
    
    initBindingsAndEventListeners() {
        this.mainContainer = document.getElementById('main-container')
        this.btn = this.mainContainer.querySelector('#choppin-button')
        this.input = this.mainContainer.querySelector("#search-term-input")
        this.btn.addEventListener('click', this.handleClick.bind(this))
    }

    handleClick(e) {
        let input = this.input.value
        console.log(input)
        
    }
}
