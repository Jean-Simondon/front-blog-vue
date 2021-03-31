# blog-front

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


INSTALLATION :

le code a été exécuté avec node 14.15.0

L'url github de l'api est : https://github.com/Jean-Simondon/API-blog-node
l'url github du front est : https://github.com/Jean-Simondon/front-blog-vue

l'api est à lancer avec les commandes "npm run start" ou "npm run watch" après avoir lancé "npm install" sur la racine bien sûr. 
la partie front est à lancer avec la commande "npm run serve" après avoir lancé "npm install"

l'url de l'api se trouve à : https://api-blog-node.herokuapp.com/api/v1/
l'url du front se trouve à : https://wonderful-turing-d512ba.netlify.app/





TODO :

Liste tous les articles qui sont en base de données <--- OK
Affiche en détail un article <--- OK
Permet de supprimer un article <--- OK
Permet de modifier un article <--- OK
Permet de créer un article <--- OK

Une route par fonctionnalité afin de mettre en place et d'utiliser le router <--- OK
Il n'est pas possible de modifier/créer/supprimer des articles dans l'application si vous n'êtes pas connectés, il vous faudra donc gérer un formulaire d'authentification <--- OK

Vos articles seront stockées dans le store VueX et seront affiché via les "computed". <--- OK
Un découpage sémantique des composants est attendu (utilisation des props) <--- OK

Pour le rendu, vous avez 2 solutions :

- Héberger votre application sur Netlify (gratuit) et votre code sur github et vous nous communiquez les urls du repository github ainsi que l'url du netlify
