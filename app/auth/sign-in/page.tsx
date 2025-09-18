'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, type SignupInput } from '@/lib/validation';
import { signIn } from 'next-auth/react';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  Link as MuiLink,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import placeholder from '@/public/placeholder.jpg'; // замени на нужную картинку, если нужно точь-в-точь

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  const defaults: SignupInput = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    newsletter: false
  };

  const { control, handleSubmit, formState, reset } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: defaults,
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  });

  const switchMode = (m: 'login' | 'signup') => {
    reset(defaults, {
      keepDirty: false,
      keepTouched: false,
      keepErrors: false,
      keepIsSubmitted: false,
      keepSubmitCount: false
    });
    setMode(m);
  };

  const onSubmit = async () => {
    window.location.href = '/landing';
  };

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Grid container justifyContent="center" width={'100%'}>
        <Grid xs={12} md={10} lg={8}>
          <Card
            elevation={1}
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              mx: 'auto'
            }}
          >
            <Grid container spacing={0} sx={{ alignItems: 'stretch' }}>
              <Grid
                xs={12}
                md={6}
                sx={{
                  width: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: { md: 'clamp(520px, 70vh, 760px)' }
                }}
              >
                <CardContent sx={{
                  width: '100%', p: { xs: 3, md: 4 }, height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly'
                }}>
                  <Typography variant="h6" sx={{ mb: 0.5 }}>
                    {mode === 'signup' ? 'Create an account' : 'Welcome back'}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {mode === 'signup' ? (
                      <>
                        Already have an account?{' '}
                        <MuiLink
                          component="button"
                          underline="hover"
                          onClick={() => switchMode('login')}
                        >
                          Log in
                        </MuiLink>
                      </>
                    ) : (
                      <>
                        New user?{' '}
                        <MuiLink
                          component="button"
                          underline="hover"
                          onClick={() => switchMode('signup')}
                        >
                          Sign up!
                        </MuiLink>
                      </>
                    )}
                  </Typography>

                  <Stack spacing={1.2} sx={{ mb: 2 }}>
                    <Button
                      variant="outlined"
                      fullWidth
                      startIcon={<FaFacebook size={20} color="#1877F2" />}
                      onClick={() => signIn('facebook', { callbackUrl: '/landing' })}
                      sx={{ borderRadius: 999, py: 1.1 }}
                    >
                      Continue with Facebook
                    </Button>
                    <Button
                      variant="outlined"
                      fullWidth
                      startIcon={<FaGoogle size={20} color="#EA4335" />}
                      onClick={() => signIn('google', { callbackUrl: '/landing' })}
                      sx={{ borderRadius: 999, py: 1.1 }}
                    >
                      Continue with Google
                    </Button>
                    <Button
                      variant="outlined"
                      fullWidth
                      startIcon={<FaTwitter size={20} color="#1DA1F2" />}
                      onClick={() => signIn('twitter', { callbackUrl: '/landing' })}
                      sx={{ borderRadius: 999, py: 1.1 }}
                    >
                      Continue with Twitter
                    </Button>
                  </Stack>

                  <Divider>
                    Or
                  </Divider>

                  <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2} sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-around'
                    }}>
                      {mode === 'signup' && (
                        <>
                          <Grid xs={12} md={6}>
                            <Controller
                              name="firstName"
                              control={control}
                              render={({ field, fieldState }) => (
                                <Box sx={{ width: { xs: '100%', md: 200 } }}>
                                  <TextField
                                    label="First Name"
                                    fullWidth
                                    {...field}
                                    error={(formState.isSubmitted || fieldState.isTouched) && !!fieldState.error}
                                    helperText={(formState.isSubmitted || fieldState.isTouched) ? fieldState.error?.message : undefined}
                                    slotProps={{
                                      formHelperText: {
                                        sx: {
                                          overflow: 'hidden',
                                          textOverflow: 'ellipsis',
                                          whiteSpace: 'nowrap',
                                          display: 'block',
                                          maxWidth: '100%',
                                          m: 0,
                                          mt: 0.5
                                        }
                                      }
                                    }}
                                  />
                                </Box>
                              )}
                            />

                          </Grid>
                          <Grid xs={12} md={6}>
                            <Controller
                              name="lastName"
                              control={control}
                              render={({ field, fieldState }) => (
                                <Box sx={{ width: { xs: '100%', md: 200 } }}>
                                  <TextField
                                    label="Last Name"
                                    fullWidth
                                    {...field}
                                    error={(formState.isSubmitted || fieldState.isTouched) && !!fieldState.error}
                                    helperText={(formState.isSubmitted || fieldState.isTouched) ? fieldState.error?.message : undefined}
                                    slotProps={{
                                      formHelperText: {
                                        sx: {
                                          overflow: 'hidden',
                                          textOverflow: 'ellipsis',
                                          whiteSpace: 'nowrap',
                                          display: 'block',
                                          maxWidth: '100%',
                                          m: 0,
                                          mt: 0.5
                                        }
                                      }
                                    }}
                                  />
                                </Box>
                              )}
                            />

                          </Grid>
                        </>
                      )}

                      <Grid xs={12} md={mode === 'signup' ? 12 : 6}>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field, fieldState }) => (
                            <Box sx={{ width: { xs: '100%', md: 200 } }}>
                              <TextField
                                label="Email"
                                type="email"
                                fullWidth
                                {...field}
                                error={(formState.isSubmitted || fieldState.isTouched) && !!fieldState.error}
                                helperText={(formState.isSubmitted || fieldState.isTouched) ? fieldState.error?.message : undefined}
                                slotProps={{
                                  formHelperText: {
                                    sx: {
                                      overflow: 'hidden',
                                      textOverflow: 'ellipsis',
                                      whiteSpace: 'nowrap',
                                      display: 'block',
                                      maxWidth: '100%',
                                      m: 0,
                                      mt: 0.5
                                    }
                                  }
                                }}
                              />
                            </Box>
                          )}
                        />
                      </Grid>

                      <Grid xs={12} md={mode === 'signup' ? 12 : 6}>
                        <Controller
                          name="password"
                          control={control}
                          render={({ field, fieldState }) => (
                            <Box sx={{ width: { xs: '100%', md: 200 } }}>
                              <TextField
                                label="Password"
                                type="password"
                                fullWidth
                                {...field}
                                error={(formState.isSubmitted || fieldState.isTouched) && !!fieldState.error}
                                helperText={(formState.isSubmitted || fieldState.isTouched) ? fieldState.error?.message : undefined}
                                slotProps={{
                                  formHelperText: {
                                    sx: {
                                      overflow: 'hidden',
                                      textOverflow: 'ellipsis',
                                      whiteSpace: 'nowrap',
                                      display: 'block',
                                      maxWidth: '100%',
                                      m: 0,
                                      mt: 0.5
                                    }
                                  }
                                }}
                              />
                            </Box>
                          )}
                        />

                      </Grid>

                      {mode === 'signup' && (
                        <Grid xs={12}>
                          <Controller
                            name="newsletter"
                            control={control}
                            render={({ field }) => (
                              <Box display="flex" alignItems="center" gap={1}>
                                <Checkbox {...field} checked={!!field.value} />
                                <Typography variant="body2">
                                  Subscribe to our monthly newsletter
                                </Typography>
                              </Box>
                            )}
                          />
                        </Grid>
                      )}
                    </Grid>

                    {/* by clicking… */}
                    {mode === 'signup' && (
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: 'block', mt: 1.5 }}
                      >
                        By clicking below you agree to our{' '}
                        <MuiLink href="#" underline="hover">
                          Terms of Service
                        </MuiLink>{' '}
                        and{' '}
                        <MuiLink href="#" underline="hover">
                          Privacy Policy
                        </MuiLink>
                        .
                      </Typography>
                    )}

                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{ mt: 2, borderRadius: 999, py: 1.3 }}
                    >
                      {mode === 'signup' ? 'Sign up' : 'Login'}
                    </Button>

                    {/* нижняя ссылка как в макете */}
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      align="center"
                      sx={{ display: 'block', mt: 1.5 }}
                    >
                      {mode === 'signup' ? (
                        <>
                          Already have an account?{' '}
                          <MuiLink
                            component="button"
                            underline="hover"
                            onClick={() => switchMode('login')}
                          >
                            Log in
                          </MuiLink>
                        </>
                      ) : (
                        <>
                          New user?{' '}
                          <MuiLink
                            component="button"
                            underline="hover"
                            onClick={() => switchMode('signup')}
                          >
                            Sign up!
                          </MuiLink>
                        </>
                      )}
                    </Typography>
                  </Box>
                </CardContent>
              </Grid>

              <Grid
                xs={12}
                md={6}
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '50%',
                  p: 0
                }}
              >
                <Box sx={{
                  position: 'relative',
                  width: { md: 'clamp(380px, 44vw, 620px)' },
                  height: '100%',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: 'none',
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0
                }}>
                  <Image
                    src={placeholder}
                    alt="Laptop"
                    fill
                    style={{
                      objectFit: 'cover', borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0
                    }}
                    priority
                  />
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
