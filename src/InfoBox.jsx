import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){

    const HOT_URL ="https://images.theconversation.com/files/615211/original/file-20240822-16-9nd1la.jpg?ixlib=rb-4.1.0&rect=0%2C0%2C7089%2C4729&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip";
    const COLD_URL = "https://s7d2.scene7.com/is/image/TWCNews/snowy_ice_trees_branchescroppedjpg";
    const RAIN_URL = "https://static.vecteezy.com/system/resources/thumbnails/043/032/572/small/a-lone-umbrella-on-a-wet-park-bench-during-in-the-rain-photo.jpg";

    return(
    <div className="InfoBox" >

        <div className='cardContainer' style={{backgroundColor: "black"}}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 
            ? RAIN_URL
            : info.temp > 22
            ? HOT_URL
            : COLD_URL
          }
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity > 80 
            ? <ThunderstormIcon />
            : info.temp > 22
            ? <WbSunnyIcon />
            : <AcUnitIcon />
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.description}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>);
}