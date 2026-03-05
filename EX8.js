let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"
console.log("===== RAPPORT UTILISATEUR =====")

let nomCorrige = nom.trim()
if (nomCorrige === "") {
    nomCorrige = "Inconnu"
}
console.log('nom : "' + nomCorrige + '" (corrigé : espaces supprimés)')

let ageNum = parseInt(age)
if (Number.isNaN(ageNum) || ageNum <= 0) {
    console.log("age : valeur invalide")
} else {
    console.log("age :", ageNum, "(valide)")
}

let positionAt = email.indexOf("@")
let positionPoint = email.indexOf(".", positionAt)

if (positionAt > -1 && positionPoint > positionAt) {
    console.log('email : "' + email + '" (valide)')
} else {
    console.log('email : "' + email + '" (invalide : pas de point après @)')
}

let scoreNum = parseInt(scoreJeu)
if (Number.isNaN(scoreNum)) {
    scoreNum = 0
}
console.log("scoreJeu :", scoreNum, '(extrait depuis "' + scoreJeu + '")')

let estAdminBool = false
if (estAdmin === "true") {
    estAdminBool = true
}
console.log("estAdmin :", estAdminBool, '(conversion manuelle requise)')

let derniere = derniereConnexion ?? "Jamais connecté"
console.log('derniereConnexion : "' + derniere + '" (valeur par défaut via ??)')

let nbConnexions = Number(nombreConnexions)
if (nbConnexions === 0) {
    console.log('nombreConnexions : "Aucune connexion" (0 après conversion)')
} else {
    console.log("nombreConnexions :", nbConnexions)
}

console.log("================================")