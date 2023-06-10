// eslint-disable-next-line no-unused-vars
import { ADD_TO_CART } from "../Constant";
const initialState = {
  cardData: [],
};

export default function cardItems(State = [], action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("reducer", action);
      return [...State, 
        { cardData: action.data }
      ];
      // eslint-disable-next-line no-unreachable
      break;
    default:
      return State;
  }
}
