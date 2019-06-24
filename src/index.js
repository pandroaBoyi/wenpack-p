import { cube } from './math.js';


function component () {
    var element = document.createElement('div')
    element.innerHTML = [
        'Hello Webpack',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    return element
    
}
let element = component();
document.body.appendChild(element);