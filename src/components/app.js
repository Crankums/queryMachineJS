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
        this.checkboxes = document.getElementById('checkboxes')
    }



    handleClick(e) {
        let checkboxes = this.checkboxes.children
        let input = this.input.value
        if (input) this.stringChopper = new StringChopper(input)
        let queryObj = this.stringChopper.queryObj
        console.log(this.stringChopper.input)
        console.log(this.objectBuilder(checkboxes, this.stringChopper.input, queryObj))
    }

    objectBuilder(inputs, string, queryObj){
        if (inputs[6].checked){
            string = this.stringChopper.deVowel(string)
        }
        let source
        let chopperKey
        let chunkerKey
        for (let i=0; i<5; i+=2) {
            if (inputs[i].checked) {
                chopperKey = `chopper${inputs[i].dataset.value}` 
                chunkerKey = `chunker${inputs[i].dataset.value}`
                source = { [chopperKey] : this.stringChopper.chopper(string, parseInt(inputs[i].dataset.value)),
                    [chunkerKey] : this.stringChopper.chunker(string, inputs[i].dataset.value)}
                Object.assign(queryObj, source)
            }
            return queryObj
        }
    }


}
