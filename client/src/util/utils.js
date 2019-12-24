
export const objectProcessor = (state, newState) => ({ ...state, ...newState });

export const arrayProcessor = (state, newState) => [...state, newState];

export const saveToken = (data, isTokenNotExist = true) => {
  //console.log(data);
  if (isTokenNotExist) {
    localStorage.setItem("token", data.token.token);
    localStorage.setItem("type", data.token.type);
  }
};

export const removeFromArray = (arr = [], index) => {
  //console.log("arr 1", arr);
  arr.splice(index, 1);
  //console.log("arr 2", arr);

  return arr;
};

export const pathName = () => {
const  myPath= window.location.pathname
  return myPath;
};
export const updateSpacificValue = (array = [], index, updateObj = {}) => {
  let temp = [...array];
  temp[index] = { ...temp[index], updateObj };
  return temp;
};

export const getSaveToken = () => {
  let token = localStorage.getItem("token");
  let type = localStorage.getItem("type");
  return type + " " + token;
};

export const getHeaderToken = () => {
  let token = getSaveToken();
  return {
    headers: {
      Authorization: token
    }
  };
};

export const setCompleteProfile = data => {
  localStorage.setItem("isCompleteProfile", data);
};

export const saveIsLoggedIn = data => {
  localStorage.setItem("isLoggedIn", data);
};

export const saveUserID = data => {
  localStorage.setItem("userID", data);
};

export const getUserID = () => {
  let userID = localStorage.getItem("userID");
  return userID;
};
export const getIsLoggedIn = () => {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn;
};

export const saveAsVerified = data => {
  localStorage.setItem("verified", data);
};
export const getVerified = () => {
  let isLoggedIn = localStorage.getItem("verified");
  return isLoggedIn;
};

export const deleteApiState = data => {
  if (data) {
    return data.deleteApiState();
  }
};

export const deleteAuthState = data => {
  if (data) {
    return data.deleteAuthState();
  }
};

export const checkUser = () => {
  let isLoggedIn = getIsLoggedIn();
  if (localStorage.getItem("token") && isLoggedIn) {
    return true;
  } else {
    return false;
  }
};

export const userCompleteProfile = () => {
  if (localStorage.getItem("isCompleteProfile") === 1) {
    return true;
  } else {
    return false;
  }
};

export const isTokenExist = () => {
  let token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const commaSeparated = data => {
  let ids = "";
  data.map((item, index) => {
    if (index === data.length - 1) {
      ids = ids + item;
    } else {
      ids = ids + item + ",";
    }
  });
  return ids;
};

export const searchInArray = (
  array = [],
  searchValue = "",
  filterValue = ""
) => {
  if (searchValue.length > 2) {
    // //console.log(array, searchValue);
    let result = array.filter((data, index) =>
      data.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return result;
  } else {
    return array;
  }
};
