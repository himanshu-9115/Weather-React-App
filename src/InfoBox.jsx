import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}){

  
   const  INIT_URL = "https://images.unsplash.com/photo-1641970304088-2b016b4a883b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGR1c3R5JTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww ";


   const HOT_URL = "https://images.unsplash.com/photo-1546274527-9327167dc1f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdCUyMFdlYXRoZXJ8ZW58MHx8MHx8fDA%3D ";

   const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMFdlYXRoZXJ8ZW58MHx8MHx8fDA%3D ";

   
   const RAIN_URL = "https://images.unsplash.com/photo-1536329978773-2f8ac431f330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55JTIwV2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";




  
  return(
    
    <div className="InfoBox">
    
      <div className='Card-Container'>

    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity >80 
          ? RAIN_URL 
          : (info.temp > 15
             ? HOT_URL
              : COLD_URL )
            }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       
       {info.city}
       {
          info.humidity >80 
          ?  <ThunderstormIcon/>
          : (info.temp > 15
             ? <SunnyIcon/>
              : <AcUnitIcon/> )
            }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
      <p>Temperature : {info.temp}&deg;C</p>
           <p>Humidity : {info.humidity}</p>
                <p>Min_Temperature : {info.tempMin}&deg;C</p>
                     <p>Max_Temperature : {info.tempMax}&deg;C</p>
                          <p>The weather can be discribed as <i> {info.weather} </i>and feels like : {info.feelslike}</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  );
}