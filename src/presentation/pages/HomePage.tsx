import React from 'react';
import { Button, Paper, styled, Typography } from '@mui/material';
import BaseForm from '../components/common/old/form';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import TextInput from '../components/common/old/text-input/text-input';

const HomePage: React.FC = () => {
    const onSubmit = (data: any) => {
        console.log(data);
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
        ...theme.applyStyles('dark', {
            backgroundColor: 'background.default',
        }),
    }));


    return (
        <>
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid  size={{ xs: 12, sm: 6 }}>
                    <Item sx={{background:'background.default'}}>
                        <Typography sx={{ color: 'text.primary' }} variant="h1" component="h2">
                            ورود
                        </Typography>
                        <BaseForm onSubmit={onSubmit}>
                            <TextInput label="نام کاربری 2" size='lg' type='outlined' value='' id='' color='text.secondary' background='background.default' />
                            <Box mt={2}>
                                <Button variant="contained" type="submit">Submit</Button>
                            </Box>
                        </BaseForm>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} display={{ xs: 'none', sm: 'block' }}>
                    <img style={{ inlineSize: "100%" }} className='w-full' alt="login to monitorban" title="login to monitorban" src="./assets/svg/home-page.svg" />
                </Grid>
            </Grid>

        </>

    );
};

export default HomePage;
