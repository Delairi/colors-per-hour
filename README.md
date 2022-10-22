# colors-per-hour

> Do you want a color depending on the time of day?

Get colors per hour during the day


## Install

> npm install colors-per-hour


## Usage


```js

import { Comprobation } from 'colors-per-hour'

const random: boolean = false; // true for random colors on the day

// If you choose true, the colors do not necessarily have to contain 24 colors; otherwise 24 colors are     required

const colors = [
  "#85FFC7", // 0
  "#297373", // 1
  "#FF8552", // 2
  "#E6E6E6", // 3
  "#39393A", // 4
  "#9a031e", // 5
  "#2b2d42", // 6
  "#ffddd2", // 7
  "#006d77", // 8
  "#fcbf49", // 9
  "#03045e", // 10
  "#ffb703", // 11
  "#edf6f9", // 12
  "#85FFC7", // 13
  "#297373", // 14
  "#FF8552", // 15
  "#E6E6E6", // 16
  "#39393A", // 17
  "#9a031e", // 18
  "#2b2d42", // 19
  "#ffddd2", // 20
  "#006d77", // 21
  "#fcbf49", // 22
  "#03045e", // 23
];


const color = Comprobation({ _arr: colors, _random : random })

// return #ffddd2 if its 20:00 

```
