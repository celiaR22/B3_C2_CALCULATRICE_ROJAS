# B3_C2_CALCULATRICE_ROJAS
Projet Test unitaire sur une calculatrice

# instalattion jest
 - npm install --save-dev jest
 - npm install -D jest-environment-jsdom
 
# créer un fichier jest.config.js et inserer la ligne:
module.exports = {
    "testEnvironment": "jsdom"
}

 #lancement des test 
 - npm test

#explication
J'ai dans un premier temps réalisé la calculatrice avec les calculs basiques
puis j'ai utilisé jest pour réaliser les tests de mes opérations ( additions, soustractions, etc)

Dans un deuxième temps j'ai rajouté les parentheses à ma calculatrice pour pouvoir faire les calculs avec les priorités
j'ai cette fois d'abord écrit mes test 
puis j'ai lancé les tests et corrigé les problèmes de code
