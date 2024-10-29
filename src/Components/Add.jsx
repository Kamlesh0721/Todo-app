function Add() {
  return (
    <div className="container">
      <div className="row add-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Task" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn add-btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Add;
