import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import employeeService from '../services/employee-service';

const AddEmployee = () => {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [department, setDepartment] = useState('');

    const navigate = useNavigate();

    const {id} = useParams();

    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = {name, location, department, id};
        //If id is present then update
        if(id){
            employeeService.updateEmployee(employee).then(
                (response) => {
                    console.log(response.data);
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
        }
        //else insert new record
        else{
            employeeService.addEmployee(employee).then(
                (response) => {
                    console.log(response.data);
                }           
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            ) 
        } 
        navigate('/');  
        window.location.reload();   
    }

    useEffect(() => {
        if(id){
            employeeService.getOneEmployee(id).then(
                (emp) => {
                    setName(emp.data.name);
                    setLocation(emp.data.location);
                    setDepartment(emp.data.department);
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
        }
    }, []);

    return (
        <div className="container mt-3">
            <h3>Add Employee</h3>
            <hr />
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />

                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        placeholder="Enter Department"
                    />

                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter Location"
                    />
                </div>
                <div >
                    <button onClick={(e) => saveEmployee(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr />
            <Link to="/">Back to List</Link>
        </div>
    )
}

export default AddEmployee
