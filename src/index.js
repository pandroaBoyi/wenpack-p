// import _ from 'lodash';


function getComponent () {
    // var element = document.createElement('div')

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    return import(/* webpackChunkName: "lodash" */ 'lodash').then( _ => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return element;
    }).catch(error => 'An error occurred while loading the component')
    
}
// let element = component();
// document.body.appendChild(element);
getComponent().then(component => {
    document.body.appendChild(component)
})