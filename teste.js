let mArr = []

const teste = (id) => {
    mArr.push(id)
}

function retornaPosts(arr) {
    arr.map((el) => {
        teste(el)
        //console.log((el))
    })
    console.log(mArr)
}

retornaPosts([1, 2, 3])
data = {
    teste: 'Teste'

}