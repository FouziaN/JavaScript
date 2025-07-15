const csv = "name,age\nJohn,25\nJane,30";

function parseCSV(csv) {
    const lines = csv.split('\n'); // split by line
    console.log(lines)
    const headers = lines[0].split(',');  // first line is header
    console.log(headers)
  
    return lines.slice(1).map(line => {
      console.log(lines)
      const values = line.split(',');     // split each line by comma
      const obj = {};
      headers.forEach((header, i) => {
        console.log(header , i)
        obj[header] = values[i];          // match header to value
      });
      return obj;
    });
  }
  
  console.log(parseCSV("name,age\nJohn,25\nJane,30"));


  
  
