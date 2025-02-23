import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import UserSearch from "./UserSearch";
import SearchBarLoction from "./SearchBarLoction";
import Card from "./Card";

const UserMainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const LoggedUser = JSON.parse(localStorage.getItem("userData"));
    if (!LoggedUser) {
      navigate("/Auth/Login");
    } else if (LoggedUser.role === "admin") {
      navigate("/AdminDashboard/EnterpriseAi");
    }
    else if(LoggedUser.role === "technician"){
      navigate('/User/StoreDetails');
    }
    else{
      navigate('/');
    }
  }, [navigate]);  // Removed LoggedUser from dependency array

  return (
    <>
      <NavBar />
      <UserSearch />
      <SearchBarLoction />
      <Card />
    </>
  );
};

export default UserMainPage;
