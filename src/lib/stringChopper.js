class StringChopper {
    constructor(string){
        this.string = string
        this.queryObj = {}
    }

    get queryObj(){
        return this.queryObj
    }

    deVowel(input) {
        return input.replace(/[aeiou]/gi,'')
    }
  
    chopper(str, charLgnth, vowel) {
        if (vowel) {
            str = deVowel(str)
        }
        let retArr = []
        for (let i=0; i<str.length; i ++) {
            let subStr = str.slice(i, i + charLgnth)
            subStr.length === charLgnth ? retArr.push(subStr) : i++
        }
        return retArr
    }

    chunker(str, len, vowel) {
        if (vowel) {
            str = deVowel(str) 
        }
        let retArr = []
        for (let i = 0; i<str.length; i+=len) {
            let subStr = str.slice(i, i+len)
            // retArr.push(subStr)
            subStr.length === len ? retArr.push(subStr) : i+=len
        }
        return retArr
    }
}

