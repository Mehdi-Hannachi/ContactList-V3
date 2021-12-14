import {
  GET_ALL_CONTACTS,
  GET_ALL_CONTACTS_FAILED,
  GET_ALL_CONTACTS_SUCCESS,
} from "../actionsTypes/contactActionsType";
import axios from "axios";

export const getAllContacts = () => async (dispatch) => {
  dispatch({ type: GET_ALL_CONTACTS });

  try {
    const res = await axios.get("/contact/getContacts");

    dispatch({ type: GET_ALL_CONTACTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ALL_CONTACTS_FAILED, payload: error.res });
  }
};
