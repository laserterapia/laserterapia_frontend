import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import Menu from "../components/Menu";
import CardList from "../components/CardList";

import { getAllPatients } from "../redux/actions/home";

const Patients = (props) => {
  const dispatch = useDispatch();

  const patients = useSelector((state) => state.home.patients);
  const token = useSelector((state) => state.main.token);
  const currentUser = useSelector(state => state.main.currentUser);

  function isEmpty(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }

  useEffect(()=> {
    if(isEmpty(currentUser)){
      props.history.push('/')
    }
  })

  useEffect(() => {
    dispatch(getAllPatients(token));
  }, [dispatch, token]);

  return (
    <Menu>
      <CardList list={patients} />
    </Menu>
  );
};

export default withRouter(Patients);
