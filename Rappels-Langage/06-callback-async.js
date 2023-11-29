setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// En gros la boucle d'événement coté C++
// ressemble à :
// do {
//   executeJSStack()
// } while(thereIsTasks);

// callstack
// ^
// |
// |                         [lg   ]             [lg   ][lg   ]             [lg   ]
// |[st][st][st][st][lg] ... [taskB] ...         [taskA][taskD] ...         [taskD] ...
// +----0--------------------3ms-------------------------------------------------------> temps
// Console :        E        B                   A      D


// File d'attente de timer (0ms): taskB
// File d'attente de timer (3ms):
// File d'attente de timer (499ms): taskA
// File d'attente de timer (500ms): taskA - taskD
// File d'attente de timer (501ms): taskD
// File d'attente de timer (502ms):
// File d'attente de timer (999ms): taskD
// File d'attente de timer (1s):
// Dans Node le programme s'arrête

// Jake Archibald
// In The Loop
// JSconf.Asia 2018
// https://www.youtube.com/watch?v=cCOL7MC4Pl0

