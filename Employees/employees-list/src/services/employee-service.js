import httpCommon from "../api/http-common";

const getAllEmployee = () => {
    return httpCommon.get("/employees");
}

const addEmployee = (data) => {
    return httpCommon.post("/employees", data);
}

const getOneEmployee = (id) => {
    return httpCommon.get(`/employees/${id}`);
}

const updateEmployee = (data) => {
    return httpCommon.put("/employees", data);
}

const deleteEmployee = (id) => {
    return httpCommon.delete(`/employees/${id}`);
}

export default {getAllEmployee, addEmployee, getOneEmployee, updateEmployee, deleteEmployee};