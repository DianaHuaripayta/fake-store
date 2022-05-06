import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import { useParams, Link} from'react-router-dom'
import axios from "axios";
import {selectedProducts, removeSelectedProducts} from '../redux/actions/productActions'
import { Spinner } from './Spinner'
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function ProductsDetails() {
  const {productId} = useParams();
  let product = useSelector((state) => state.selectedProduct);
  const { image, title, price, category, description } = product;
const dispatch = useDispatch();
const fetchProductDetail = async (id) => {
  const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .catch((err) => {
      console.log("Err: ", err);
    });
  dispatch(selectedProducts(response.data));
};
  useEffect(()=>{
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProducts());
    };
  },[productId])

  return (
    <>
    <Box
      sx={{marginTop:'20px', marginLeft:'20px'}}>
      <Link to={'/'} >
      <Button variant="contained">Back</Button>
     </Link>
    </Box>
    
    
    <div >
      {Object.keys(product).length === 0 ? (
        <Spinner/>
      ) : (
        <Box
        sx={{
          maxWidth: '1138px',
          margin: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        <Box
        sx={{
          width: '300px',
        }}
        >
          <Typography gutterBottom variant="h6" component="div">
            {title}
            </Typography>
          <CardMedia
            component="img"
            sx={{ minWidth:'20px'}}
            image={image}
            alt={title} />  
        </Box>

        <Box
        sx={{
          width: '320px', 
        }}>
          
          <h3 className="ui brown block header">{category}</h3>
          <Typography sx={{fontWeight:'bolder'}}>${price}</Typography>
          <p>{description}</p>
            <Button variant="contained">Add to Cart</Button>
        </Box>       
      </Box>
      )}
    </div>
    </>
  );
}

export default ProductsDetails