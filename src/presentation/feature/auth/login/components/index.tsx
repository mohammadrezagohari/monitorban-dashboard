// // src/Login.tsx
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../../../../store/authSlice'; 
// import { TextField, Button, Typography, Container } from '@mui/material';

// const Login: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const dispatch = useDispatch();

//   const handleLogin = () => {
//     dispatch(login(username));
//     setUsername('');
//   };

//   return (
//     <Container maxWidth="xs">
//       <Typography variant="h5">ورود</Typography>
//       <TextField
//         label="نام کاربری"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <Button variant="contained" color="primary" onClick={handleLogin}>
//         ورود
//       </Button>
//     </Container>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // اینجا باید منطق ورود کاربر رو پیاده‌سازی کنیم
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          ورود
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="نام کاربری"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="کلمه عبور"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            ورود
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
