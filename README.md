# colors-per-hour

> Do you want a color depending on the time of day?

Get colors per hour during the day


## Install

> npm install colors-per-hour


## Usage


```js

import getColor from 'colors-per-hour'

const random: boolean = false; // true for random colors on the day

// If you choose true, the colors do not necessarily have to contain 24 colors; otherwise 24 colors are     required

// You can also import our default colors
const colors = [
    "#f8f9fa", // 00:00 
    "#e9ecef", // 01:00
    "#dee2e6", // 02:00
    "#ced4da", // 03:00
    "#adb5bd", // 04:00
    "#6c757d", // 05:00
    "#495057", // 06:00
    "#343a40", // 07:00
    "#212529", // 08:00
    "#a9d6e5", // 09:00
    "#89c2d9", // 10:00
    "#61a5c2", // 11:00
    "#468faf", // 12:00
    "#2c7da0", // 13:00
    "#2a6f97", // 14:00
    "#014f86", // 15:00
    "#01497c", // 16:00
    "#013a63", // 17:00
    "#012a4a", // 18:00
    "#e01e37", // 19:00
    "#da1e37", // 20:00
    "#c71f37", // 21:00
    "#bd1f36", // 22:00
    "#b21e35" // 23:00
  ];


const color = getColor({ _arr: colors, _random : random })

// return #da1e37 if its 20:00 

```
