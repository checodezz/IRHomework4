import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main className="container my-5">
        <div className="my-5">
          <img
            src="https://placehold.co/400x300?text=Employees Smiling"
            alt="company employees"
            className="img-fluid"
          />
        </div>
        <div className="my-5">
          <h2>Our Employees</h2>
          <p>
            Meet our dedicated team of professionals who work tirelessly to
            achieve our company's goals.
          </p>
          <Link to="/employees" className="btn btn-primary">
            View Employees
          </Link>
        </div>
        <div className="my-5">
          <h2>Company Report</h2>
          <p>
            Explore our latest financial report to gain insights into our
            company's performance and growth.
          </p>
          <Link to="/report" className="btn btn-primary">
            View Report
          </Link>
        </div>
      </main>
      <Footer/>
    </>
  );
}
