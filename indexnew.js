// CRUD (Create) (update) (Read) (Delete)

// create a folder

const fs = require("fs");

fs.mkdirSync("ANJALI");

// Create again a file inside the file and add some data in the new file

fs.writeFileSync("ANJALI/bio.txt", "Myself ANJALI SINGH");

// Add more data in the previous file

fs.appendFileSync("ANJALI/bio.txt", "And this Task is done by ANJALI");

// Read the data without getting buffer data at first

// "utf8" is used to overcome the buffer

const data = fs.readFileSync("ANJALI/bio.txt", "utf8");
console.log(data);

// Rename the file

fs.renameSync("ANJALIbio.txt", "ANJALI/ANJALIbio.txt");

// Deleting

fs.unlinkSync("ANJALI SINGH/ANJALIbio.txt");

fs.rmdirSync("ANJALI");
