import { useReducer } from "react";

const convertToNumber = (text) => {
  let number = Number(text);

  return { isNumber: !isNaN(number), number };
};

const maxHeight = 260;
const maxWeight = 300;
const maxAge = 120;

const reducer = (oldState, { type, payload }) => {
  switch (type) {
    case "SET_HEIGHT": {
      let newState = { ...oldState };
      const { isNumber, number } = convertToNumber(payload);

      if (isNumber && number <= maxHeight) {
        newState.height = number;
      }

      return newState;
    }
    case "SET_WEIGHT": {
      let newState = { ...oldState };
      const { isNumber, number } = convertToNumber(payload);

      if (isNumber && number <= maxWeight) {
        newState.weight = number;
      }

      return newState;
    }
    case "SET_AGE": {
      let newState = { ...oldState };
      const { isNumber, number } = convertToNumber(payload);

      if (isNumber && number <= maxAge) {
        newState.age = number;
      }

      return newState;
    }
    case "SET_GENDER":
      return { ...oldState, gender: payload };
    default:
      return oldState;
  }
};

export const UseProfile = (profileData) => {
  const [profile, dispatch] = useReducer(reducer, profileData);

  const setHeight = (height) => {
    let action = { type: "SET_HEIGHT", payload: height };
    dispatch(action);
  };
  const setWeight = (weight) => {
    dispatch({ type: "SET_WEIGHT", payload: weight });
  };
  const setAge = (age) => {
    dispatch({ type: "SET_AGE", payload: age });
  };
  const setGender = (gender) => {
    dispatch({ type: "SET_GENDER", payload: gender });
  };

  return {
    profile,
    setHeight,
    setWeight,
    setAge,
    setGender,
  };
};
