import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, TextField, Grid, Button } from '@mui/material';

const Login = () => {
    const [login, setLogin] = useState('');
    const [error, setError] = useState(false);

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
        if (e.target.value.trim() === '') {
            setError(true);
        } else {
            setError(false);
        }
    };

    const handleSubmit = () => {
        if (login.trim() === '') {
            setError(true);
        } else {
            // Handle successful login here
            console.log('Login:', login);
        }
    };

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth error={error} variant="outlined">
                    <TextField
                        id="login_nome"
                        label="Login"
                        value={login}
                        onChange={handleLoginChange}
                        aria-describedby="login_nome_helper_text"
                        variant="outlined"
                    />
                    <FormHelperText id="login_nome_helper_text">
                        {error ? 'Login não pode estar vazio' : 'Digite seu login'}
                    </FormHelperText>
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSubmit}
                    style={{ marginTop: '16px' }}
                >
                    Entrar
                </Button>
            </Grid>
        </Grid>
    );
};

export default Login;
