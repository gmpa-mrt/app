# app

Test Technique - Développeur Full Stack Meurant-Gaëtan

Front: 
    -   Un composant pour afficher les utilisateur avec un bouton "Refresh" pour activer l'affichage et pour recherche la liste des utilisteurs. 

    - Un lien "Edite" liée à chaque utilisteur qui redirige vers une page montrant l'utlisateur. Cette page est composée d'un formulaire permettant de modier les utilisateurs. 

    - Un bouton 'Add new user' permettant d'afficher un formulaire pour ajouter un nouvel utilisateur. 


API: 
    -   La route pour récuperer tout les utilisateurs : http://localhost:4000/user méthode GET 
    -   La route pour insérer un nouvel utilisateur : http://localhost:4000/user/ méthode POST
    -   La route pour mettre à jour un utilisateur : http://localhost:4000/user/:id méthode PUT 

Pour lancer le serveur soit :
                                - node serve.js
                                - nodemon serve.js