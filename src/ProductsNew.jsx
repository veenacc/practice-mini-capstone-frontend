export function ProductsNew() {
  return (
    <div>

      <h1>New Product</h1>

      <form>
        <label htmlFor="title">Name</label><br />
        <input type="text" id="title" name="title"></input><br />
        {/* <label htmlFor="body">Body</label><br />
            <input type="text" id="body" name="body"></input><br /> */}
        <label htmlFor="image">Image</label><br />
        <input type="url"></input>
        {/*Can add id and name */}
      </form>
    </div>
  );
}
