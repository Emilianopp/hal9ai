/**
  output: [ 'data', 'html' ]
  deps:
    - https://cdn.jsdelivr.net/npm/hal9-utils@0.0.4/dist/hal9-utils.min.js
    - 'https://cdnjs.cloudflare.com/ajax/libs/d3/6.2.0/d3.min.js'
**/

data = await hal9.utils.toRows(data);

const lines = [ d3.csvFormat(data) ];
var file = new Blob(lines, { type: 'text/plain' });

var a = document.createElement('a');
a.href = URL.createObjectURL(file);
a.download = 'data.csv';
a.innerHTML = 'Download data as CSV!'
a.style.display = 'block';
a.style.marginTop = '45%';

html.style.textAlign = 'center';
html.appendChild(a);