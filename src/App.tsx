import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Blog from "./Blog";

function Copyright() {
    return (
        <Typography
            variant="body2"
            align="center"
            sx={{
                color: 'text.secondary',
            }}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}

export default function App() {
    return (
        <Container maxWidth="sm">
            <Blog/>
            <Copyright/>
        </Container>
    );
}
