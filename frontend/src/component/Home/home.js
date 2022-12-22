import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Navigation } from '../Navigation/navigation';
import { NavLink } from "react-router-dom";

            
            const images = [
            
              {
                url: 'https://zycrypto.com/wp-content/uploads/2018/12/When-is-the-Best-Time-to-Buy-Bitcoin-Weiss-Ratings-Says-its-Now.png',
                title: 'Buy',
                width: '30%',
                height: '40%',
              },
              {
                url: 'https://img.etimg.com/thumb/msid-72102660,width-210,imgsize-126721,,resizemode-4,quality-100/sell-13.jpg',
                title: 'Sell',
                width: '30%',
                height: '40%',
              },
			  {
                url: 'https://cdn-icons-png.flaticon.com/512/1068/1068727.png',
                title: 'Play',
                width: '30%',
                height: '40%',
              },
            ];
            
            const ImageButton = styled(ButtonBase)(({ theme }) => ({
              position: 'relative',
              height: 200,
              [theme.breakpoints.down('sm')]: {
                width: '100% !important', // Overrides inline-style
                height: 100,
              },
              '&:hover, &.Mui-focusVisible': {
                zIndex: 1,
                '& .MuiImageBackdrop-root': {
                  opacity: 0.15
                },
                '& .MuiImageMarked-root': {
                  opacity: 0,
                },
                '& .MuiTypography-root': {
                  border: '4px solid currentColor',
                },
              },
            }));
            
            const ImageSrc = styled('span')({
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
            });
            
            const Image = styled('span')(({ theme }) => ({
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.palette.common.white,
            }));
            
            const ImageBackdrop = styled('span')(({ theme }) => ({
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundColor: theme.palette.common.black,
              opacity: 0.4,
              transition: theme.transitions.create('opacity'),
            }));
            
            const ImageMarked = styled('span')(({ theme }) => ({
              height: 3,
              width: 18,
              backgroundColor: theme.palette.common.white,
              position: 'absolute',
              bottom: -2,
              left: 'calc(50% - 9px)',
              transition: theme.transitions.create('opacity'),
            }));

export const Home = (props)=>{
    

    return (
      <><Navigation>
            
      </Navigation>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
                
                    <ImageButton
                        focusRipple
                        key={'Buy'}
                        style={{
                            width: '30%',
                        }}
                    >
					<ImageSrc style={{ backgroundImage: `url(${'https://zycrypto.com/wp-content/uploads/2018/12/When-is-the-Best-Time-to-Buy-Bitcoin-Weiss-Ratings-Says-its-Now.png'})` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={{
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                                {'Buy'}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                    </ImageButton>
					<ImageButton
                        focusRipple
                        key={'Sell'}
                        style={{
                            width: '30%',
                        }}
                    >
					<ImageSrc style={{ backgroundImage: `url(${'https://img.etimg.com/thumb/msid-72102660,width-210,imgsize-126721,,resizemode-4,quality-100/sell-13.jpg'})` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={{
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                                {'Sell'}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                    </ImageButton>
					<ImageButton
                        focusRipple
                        key={'Play'}
                        style={{
                            width: '30%',
                        }}
                    >
                        <ImageSrc style={{ backgroundImage: `url(${'https://cdn-icons-png.flaticon.com/512/1068/1068727.png'})` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <NavLink to="/play"><Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={{
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                                {'Play'}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography></NavLink>
                        </Image>
                    </ImageButton>
                
            </Box></>
              );
            }
    