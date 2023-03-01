

var hw = 'Hello World';
var hello = 'Hello';
var world = 'World';
var helloWorld = hello + ' ' + world;

//forma 6
var res = document.querySelector('.hello-world').innerHTML = 'querySelector: ' + helloWorld;
//forma 7
var res = document.getElementById('hello-world').innerHTML = 'getElementById: ' + hello + ' ' + world;
