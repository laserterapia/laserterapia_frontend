import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import Menu from "../components/Menu";
import CardList from "../components/CardList";

import { getAllPatients } from "../redux/actions/home";

import plus_icon from '../assets/images/plus_icon.png';
import "../styles/pages/patients.css"

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
      <div className="plus_icon_div" onClick={() => alert('OI')}>
        <img className="plus_icon" src={plus_icon}></img>
      </div>
      <CardList list={patients} />
    </Menu>
  );
};

export default withRouter(Patients);
