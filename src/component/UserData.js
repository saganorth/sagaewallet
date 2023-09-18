
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserData = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
   
    const fetchRandomUser = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/");
        const data = response.data.results[0]; 
        setUserData(data);
      } catch (error) {
        console.error("Error fetching random user data:", error);
      }
    };

    
    fetchRandomUser();
  }, []);

  return (
    <div>
      <h1> User</h1>
      {userData ? (
        <div>
          <img src={userData.picture.large} alt="User" />
          <p>Name: {userData.name.first} {userData.name.last}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserData;
