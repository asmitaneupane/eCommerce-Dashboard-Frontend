import { useState } from "react"
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import AddProducts from './pages/AddProducts';
import UpdateProducts from './pages/UpdateProducts';
import Logout from './components/Logout';
import Profile from './components/Profile';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const [error, setError] = useState(false);

  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent />} >
            <Route path='/' element={<Products
              products={products}
              setProducts={setProducts}
            />} />
            <Route path='/add' element={<AddProducts
              name={name}
              setName={setName}
              price={price}
              setPrice={setPrice}
              category={category}
              setCategory={setCategory}
              company={company}
              setCompany={setCompany}
              error={error}
              setError={setError}
            />} />
            <Route path='/update/:id' element={<UpdateProducts
              name={name}
              setName={setName}
              price={price}
              setPrice={setPrice}
              category={category}
              setCategory={setCategory}
              company={company}
              setCompany={setCompany}
              error={error}
              setError={setError}
            />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/profile' element={<Profile />} />
          </Route>

          <Route path='/signup' element={<SignUp
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />} />
          <Route path='/login' element={<Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />} />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
