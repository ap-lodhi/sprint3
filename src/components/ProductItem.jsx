import React, { useContext } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartContext } from "../context/CartContext";

const ProductItem = ({name, description , id}) => {
 
 const   {cart, handleAddToCart, handleIDecrement, handleIncrement, handleRemove}=useContext(CartContext)
 const noOfCount =cart.find((el)=>el.productId === id)?.count;
 return <div>
  
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
       
        <Typography variant="h5" component="div">
        {name}
        </Typography>
        {/* <Typography variant="h5" component="div">
          benevolent
        </Typography> */}
        <Typography variant="body2">
         {description}
          <br />
        
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        id-  {id}
        </Typography>
        <div> {cart.find((el)=>el.productId === id)?.count} </div>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
      {"toatal count"}
        </Typography> */}
      </CardContent>

      <Button  onClick={()=>handleAddToCart(id)}>
      <IconButton  disabled={!!noOfCount}  color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      </Button>
      <Button   disabled={!noOfCount}  onClick={()=>handleRemove(id)} variant="outlined" startIcon={<DeleteIcon />}> Delete</Button>
      <br />
      <Button  disabled={!noOfCount}  onClick={()=>handleIncrement(id)} variant="contained">Increment</Button>
      <Button  disabled={!noOfCount} onClick={()=>handleIDecrement(id)} variant="contained">Decrement</Button>
    </Card>
  

    

    

  </div>;
};

export default ProductItem;
