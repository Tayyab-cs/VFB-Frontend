import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";

const AdminHome = (data) => {
  const [registeredData, setRegisteredData] = useState([]);

  useEffect(() => {
    const registerFunction = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/register/getAllUsers"
        );

        if (response.status === 201) {
          console.log(response);
          setRegisteredData(response.data.result);
          console.log(registeredData);
          // alert("users find successful.");
        }
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    };
    registerFunction();
  }, [registeredData]);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(
        `http://localhost:5001/api/register/deleteUser/${id}`
      );

      if (response.status === 201) {
        alert("User Delete Successfully");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Weight</th>
          <th>Gender</th>
          <th>City</th>
          <th>CNIC</th>
          <th>Contact No</th>
          <th>Category ID</th>
          <th></th>
        </tr>
      </thead>
      {registeredData.map((items) => {
        return (
          <tbody>
            <tr>
              <td>{items.firstName}</td>
              <td>{items.lastName}</td>
              <td>{items.age}</td>
              <td>{items.weight}</td>
              <td>{items.gender}</td>
              <td>{items.city}</td>
              <td>{items.cnic}</td>
              <td>{items.contact}</td>
              <td>{items.regCategoryId}</td>
              <div>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(items._id)}
                >
                  X
                </Button>
              </div>
            </tr>
          </tbody>
        );
      })}
    </Table>
  );
};

export default AdminHome;
