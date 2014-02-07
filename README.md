cellular_automaton
==================

cellular_automaton is a Node.js CLI that allows a user to start and stop
the evolution of a cellular automaton according to Wolfram's rule 30.

install
-------
to install dependencies:

<code>npm install</code>

run specs
---------

After installing dependencies,

<code>./node_modules/jasmine-node/bin/jasmine-node spec</code>

or if jasmine-node is already installed globally:

<code>jasmine-node spec</code>

run program
-----------

<code>node run_automaton.js</code>

Entering 'start' starts the evolution, and entering 'stop' stops the evolution.

assumptions
-----------

-Any edge cell (one without neighbors on both the left and right) will maintain its state in the next iteration
-iterations will contain 31 cells as shown in the example on mathworld.wolfram.com/Rule30.html