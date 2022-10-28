import Head from 'next/head'
import client from '../utils/client'
import { useState, useEffect } from 'react'
import { CircularProgress, Grid,  Typography } from '@mui/material'
import ProductItem from '../components/ProductItem'
import { urlForThumbnail } from '../utils/image';
import Layout from '../components/Layout';

export default function Home() {

  const [state, setState] = useState({
    products: [],
    loading: true,
    error: null,
  })

  const { loading, error, products } = state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`);
        setState({ products, loading: false });
      } catch (err) {
        setState({ loading: false, error: err.message });
      }
    };
    fetchData();
  }, []);



  return (
    <Layout>
    {loading ? (
      <CircularProgress />
    ) : error ? (
      <Alert variant="danger">{error}</Alert>
    ) : (
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item md={4} key={product.slug}>
            <ProductItem
              product={product}
             
            ></ProductItem>
          </Grid>
        ))}
      </Grid>
    )}
  </Layout>
  )
}
