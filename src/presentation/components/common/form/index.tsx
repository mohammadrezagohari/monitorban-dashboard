import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Box } from '@mui/material';
import { IBaseFormProps } from './type';
import { IFormValues } from './IFormValues';


const BaseForm: React.FC<IBaseFormProps> = ({ onSubmit, defaultValues, children }) => {
  const { register, handleSubmit } = useForm<IFormValues>({ defaultValues });

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          register,
        });
      })}
      <Button variant="contained" type="submit">ثبت</Button>
    </Box>
  );
};

export default BaseForm;
