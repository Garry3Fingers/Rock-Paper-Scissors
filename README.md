# Rock-Paper-Scissors
In this project I'll create a simple implementation of the game "Rock Paper Scissors".
For the moment it'll be without GUI. The game will be playing from a browser's console. Later I'll add GUI.
First of all I need to think about steps for this program and how it'll be working in general.
I need to achieve few goals:
1. My program must get a random computer's choice of three shapes for a game.
2. Then it'll must compare this choice with the player choice. 
3. After that program must declare a winner.
4. Next the program must have a five rounds loop.
5. And lastly the program must get a player's input via "prompt function".

Plan:
- Create an html document with link for an external JavaScript file
- Create a function for a player's input. 
- Create a function for a random number
- Create a function that get a random number and compare it with numeric range corresponding string. It's how I get        computer's choice.
- Create a function that get two parameters (player and computer choices). Then it prints winner via switch or if else conditions. It must be case insensitive for a player's input. For instance if player === Rock and computer === Scissors return "Rock Beat Scissors. You win!"
- Create a loop function to play game five rounds and keep score with declaring a winner at the end. If player' count more than computer ones return "You win!" else "It isn't your day" 

I have a vague idea of how I'll do the last points of the plan. 

23.08.2022
I've finished the program this evening. The hardest part is when you wrote the code and you don't know how to push last 10% without bugs. The articles about solving the problems was very helpful. The next step is to continue reading the curriculum to learn how make GUI.