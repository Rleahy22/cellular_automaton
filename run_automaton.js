var Grid = require('./grid');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', function(cmd) {
  if (cmd.toUpperCase() === "STOP") {
    newGrid.stopEvolving();
  } else if (cmd.toUpperCase() === "START") {
    newGrid.startEvolving();
  }
});

console.log("\nEnter 'start' to begin the evolution process and enter 'stop' to stop the evolution process.\n");

var newGrid = new Grid();