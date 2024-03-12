elemento = ''

function inverterString(string) {

    for (let i = string.length - 1; i >= 0; i--) {
        elemento += string[i]
    }

    console.log(elemento)
}

inverterString('Tiago')