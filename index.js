//------------------------------------------------------------------
/*let name = prompt("Entrer votre nom de l'article: 👇");

if (name === null || name.trim() === "") {
    console.warn("veuillez entrer un vrai nom, bye🖐️");
}else{
    let priceStr = prompt("Entrer le prix de cette article: 👇");
        
    if (priceStr === null || priceStr.trim() === "") {
        console.warn("Attention, prix incorrect !");
    }else{
        let price = Number(priceStr);
        if (!isNaN(price) && price > 0) {
            
            const estStock = confirm("Est-il en stock ? (OK => OUI et Annuler => NON)");
            
            console.log("Nom du produit 👉 ", name);
            console.log("Prix valide ✅ 👉 ", price, " FCFA");
            console.log("En stock 👉 ", estStock);
            console.log("Type [prix] : ", typeof(price));
            console.log("Type [enStock] : ", typeof(estStock));
        }else{console.warn("Attention, Prix invalide !");}
    }

}

const prixStr = '450000';
const prixNum = Number(prixStr);
console.log("Type [prixNum] : ", typeof(prixNum));
console.log("Number('') 👉 ", Number(''));
console.log("Number('abc') 👉 ", Number('abc'));

*/

//-------QUESTION 2---------
/*const panier = [
    { id: 1, nom: 'iPhone 15',     prix: 450000, quantite: 1, categorie: 'premium' },
    { id: 2, nom: 'Câble USB-C',   prix: 5000,   quantite: 3, categorie: 'accessoire' },
    { id: 3, nom: 'Coque silicone',prix: 8000,   quantite: 2, categorie: 'accessoire' },
    { id: 4, nom: 'Samsung A54',   prix: 185000, quantite: 1, categorie: 'standard' },
]

const nomsProduits = panier.map(p => p.nom);
console.log(nomsProduits);

const accessoire = panier.filter(p => p.categorie === 'accessoire');
// console.log(accessoire);

const total = panier.reduce((acc,p) => {return acc + (p.prix*p.quantite)}, 0);
console.log("Le total du panier est : ",total, " FCFA");
//---------BONUS---------
const accessoire_total = panier.filter(p => p.categorie === 'accessoire').reduce((acc,a) => {return acc + (a.prix*a.quantite)}, 0);
console.log("Le total des accessoires est : ", accessoire_total, " FCFA");
*/
//-----QUESTION 3------------
const name = "Iphone 15";
const quantity = 1;
const price = 450000;
const priceFormat = new Intl.NumberFormat('fr-FR').format(price) +" FCFA";
let ligne = `${name.padEnd(20)}` + `x${quantity}` + `${priceFormat.padStart(15)}`;

console.log(ligne);

let numberTicket = 42;
numberTicket = String(numberTicket);
console.log(`TKT -`,numberTicket.padStart(6,'0'));

const verifierEmail = (email) =>{
    let Arobase_position = email.indexOf('@');

    return email.includes('@') && email.indexOf('.',Arobase_position) > Arobase_position;
}

console.log(verifierEmail("dimi@gmail.com"));
console.log(verifierEmail('dimi@.com'));
console.log(verifierEmail('dim.i@com'));
console.log(verifierEmail('dimi.com'));