function takeANumber(n, name) {
  var line = [];
  n.push(name)
  return `Welcome, ` + name + `. You are number ` + (n.length) + ` in line.`;
}
function nowServing(array) {
  if (array.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ` + array.shift() + `.`;
  }
}
function currentLine(line) {
  if (line.length === 0) {
   return `The line is currently empty.`;
     } else if (line.length >= 1) {
              let string = `The line is currently: `;
              for (let i = 0; i < line.length; i++) {
<<<<<<< HEAD
                  if (i === line.length - 1) {
=======
                  if (line[i] === line.length - 1) {
>>>>>>> 6c9c52bc56b1acc018c31dbf36a0326794431d15
                      string += (i + 1) + `. ` + line[i]; 
                  } else {
                      string += (i + 1) + `. ` + line[i] + ', ';
              }
<<<<<<< HEAD
    }
    return string;
  }
}
=======
              return string; 
    }
  }
}
>>>>>>> 6c9c52bc56b1acc018c31dbf36a0326794431d15
