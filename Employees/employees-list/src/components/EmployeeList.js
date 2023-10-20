import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import employeeService from '../services/employee-service';
import { Link } from 'react-router-dom';

const EmployeeList = () => {

  const [employe, setEmploye] = useState([]);

  const init = () => {
    employeeService.getAllEmployee().then(
      (response) => {
        console.log(response.data);
        setEmploye(response.data);
      }
    )
      .catch(
        (error) => {
          console.log(error);
        }
      )
  }

  useEffect(() => {
    init();
  }, [])

  const handleDelete = (id) => {
    console.log('Printing id', id);
    employeeService.deleteEmployee(id)
      .then(response => {
        console.log('employee deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className='container mt-3'>
      <h3>List of Employees</h3>
      <hr />
      <div>
        <Link to="/add-employee" className='btn btn-primary mb-2'>
          Add Employee
        </Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              employe.map(e => (
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{e.location}</td>
                  <td>{e.department}</td>
                  <td>
                    <Link className='btn btn-info' to={`/employees/edit/${e.id}`}>Update</Link>
                    <button className="btn btn-danger ml-2" onClick={() => {
                      handleDelete(e.id);
                    }}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeeList
