import * as Lists from './Lists.js';

var body = document.querySelector('body');
body.textContent = JSON.stringify(Lists.getLists(), null, 2);
