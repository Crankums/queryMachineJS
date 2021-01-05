class App {
    constructor() {
        this.initBindingsAndEventListeners()
        
    }
    
    initBindingsAndEventListeners() {
        this.mainContainer = document.getElementById('main-container')
        this.btn = this.mainContainer.querySelector('#choppin-button')
        this.input = this.mainContainer.querySelector("#search-term-input")
        this.queryTable = this.mainContainer.querySelector(".query-table")
        this.btn.addEventListener('click', this.handleClick.bind(this))
    }

    handleClick(e) {
        let input = this.input.value
        if (input) this.stringChopper = new StringChopper(input)
        console.log(this.stringChopper.input)
    }


}
