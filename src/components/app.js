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
        this.tbody = document.getElementById('tbody')
    }



    handleClick(e) {
        let checkboxes = this.checkboxes.children
        let input = this.input.value
        if (input) this.stringChopper = new StringChopper(input)
        let queryObj = this.stringChopper.queryObj
        console.log(this.stringChopper.input)
        console.log(this.objectBuilder(checkboxes, this.stringChopper.input, queryObj))
        for (let key in queryObj) {
            console.log(`${key}: ${queryObj[key]}`)
        }
        this.tableBuilder(this.objectBuilder(checkboxes, input, queryObj))
    }

    tableBuilder(queryObj){
        for (let key in queryObj) {
            let row = document.createElement('tr')
            row.setAttribute('id', `${key}`)
            row.innerHTML = `${key}: `
            this.tbody.appendChild(row)
            // create table cells by looping queryObj[key] array
            for (let i = 0; i<queryObj[key].length;  i++) {
                let cell = document.createElement('td')
                cell.setAttribute('id','search-term')
                cell.innerHTML = ` ${queryObj[key][i]} `
                row.appendChild(cell)
            }
        }
    }

    objectBuilder(inputs, string, queryObj){
        if (inputs[6].checked){
            string = this.stringChopper.deVowel(string)
        }
        let source
        let chopperKey
        let chunkerKey
        for (let i=0; i<6; i+=2) {
            if (inputs[i].checked) {
                chopperKey = `chopper${inputs[i].dataset.value}` 
                chunkerKey = `chunker${inputs[i].dataset.value}`
                source = { [chopperKey] : this.stringChopper.chopper(string, parseInt(inputs[i].dataset.value)),
                    [chunkerKey] : this.stringChopper.chunker(string, parseInt(inputs[i].dataset.value))}
                Object.assign(queryObj, source)
            }
        }
        return queryObj
    }


}
