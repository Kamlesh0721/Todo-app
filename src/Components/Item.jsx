function Item() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">Buy Milk</div>
        <div className="col-4">28/10/24</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Item;
