var Grid = require('./grid');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', function(cmd) {
  if (cmd === "stop") {
    newGrid.stopEvolving();
  } else if (cmd === "start") {
    newGrid.startEvolving();
  }
});

var newGrid = new Grid();
newGrid.startEvolving();