import { useParams } from "react-router-dom";
import Header from "../components/Header";

const EmployeeDetails = () => {
  const employeesObj = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Developer",
      department: "IT",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Designer",
      department: "Design",
    },
    {
      id: 3,
      name: "Bob Johnson",
      designation: "Project Manager",
      department: "Management",
    },
  ];

  const { empId } = useParams();
  console.log(empId);

  const selectedEmployee = employeesObj.find((emp) => emp.id == empId);

  return (
    <>
      <Header />
      <main className="container">
        <h2 className="my-3">{selectedEmployee.name}</h2>
        <ul className="list-group my-3">
          <li className="list-group-item">
            <strong>Name: </strong>
            {selectedEmployee.name}
          </li>
          <li className="list-group-item">
            <strong>Designtion: </strong>
            {selectedEmployee.designation}
          </li>
          <li className="list-group-item">
            <strong>Department: </strong>
            {selectedEmployee.department}
          </li>
        </ul>
      </main>
    </>
  );
};
export default EmployeeDetails;
