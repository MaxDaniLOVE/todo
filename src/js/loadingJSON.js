const loadingJSON = (tasks) => {
  const jsonData = JSON.stringify(tasks);
  const csvData = 'data:text/json;charset=utf-8,'
  + jsonData;
  return encodeURI(csvData);
}

export default loadingJSON;
