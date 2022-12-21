import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home'
import Food from '../components/singleFoodpage/singleFood'
import UserProfile from '../components/userProfile/user/User'
import RestaurantList from '../components/Restaurant/RestList'
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Cart  from '../components/Cart/Cart';

//Unit 1
test('Should render Home Component', () => {
  render(<Home />);
  const homeBtn = screen.getByText(/home/i);

  expect(homeBtn).toBeInTheDocument();
});

//Unit 2
test('Should render Login component', () => {
  render(<Login/>);
  const login= screen.getByText("Login");

  expect(login).toBeInTheDocument();
});

//Unit 3
test('Should render Registration component', () => {
  render(<Register/>);
  const Reg= screen.getByText("Register");

  expect(Reg).toBeInTheDocument();
});

//unit test 4
test('Should render  Resturant Component', () => {
  render(<RestaurantList/>);
  const rest= screen.getByText("VIEW MENU");
  

  expect(rest).toBeInTheDocument();
});

//Unit 5
test('Should render Cart Component', () => {
  render(<Cart/>);
  const cart= screen.getByText("CHECKOUT NOW");
  

  expect(cart).toBeInTheDocument();
});

//unit test 6
test('Should render  User Profile component', () => {
  render(<UserProfile/>);
  const profile = screen.getByText("Edit User");

  expect(profile).toBeInTheDocument();
});


//unit test 7
test('Should render Food component', () => {
  render(<Food />);
  const food = screen.getByText("ADD TO CART");

  expect(food).toBeInTheDocument();
});


