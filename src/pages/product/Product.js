

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../../redux/action/ProductAction';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import CardHeader from '@mui/material/CardHeader';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Collapse from '@mui/material/Collapse';
// import Grid from '@mui/material/Grid';
// import Pagination from '@mui/material/Pagination';
// import Loading from '../../components/Loading';
// import { toast } from 'react-toastify';
// import { message, toaststyle } from '../../constant/Message'
// import { useNavigate } from 'react-router-dom';

// const Product = () => {
//   const dispatch = useDispatch();
//   const products = useSelector(state => state.products);
//   const error = useSelector(state => state.error);
//   const [expanded, setExpanded] = useState(null);
//   const [page, setPage] = useState(1);
//   const productsPerPage = 8;
//   const [loading, setLoading] = useState(true);
//   const [likeStatus, setLikeStatus] = useState({});
//   const navigat = useNavigate();


//   const nextPage = () => {
//     navigat('/product-detail')
//   }


//   const likeBtn = (productId) => {
//     setLikeStatus(prevState => {
//       const newState = {
//         ...prevState,
//         [productId]: !prevState[productId] || false
//       };

//       if (!prevState[productId]) {
//         toast.info(message.LIKE, {
//           ...toaststyle,
//         });
//       } else {
//         toast.warning(message.DISLIKE, {
//           ...toaststyle,
//         });
//       }

//       return newState;
//     });
//   };

//   useEffect(() => {
//     dispatch(fetchProducts())
//       .then(() => setLoading(false))
//       .catch(() => setLoading(false));
//   }, [dispatch]);


//   const handlePageChange = (event, value) => {
//     setPage(value);
//   };

//   if (loading) {
//     return (
//       <div>
//         <Loading />
//       </div>
//     );
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   // Calculate start and end index for the current page
//   const startIndex = (page - 1) * productsPerPage;
//   const endIndex = startIndex + productsPerPage;
//   const currentProducts = products.slice(startIndex, endIndex);

//   return (
//     <div>
//       <h1>
//         <center>Product List</center>
//       </h1>
//       <Grid container spacing={2} margin='0.5px' >
//         {currentProducts.map((product, index) => (
//           <Grid item key={startIndex + index} xs={12} sm={6} md={4} lg={3}>
//             <Card >
//               <CardHeader
//                 action={
//                   <IconButton aria-label="share" color='primary' >
//                     <ShareIcon />
//                   </IconButton>
//                 }
//               />
//               <CardMedia
//                 component="img"
//                 height="290"
//                 image={product.thumbnail}
//                 onClick={nextPage}
//                 sx={{ width: 'full', marginTop: '-20px' }}
//                 alt={product.title}
//               />
//               <CardContent>
//                 <Typography variant="body2" color="text.primary">
//                   {product.title} - {product.price}
//                 </Typography>
//                 <Typography variant="h6" color="text.primary">
//                   Know More
//                 </Typography>
//               </CardContent>
//               <CardActions disableSpacing>
//                 <IconButton aria-label="add to favorites" onClick={() => likeBtn(product.id)}>
//                   {likeStatus[product.id] ? <FavoriteIcon color='error' /> : <FavoriteBorderOutlinedIcon color='error' />}
//                 </IconButton>
//                 <IconButton
//                   sx={{ marginLeft: '5%' }}
//                   aria-expanded={expanded === index}
//                   aria-label="show more"
//                   onClick={() => setExpanded(expanded === index ? null : index)}
//                 >
//                   <ExpandMoreIcon />
//                 </IconButton>
//               </CardActions>
//               <Collapse in={expanded === index} timeout="auto" unmountOnExit>
//                 <CardContent>
//                   <Typography paragraph>Detail: {product.description}</Typography>
//                   <Typography paragraph>Brand: {product.brand}</Typography>
//                   <Typography paragraph>Category: {product.category}</Typography>
//                   <Typography paragraph>Rating: {product.rating}</Typography>
//                   <Typography paragraph>Stock: {product.stock}</Typography>
//                 </CardContent>
//               </Collapse>
//             </Card>

//           </Grid>
//         ))}
//       </Grid>
//       <Pagination
//         sx={{ marginLeft: '43%' }}
//         count={Math.ceil(products.length / productsPerPage)}
//         page={page}
//         onChange={handlePageChange}
//         variant="outlined"
//         shape="rounded"
//       />
//     </div>
//   );
// };

// export default Product;  // without click



import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/action/ProductAction';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';
import { message, toaststyle } from '../../constant/Message'

import { Link } from 'react-router-dom';

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const error = useSelector(state => state.error);
  const [expanded, setExpanded] = useState(null);
  const [page, setPage] = useState(1);
  const productsPerPage = 8;
  const [loading, setLoading] = useState(true);
  const [likeStatus, setLikeStatus] = useState({});


  const likeBtn = (productId) => {
    setLikeStatus(prevState => {
      const newState = {
        ...prevState,
        [productId]: !prevState[productId] || false
      };

      if (!prevState[productId]) {
        toast.info(message.LIKE, {
          ...toaststyle,
        });
      } else {
        toast.warning(message.DISLIKE, {
          ...toaststyle,
        });
      }

      return newState;
    });
  };

  useEffect(() => {
    dispatch(fetchProducts())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);


  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Calculate start and end index for the current page
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div>
      <h1>
        <center>Product List</center>
      </h1>
      <Grid container spacing={2} margin='0.5px' >
        {currentProducts.map((product, index) => (
          <Grid item key={startIndex + index} xs={12} sm={6} md={4} lg={3}>
            <Card >
              <CardHeader
                action={
                  <IconButton aria-label="share" color='primary' >
                    <ShareIcon />
                  </IconButton>
                }
              />


<Link to={`/product-detail/${product.id}`}>
<CardMedia
  component="img"
  height="290"
  image={product.thumbnail}
  alt={product.title}
  sx={{
    width: 'full',
    marginTop: '-20px',
    // border: '1px solid #333', 
     border: '2px solid #ccc',
    borderRadius: '2px', 
    padding:'5px'
  }}
/>

            </Link>
              <CardContent>
                <Typography variant="body2" color="text.primary">
                  {product.title} - {product.price}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  Know More
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={() => likeBtn(product.id)}>
                  {likeStatus[product.id] ? <FavoriteIcon color='error' /> : <FavoriteBorderOutlinedIcon color='error' />}
                </IconButton>
                <IconButton
                  sx={{ marginLeft: '5%' }}
                  aria-expanded={expanded === index}
                  aria-label="show more"
                  onClick={() => setExpanded(expanded === index ? null : index)}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Detail: {product.description}</Typography>
                  <Typography paragraph>Brand: {product.brand}</Typography>
                  <Typography paragraph>Category: {product.category}</Typography>
                  <Typography paragraph>Rating: {product.rating}</Typography>
                  <Typography paragraph>Stock: {product.stock}</Typography>
                </CardContent>
              </Collapse>
            </Card>

          </Grid>
        ))}
      </Grid>
      <Pagination
        sx={{ marginLeft: '43%' }}
        count={Math.ceil(products.length / productsPerPage)}
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default Product;  // without click

