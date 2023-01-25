const Ship = (size, hits) => {
  
  const hit = () => {
    hits++;
    return hits;
  };
  const isSunk = () => {
    if (hits === size) {
      return true;
    } else {
      return false;
    }
  };
  return { size, hits, isSunk, hit };
};
export { Ship };