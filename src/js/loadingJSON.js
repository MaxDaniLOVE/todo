const loadingJSON = (tasks) => {
  const editedTasks = tasks.map(e => {
    return {
      ...e,
    highlight: e.highlight.slice(1)
    }
  })
  const jsonData = JSON.stringify(editedTasks);
  const csvData = 'data:text/json;charset=utf-8,'
  + jsonData;
  return encodeURI(csvData);
}

export default loadingJSON;
