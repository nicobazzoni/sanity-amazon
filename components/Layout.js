
import {AppBar,Box, Container, CssBaseline, Link, ThemeProvider, Toolbar, Typography}  from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Head from 'next/head';
import NextLink from 'next/link';
import classes from '../utils/classes';
import { useContext} from 'react';
import { Store } from '../utils/Store';


export default function Layout({title, description ,children}) {
    
    const { state, dispatch } = useContext(Store);    
    const { darkMode } = state
    
    const theme = createTheme({
        typography: {
            components: {
                MuiLink: {
                    defaultProps: {
                        underline: 'hover',
                },
            },
            },
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0'
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0'
            },

        },
        palette: {
            mode: darkMode? 'dark' : 'light',
            primary: {
                main: '#f0c040'
            },
            secondary: {
                main: '#208080'
            },

        },
    });

    return (

        <>

        <Head>
            <title>{title ? `${title} - BAMBAZON` : 'BAMBAZON'}</title>
            {description && <meta name='description' content={description} />}
        </Head>
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <AppBar position="static" sx={classes.appbar}>
                <Toolbar sx={classes.toolbar}>
                    <NextLink href="/" passHref>
                        <Link>

                        <Typography sx={classes.brand}>BAMBAZON</Typography>
                        
                        </Link>
                    </NextLink>
                    </Toolbar>
                    </AppBar>
                    <Container  sx={classes.main} component='main'> {children}
                    </Container>
                        <Box  component="footer"sx={classes.footer}>
                            <Typography>All rights reserved. BAMBAZON</Typography>


                        </Box>

                   
                
                </ThemeProvider >
    </>
        
    )
}