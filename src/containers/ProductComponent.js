import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products)
  
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Card key={id}
            sx={{ maxWidth: 230, margin:'29px',
            '&:hover': {
              opacity: [0.9, 0.8, 0.7],
            }
            }}>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
            {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            ${price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {category}
            </Typography>
          </CardContent>
          <Box
          sx={{
            display: 'flex',
            justifyContent:'space-evenly',
            
          }}>

            <Button variant="outlined" color="primary">Add</Button>
            
            <Link to={`product/${id}`} >
            <Button variant="outlined" color="primary">Read More </Button>
            </Link>
           
          </Box>
      </Card>
    );
  });
  return (
    <Box
    sx={{
      width: '92vw',
      margin: '28px auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent:'space-between'
    }}
  >
    {renderList}
  </Box>
    
  )
}

export default ProductComponent