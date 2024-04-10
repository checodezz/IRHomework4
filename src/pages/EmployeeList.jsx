import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const EmployeeList = () => {
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

  return (
    <>
      <Header />
      <main className="container">
        <h2 className="my-3">List of Employees</h2>
        <ul className="list-group">
          {employeesObj.map((emp) => (
            <li className="list-group-item" key={emp.id}>
              <h5>{emp.name}</h5>
              <p>{emp.designation}</p>
              <Link to={`/employees/${emp.id}`} className="btn btn-primary">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};
export default EmployeeList;
