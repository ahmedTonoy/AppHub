export const getFromLs = () => {
  const lsData = localStorage.getItem('installed');
  if(lsData) {
    const dataParsed = JSON.parse(lsData);
    return dataParsed;
  } else{
    return [];
  }
};

export const checkInstallation = (id) => {
  const existingData = getFromLs();
  return existingData.includes(id);
};

export const updateLs = (id) => {
  const existingData = getFromLs();
  if(!existingData.includes(id)) {
    existingData.push(id);
    const updatedLsData = JSON.stringify(existingData);
    localStorage.setItem('installed', updatedLsData);
  } else if(existingData.includes(id)) {
    const updatedLsData = JSON.stringify(existingData.filter(item => item !== id));
    localStorage.setItem('installed', updatedLsData);
  }
};