
import TSP from './TSP'

const WIDTH = 800
const HEIGHT = 600
var numberOfNodes = 10;

$( "#number-of-nodes" )
  .keyup(function() {
    numberOfNodes = parseInt($( this ).val());
  })
  .keyup();

const tsp = new TSP($('#c'), WIDTH, HEIGHT, () => {
  $('#btn-start').attr('disabled', true)
  $('#btn-stop').attr('disabled', false)
}, () => {
  $('#btn-start').attr('disabled', false)
  $('#btn-stop').attr('disabled', true)
})


// set numbers of nodes here ! 
$(document).ready(() => {
  if(numberOfNodes !== undefined) {
    tsp.makeRandomNodes(numberOfNodes)
  } else {
    tsp.makeRandomNodes(10)
  }
  

  tsp.render()
  $('#btn-stop').attr('disabled', true)

  $(window).resize(() => {
    $('#c').css({width: Math.min(WIDTH, screen.width) + 'px'})
  })
})

$('#btn-random').click(() => {
  tsp.stop()
  if(numberOfNodes !== undefined) {
    tsp.makeRandomNodes(numberOfNodes)
  } else {
    tsp.makeRandomNodes(10)
  }
  tsp.render()
})

$('#btn-start').click(() => {
  tsp.start()
  
})
$('#btn-stop').click(() => {
  tsp.stop()
})

