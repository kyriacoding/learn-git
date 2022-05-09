/*
1. Écrivez une fonction JavaScript pour vérifier si une 
"entrée" est une chaîne de caractères ou non.
    */
function verifierVariable(a) {
  if (typeof a == "string") return true;
  else return false;
}

/*
3. Écrivez une fonction JavaScript qui prend une chaine de caractères 
et la convertir en un tableau de mots.
*/
function diviserChaine(a) {
  let arr = a.split(" ");
  return arr;
}

/*
6. Écrire un programme JavaScript pour déterminer 
si une année donnée est une année bissextile
*/
function isBissextile(annee) {
  if (annee % 4 === 0) return true;
  else return false;
}

/*
10. Écrire un programme JavaScript 
pour calculer la multiplication et la division de deux nombres (entrée de l'utilisateur)
*/
function diviserMultiplier(a, b) {
  let mul1 = a * b;
  let div1 = a / b;

  console.log("résultat de la multiplication de ", a, ", par ", b, " = ", mul1);
  console.log("résultat de la division de ", a, ", par ", b, " = ", div1);
}

diviserMultiplier(4, 2);
diviserMultiplier(10, 5);
diviserMultiplier(12, 3);

/*
3. Écrivez une fonction JavaScript pour obtenir le premier élément d'un tableau
*/
function getFirst(tabl) {
  return tabl[0];
}

console.log(getFirst([4, 5, 8]));
console.log(getFirst(["ez", "ee"]), " \n");

/*
5. Écrivez une boucle for JavaScript qui itérera de 0 à 15. 
Pour chaque itération, elle vérifiera si le nombre actuel est 
pair ou impair et affichera un message à l'écran.
*/
for (var i = 0; i <= 15; i++) {
  if (i % 2 === 0) console.log(i, " est pair!");
  else console.log(i, " est impair!");
}
