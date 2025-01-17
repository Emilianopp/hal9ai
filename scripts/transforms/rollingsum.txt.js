/**
  params:
    - name: column
      label: Column
  deps:
    - https://cdn.jsdelivr.net/npm/arquero@latest
    - https://cdn.jsdelivr.net/npm/hal9-utils@latest/dist/hal9-utils.min.js 
**/

data = await hal9.utils.toArquero(data);
if (column) {
  if (!Array.isArray(column)) column = [column]
  
  for (var i = 0; i < column.length; i++) 
  {
    data = data.params({col: column[i]}).derive({ ra: aq.rolling((d, $) => aq.op.sum(d[$.col])) });
    data = data.rename({ ra : 'rollingSum_'+column[i] });
  }
} 