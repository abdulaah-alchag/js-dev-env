import numeral from 'numeral';
//handy library for formatting numbers

import './index.css'

const courseValue = numeral(1000).format('$0,0.00');
//debugger;
console.log(`I would pay ${courseValue} for this awesome course!`); // eslint-disable-line no-console
//using ES6 template-string feature of back ticks
//this tell javascript to parse any variable placeholders that define inside
