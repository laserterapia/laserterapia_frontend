import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader";
import { getAllUsers } from "../redux/actions/home";
import Menu from '../components/Menu'

const Home = () => {
  const dispatch = useDispatch();

  const users = useSelector(state => state.home.users);
  const token = useSelector(state => state.main.token);

  useEffect(() => {
    dispatch(getAllUsers(token));
  }, [token]);

  return <Menu>
    <div>

    </div>
  </Menu>;
};

export default Home;
