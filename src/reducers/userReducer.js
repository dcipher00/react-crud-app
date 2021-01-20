const userReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_USER":
        let stateCopy = [...state, action.payload];
        localStorage.setItem("users", JSON.stringify(stateCopy));
        return stateCopy;
  
      case "DELETE_USER":
        stateCopy = state.filter((x) => x.id !== action.payload);
        localStorage.setItem("users", JSON.stringify(stateCopy));
        return stateCopy;
  
      case "UPDATE_USER":
        stateCopy = state.map((user) => {
          const { id, name, Dob, city, phone } = action.payload;
          if (user.id === id) {
            user.name = name;
            user.Dob = Dob;
            user.city = city;
            user.phone = phone;
          }
          return user;
        });
        localStorage.setItem("users", JSON.stringify(stateCopy));
        return stateCopy;
  
      default:
        return state;
    }
  };
  export default userReducer;
  