import '@webcomponents/webcomponentsjs';

import { BufferQueue } from './models/queue';
import { GameChart } from './views/chart';
import { tick } from './tick';
import { random } from './utils';

const initialBufferSize = 15;

window.customElements.define('game-chart', GameChart);

const chartDOM = document.querySelector('game-chart');
// hint: you can set the values/color/displayStyle to GameChart just like below
chartDOM.values = [1, 3, 3, 7];
chartDOM.color = "red";
chartDOM.displayStyle = "vertical";
var a1 = new BufferQueue(10);

// TODO: instantiate a new buffer array instance with initialBufferSize
var $theButton = $(evt.currentTarget);
var $theContent = $("#n1");

theContent.delegate("form[data-myformattribute='true']","submit",function(){
  alert("form submitted")
});

theButton.popover({
    html: true,
    placement: "bottom",
    content: $theContent.html(),
    title: "some awesome title"
}).popover("show");
// TODO: bind form submit element event binding to change gameChart item

tick(function() {
	var x1 = Math.random();
	document.getElementsByTagName("chartDemo")[0].setAttribute(x1);
    // TODO: generate a random value to push to queue created above and
    //       assign queue value to chartDOM
});
