import {
  GET_ALL_CONTACTS,
  GET_ALL_CONTACTS_FAILED,
  GET_ALL_CONTACTS_SUCCESS,
} from "../actionsTypes/contactActionsType";

const initialState = {
  loading: false,
  contacts: null,
  errors: null,
};

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CONTACTS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: payload,
      };

    case GET_ALL_CONTACTS_FAILED:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default contactReducer;
