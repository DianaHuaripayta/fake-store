import React,{useState} from 'react'
import ProductComponent from './ProductComponent'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';
import { Spinner } from './Spinner';
const  ProductListing = () => {
   const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
        setLoading(false)
      
    dispatch(setProducts(response.data));
  };
  
  useEffect(() => {
  fetchProducts();
  
  }, []);
  

  return loading ?(<Spinner></Spinner>): (<ProductComponent/>)
}

export default ProductListing
