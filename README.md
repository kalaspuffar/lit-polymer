# lit-polymer
An example of a Polymer 3 application using lit-html

To use this project you just clone it by using

```
git clone https://github.com/kalaspuffar/lit-polymer.git
```

Then you need to download the dependencies.
```
npm install -g polymer-cli
npm install -g yarn
yarn install
```

Lastly you start the server to view the files included
```
polymer serve -npm
```

You might also need to update the lit-element in order to get this to work. If so you can just add ../.. to the paths of the imports in the file ```node_modules\@polymer\lit-element\lit-element.js```

Example:
```
import { PropertiesMixin } from '../../@polymer/polymer/lib/mixins/properties-mixin.js';
import { camelToDashCase } from '../../@polymer/polymer/lib/utils/case-map.js';
import { render } from '../../lit-html/lib/shady-render.js';
export { html } from '../../lit-html/lib/lit-extended.js';
```