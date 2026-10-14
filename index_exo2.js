//----------------QUESTION 1---------------------------------------------------------
/*const getMention = (moyenne) => {
    if (moyenne >= 16) {
        console.log("Tres Bien ✅");    
    }else if (moyenne >= 14) {
        console.log("Bien ✅");
    }else if (moyenne >= 12) {
        console.log("Assez Bien !");
    }else if (moyenne >= 10) {
        console.log("Passable !");
    }else if (moyenne < 10){
        console.log("Insuffisant !");
    }
}

const getMention_imbrique = (moyenne) =>{
    let decision = moyenne >= 16 ?"Tres Bien" :
                   moyenne >= 14 ? "Bien"      :
                   moyenne >= 12 ? "Assez Bien" :
                   moyenne >= 10 ? "Passable" : 
                   moyenne >= 0  ? "Insuffisant" :
                   "Note invalide";
    return `Moyenne: ${moyenne}/20 -> ${decision}`;               
} 

console.log(getMention_imbrique(16));
console.log(getMention_imbrique(15));
console.log(getMention_imbrique(13));
console.log(getMention_imbrique(11));
console.log(getMention_imbrique(9));
*/
//-----QUESTION 2--------

const etudiants = [
    { nom: 'Alice Mengue', notes: [14, 16, 12, 18, 15], absences: 1 },
    { nom: 'Bob Tamba',    notes: [8, 10, 7, 9, 11],    absences: 4 },
    { nom: 'Clara Nkono',  notes: [13, 15, 14, 16, 12], absences: 0 },
    { nom: 'David Fouda',  notes: [9, 11, 8, 10, 12],   absences: 6 },
    { nom: 'Emma Biyong',  notes: [17, 18, 16, 19, 15], absences: 0 },
]
const etudiants_notes = etudiants.map(e => e.notes);
console.log(etudiants_notes);

const calculerMoyenne = (notes) => {
    const total_notes = notes.reduce((acc,e) => {return (acc + e)},0);
    // console.log("total des notes -> ", total_notes);

    const moyenne = total_notes/5;
    return moyenne;
}

let moy = 0;

for (let index = 0; index < etudiants.length; index++) {
    console.log("La moyenne de l'etudiant ", etudiants[index].nom, " est : M = ", calculerMoyenne(etudiants_notes[index]));
    moy += calculerMoyenne(etudiants_notes[index]);
}

console.log("la moyenne generale est: " , (moy/etudiants.length).toFixed(2));



const bulletins = etudiants.map(etudiant => {
    let moyenne = calculerMoyenne(etudiant.notes).toFixed(2);

    let mention = moyenne >= 16 ?"Tres Bien" :
                   moyenne >= 14 ? "Bien"      :
                   moyenne >= 12 ? "Assez Bien" :
                   moyenne >= 10 ? "Passable" :
                   "Insuffisant"; 

    return {...etudiant, Moyenne:parseFloat(moyenne),mention};
});

console.log(bulletins);

const etudiant_3_absences = bulletins.filter(e => e.absences > 3 && e.Moyenne < 10);

// console.log(etudiant_3_absences);
// console.log("----------------------------------------------------------------");

// bulletins.sort((a,b) => b.Moyenne - a.Moyenne);
// console.log(bulletins);

// //--------Question 3 — Construire le bulletin en objet-----------------