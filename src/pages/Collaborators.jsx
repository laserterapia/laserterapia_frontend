import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import Menu from "../components/Menu";
import CardList from "../components/CardList";
import UserFieldRegister from "../components/UserFieldRegister";

import { getAllUsers } from "../redux/actions/home";

const Collaborators = (props) => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.home.users);
  const token = useSelector((state) => state.main.token);
  const currentUser = useSelector(state => state.main.currentUser);

  function isEmpty(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }

  useEffect(() => {
    if (isEmpty(currentUser)) {
      props.history.push('/')
    }
  })

  useEffect(() => {
    dispatch(getAllUsers(token));
  }, [dispatch, token]);

  return (
    <Menu>
      {currentUser.role === 'admin' &&
        <UserFieldRegister />
       }      
       <CardList type="collaborator" list={users} />
    </Menu>
  );
};

export default withRouter(Collaborators);
