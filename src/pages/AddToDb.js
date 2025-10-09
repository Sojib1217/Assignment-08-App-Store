

const getAppFromLocalStore = () => {
  const getAppData = localStorage.getItem("app");
  if (getAppData) {
    const getAppsData=JSON.parse(getAppData);
    return getAppsData
  } else {
    return [];
  }
};

const setAppDataToLocal = (id) => {
  const appData = getAppFromLocalStore();
  if (appData.includes(id)) {
    return;
  } else {
    const allData = [...appData, id];
    localStorage.setItem("app", JSON.stringify(allData));
  }
};

const removeFromLocalStorage = (id) => {
  const storedAppIds = getAppFromLocalStore();
  const remainingApps = storedAppIds.filter(
    (storedId) => parseInt(storedId) !== parseInt(id)
  );
  localStorage.setItem("app", JSON.stringify(remainingApps));
};

export {
  setAppDataToLocal,
  getAppFromLocalStore,
  removeFromLocalStorage as removeApp,
};
