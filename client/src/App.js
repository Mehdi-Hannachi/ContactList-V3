import "./App.css";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "./JS/actions/contactsActions";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactReducer.contacts);
  // const [contacts, setContacts] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const res = await axios.get("/contact/getContacts");
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // fetchData();
    dispatch(getAllContacts());
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
};

export default App;
