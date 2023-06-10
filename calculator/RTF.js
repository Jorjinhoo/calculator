


export function roundToFive(num) {
  const str = num.toString(); 
  const decimalIndex = str.indexOf('.'); 

  if (decimalIndex !== -1 && str.length - decimalIndex > 6) {
    const rounded = Math.round(num * 1e5) / 1e5;
    return rounded.toFixed(5);
  }
  return num.toString(); 
}



