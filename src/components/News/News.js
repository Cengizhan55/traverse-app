import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core/'
import Warning from '../Warning';
import { Link } from 'react-router-dom';

function News() {

    const data = [
        {
            id: 1,
            baslik: "Lorem ipsum dolor sit amet",
            aciklama: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "https://i.haberglobal.com.tr/rcman/Cw960h540q95gm/storage/files/images/2021/09/23/haberglobal-sondakika-1jxM.png"
        },
        {
            id: 2,
            baslik: "Lorem ipsum dolor sit amet",
            aciklama: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "https://i.haberglobal.com.tr/rcman/Cw960h540q95gm/storage/files/images/2021/09/23/haberglobal-sondakika-1jxM.png"
        },
        {
            id: 3,
            baslik: "Lorem ipsum dolor sit amet",
            aciklama: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "https://i.haberglobal.com.tr/rcman/Cw960h540q95gm/storage/files/images/2021/09/23/haberglobal-sondakika-1jxM.png"
        },
        {
            id: 4,
            baslik: "Lorem ipsum dolor sit amet",
            aciklama: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "https://i0.wp.com/journo.com.tr/wp-content/uploads/2020/12/son-dakika-haberleri.jpg?fit=1200%2C695&ssl=1"

        },
        {
            id: 5,
            baslik: "Lorem ipsum dolor sit amet",            
            aciklama: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "https://i0.wp.com/journo.com.tr/wp-content/uploads/2020/12/son-dakika-haberleri.jpg?fit=1200%2C695&ssl=1"

        },
        {
            id: 6,
            baslik: "Lorem ipsum dolor sit amet",
            aciklama: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "https://i0.wp.com/journo.com.tr/wp-content/uploads/2020/12/son-dakika-haberleri.jpg?fit=1200%2C695&ssl=1"
        },
    ]

    return (
        <>
            <div style={{"margin": "10px 0px 10px 0px"}}>
                <h1 style={{"textAlign": "center" }}>NEWS</h1>
            </div>
            <Grid container
                spacing={2}
                direction="row"
                justifyContent='flex-start'
                alignItems='flex-start'
            >
                {data.map((haber) => (
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ maxWidth: 345 }} id={haber.id}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={haber.image}
                                title={haber.baslik}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {haber.baslik}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {haber.aciklama}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to='/error' style={{color: 'black'}} > <Button size="small"> Share</Button></Link>
                                <Link to='/error' style={{color: 'black'}} > <Button size="small"> Publish</Button></Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </>
    )
}

export default News