let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

let variables = [
    ["nom", nom],
    ["age", age],
    ["ville", ville],
    ["score", score],
    ["actif", actif]
]

for (let i = 0; i < variables.length; i++) {

    let nomVar = variables[i][0]
    let valeur = variables[i][1]

    let rNullish = valeur ?? "valeur par défaut"
    let rOr = valeur || "valeur par défaut"

    console.log(nomVar + " ?? -> " + rNullish)
    console.log(nomVar + " || -> " + rOr)

    if (rNullish === rOr) {
        console.log(nomVar + " : ?? et || -> même résultat")
    } else {
        console.log(nomVar + " : ?? et || -> résultat différent")
    }

    console.log("-----")
}