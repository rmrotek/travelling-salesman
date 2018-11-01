
import TSP from './TSP'

const WIDTH = 800
const HEIGHT = 600

const tsp = new TSP($('#c'), WIDTH, HEIGHT, () => {
  $('#btn-start').attr('disabled', true)
  $('#btn-stop').attr('disabled', false)
}, () => {
  $('#btn-start').attr('disabled', false)
  $('#btn-stop').attr('disabled', true)
})


// set numbers of nodes here ! 
$(document).ready(() => {
  if($('#number-of-nodes').val() !== undefined) {
    tsp.makeRandomNodes(parseInt($('#number-of-nodes').val()))
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
  if($('#number-of-nodes').val() !== undefined) {
    tsp.makeRandomNodes(parseInt($('#number-of-nodes').val()))
  } else {
    tsp.makeRandomNodes(10)
  }
  console.log(parseInt($('#number-of-nodes').val()))
  tsp.render()
})

$('#btn-start').click(() => {
  tsp.start()
  
})
$('#btn-stop').click(() => {
  tsp.stop()
})

