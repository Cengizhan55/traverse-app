import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core/'
import Warning from '../Warning';

function News() {

    const [open, setOpen] = useState(false);

    const data = [
        {
            id: 1,
            baslik: "İmamoglu tutuklandı",
            aciklama: "İmamoglu dün verilen kararla beraber tutuklandı ve kendisine siyasi yasak da getirildi.",
            image: "https://i.ytimg.com/vi/L-Y13BR4OFc/maxresdefault.jpg"
        },
        {
            id: 2,
            baslik: "Beşiktaş şampiyon oldu",
            aciklama: "2022/2023 süperlig sezonunun şampiyonu son hafta kendi evinde gs'yi 12-0 mağlup eden beşiktaş oldu. Kara kartal bir kez daha tr'nin en büyüğü olduğunu kanıtladı.",
            image: "https://i01.sozcucdn.com/wp-content/uploads/2021/05/15/iecrop/sampiyon-besiktas-depo_16_9_1621110128.jpg"
        },
        {
            id: 3,
            baslik: "İmamoglu tutuklandı",
            aciklama: "İmamoglu dün verilen kararla beraber tutuklandı ve kendisine siyasi yasak da getirildi.",
            image: "https://i.ytimg.com/vi/L-Y13BR4OFc/maxresdefault.jpg"
        },
        {
            id: 4,
            baslik: "Beşiktaş şampiyon oldu",
            aciklama: "2022/2023 süperlig sezonunun şampiyonu son hafta kendi evinde gs'yi 12-0 mağlup eden beşiktaş oldu. Kara kartal bir kez daha tr'nin en büyüğü olduğunu kanıtladı.",
            image: "https://i01.sozcucdn.com/wp-content/uploads/2021/05/15/iecrop/sampiyon-besiktas-depo_16_9_1621110128.jpg"

        },
        {
            id: 5,
            baslik: "İmamoglu tutuklandı",
            aciklama: "İmamoglu dün verilen kararla beraber tutuklandı ve kendisine siyasi yasak da getirildi.",
            image: "https://i.ytimg.com/vi/L-Y13BR4OFc/maxresdefault.jpg"

        },
        {
            id: 6,
            baslik: "Beşiktaş şampiyon oldu",
            aciklama: "2022/2023 süperlig sezonunun şampiyonu son hafta kendi evinde gs'yi 12-0 mağlup eden beşiktaş oldu. Kara kartal bir kez daha tr'nin en büyüğü olduğunu kanıtladı.",
            image: "https://i01.sozcucdn.com/wp-content/uploads/2021/05/15/iecrop/sampiyon-besiktas-depo_16_9_1621110128.jpg"
        },
    ]

    return (
        <>
            <div style={{"margin": "10px 0px 10px 0px"}}>
                <h1 style={{"textAlign": "center" }}>NEWS</h1>
            </div>
            <Warning open={open} setOpen={setOpen}/>
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
                                <Button size="small" onClick={() => setOpen(true)}>Share</Button>
                                <Button size="small" onClick={() => setOpen(true)}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </>
    )
}

export default News