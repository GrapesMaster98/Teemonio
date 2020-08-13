# Antes de usar mi código...

No me molesta que uses mi código para aprender, pero no seas un molesto, no tienes permitido tomar este código como propio.

¿Quieres añadir un comando o arreglar algún fallo? Eres libre de hacerlo, pero deja en claro que es lo que estás añadiendo.

## Contribuir al proyecto 📝

**Conocimientos previos en JavaScript (NodeJS) son necesarios para poder contribuir.**

**Requisitos:**
La única cosa que es 100% necesaria para poder correr el bot es NodeJS. Puedes instalarlo desde [su pagina oficial](https://nodejs.org/en/)

Lo siguiente es un editor de código, te recomiendo [Visual Studio Code](https://code.visualstudio.com)

**Instrucciones**

Clona el repostorio.
```sh
git clone https://github.com/GrapesMaster98/Teemonio.git
```

Ingresa a la carpeta del bot.
```sh
cd \Teemonio\
```

Instala las dependencias necesarias.
```sh
npm i
```

Inicia el bot.
```sh
npm run dev
```
(Esto iniciará el bot en modo de desarrollo, si quieres iniciar al bot en modo de build usa `npm run start` )

¡Listo! El bot esta funcionando como debería.

##Añadir un comando nuevo 🔧

Para añadir un nuevo comando debes seguir estos pasos:

Escoge o crea una categoría para el comando, cada categoría está ubicada en su respectiva carpeta, primero accede a la categoría correcta.

```sh
cd .\src\commands\CATEGIORIA\
```

O crea una categoría nueva para el comando.

```sh
cd .\src\commands\
mkdir CATEGORIA
```

Una vez dentro de la categoría, tendrás que usar esta base para crear el comando:
```javascript
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NombreDelComandoAqui extends BaseCommand {
  constructor() {
    super('comando', 'categoria', ['alases', 'alias']);
  }

  run(client, message, args) {
  //Lógica del comando aquí.
  }
}
```

**Es muy importante que la clase tenga el mismo nombre que el archivo .js**
Ejemplo:
`meme.js`

Código:

```javascript
module.exports = class meme extends BaseCommand {
constructor() {
  super('meme', 'fun', []);
}
}
```
