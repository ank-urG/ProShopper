import Header from './component/Header'
import Footer from './component/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'

const App = () => {
  return (
    <Router>
      <Header />

      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/order/:id' element={<OrderScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route path='/' element={<HomeScreen />} exact />
            {/* <Route path='/cart/:id?qty' element={<CartScreen />} /> */}
          </Routes>
        </Container>
      </main>

      <Footer />
    </Router>
  )
}

export default App
