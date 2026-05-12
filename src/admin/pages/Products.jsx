const Products = () => {
  return (
    <div>

      <h2 className="mb-4">Products</h2>

      <div className="dashboard-box">

        <table className="table table-hover">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Apple</td>
              <td>$10</td>
              <td><span className="badge bg-success">Active</span></td>
            </tr>

            <tr>
              <td>2</td>
              <td>Banana</td>
              <td>$5</td>
              <td><span className="badge bg-warning">Pending</span></td>
            </tr>
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Products;