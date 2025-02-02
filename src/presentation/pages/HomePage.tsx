import React from 'react';
import { Avatar, Button, Container, Paper, styled } from '@mui/material';
import BaseForm from '../components/common/form';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

const HomePage: React.FC = () => {
    const onSubmit = (data: any) => {
        console.log(data);
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));


    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
                <Item>
                    <BaseForm onSubmit={onSubmit}>
                        <TextField label="Name" variant="outlined" fullWidth />
                        <Box mt={2}>
                            <Button variant="contained" type="submit">Submit</Button>
                        </Box>
                    </BaseForm>
                </Item>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }} display={{ xs: 'none', sm: 'block' }}>
                <img style={{ width: "100%" }} className='w-full' alt="login to monitorban" title="login to monitorban" src="./assets/svg/home-page.svg" />
            </Grid>
        </Grid>
    );
};

export default HomePage;
