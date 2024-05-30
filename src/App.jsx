// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function Header() {
  return(
    <div>
      <header> 
        <a href="#">Home</a> | <a href="#products-index">All Products</a> | <a href="#products-new">New Product</a>
      </header>
    </div>
  );
}

function ProductsNew() {
  return(
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

function ProductsIndex() {

  // let products = [{id:1, name:"apple", image:"https://t3.ftcdn.net/jpg/01/76/97/96/360_F_176979696_hqfioFYq7pX13dmiu9ENrpsHZy1yM3Dt.jpg"}];

  return (
    <div>
      <h1>Apples</h1>
      <img src="https://t3.ftcdn.net/jpg/01/76/97/96/360_F_176979696_hqfioFYq7pX13dmiu9ENrpsHZy1yM3Dt.jpg"></img>
      <br />
      <h1>Oranges</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ambersweet_oranges.jpg/800px-Ambersweet_oranges.jpg" height="400" width="400" ></img>
      <br />
    </div>
  );

}

function Footer() {
  return(
    <div>
       <footer>
      <p>Copyright 20XX</p>
      </footer>
    </div>
  );
}

function Content() {
  return (
    <main>
      <ProductsNew />
      <ProductsIndex />
    </main>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
