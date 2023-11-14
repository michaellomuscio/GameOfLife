# Conway's Game of Life

## Introduction
Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It's a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. The player interacts with the Game of Life by creating an initial configuration and observing how it evolves.

This project is a web-based implementation of Conway's Game of Life. It allows users to draw cells on a grid, start the simulation, and observe the evolution of the cell pattern according to the rules of the game.

## How to Run
To run the game, simply clone the repository and open `index.html` in your web browser. The game will be rendered on a canvas element. You can interact with the game by:

- Clicking on the canvas to create life cells.
- Clicking the "Start" button to begin the simulation.
- Clicking the "Clear" button to clear the grid and start over.

## Rules of the Game
The game evolves in turns, commonly known as "ticks". The rules of the game are as follows:

1. **Birth**: A cell that is dead at one step will be alive at the next step if exactly three of its eight neighbors were alive at the previous step.
2. **Survival**: A cell remains alive at the next step if two or three of its neighbors are alive, otherwise it dies.
3. **Death**: A cell dies if it is either overcrowded (over three neighbors) or underpopulated (fewer than two neighbors).

## Technologies Used
- HTML
- CSS
- JavaScript

## Contributing
Feel free to fork this repository and contribute by submitting a pull request. We appreciate your input!

## License
This project is open source and available under the [MIT License](LICENSE).
