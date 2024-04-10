import Header from "../components/Header";

const Report = () => {
  return (
    <>
      <Header />
      <main className="container my-4">
        <h2 >HR Report</h2>
        <hr />
        <div className="row ">
          <div className="col-md-12 d-flex justify-content-between">
            <div className="card-body m-4">
              <h3>Most Worked Employee</h3>
              <p>Name: John Doe</p>
              <p>Hours Worked: 210</p>
            </div>
            <div className="card-body m-4">
              <h3>Highest Rated Employee</h3>
              <p>Name: Jane Smith</p>
              <p>Hours Worked: 0.95</p>
            </div>
            <div className="card-body m-4">
              <h3>Total Overtime Hours</h3>
              <p>Total Overtime Hours: 35</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Report;
