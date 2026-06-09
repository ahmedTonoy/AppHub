export const sortItems = (originalList, sortField, sortOrder) => {
  if(!sortOrder || sortOrder === 'default') {
    return originalList;
  } 
  
  return [...originalList].sort((a, b) => {
    const valueA = a[sortField];
    const valueB = b[sortField];

    if(typeof valueA === 'string') {
      return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    }

    return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
  });
};