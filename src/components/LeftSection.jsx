import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'

// card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// icons if needed
import tempmax from './Assets/Icon/thermometer-warmer.png'
import tempmin from './Assets/Icon/thermometer-colder.png'
import feels from './Assets/Icon/thermometer.png'
import humidity from './Assets/Icon/humidity.png'
import windIco from './Assets/Icon/windsock.png'
import sunriseIco from './Assets/Icon/sunrise.png'
import sunsetIco from './Assets/Icon/sunrise.png'
import pressureIco from './Assets/Icon/pressure-high.png'
import clear from './Assets/Icon/clear-day.png';
import cloudsIco from './Assets/Icon/cloudy.png';
import RainIco from './Assets/Icon/rain.png';
import ThunderStormIco from './Assets/Icon/thunderstorms-day.png';
import snowIco from './Assets/Icon/snow.png';
import mistIco from './Assets/Icon/mist.png';
import hazeIco from './Assets/Icon/haze.png';
import NA from './Assets/Icon/not-available.png'
// import mui icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
// custom css
import './LeftSection.css'

function LeftSection({weatherData}) {

    // console.log(weatherData?.weather[0].icon);
    // console.log(weatherData);
    function checkIcon() {
      const iconCode = weatherData?.weather?.[0]?.icon;
        // console.log(iconCode);
        if(iconCode == '01d' || iconCode == '01n'){
            // setIcon(clear)}
            setIcon('https://images.unsplash.com/photo-1542923910-f391dea9f674?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80')}
        else if(iconCode == '02d' || iconCode == '02n' ||iconCode == '03d' ||iconCode == '03n' ||iconCode == '04d' ||iconCode == '04n'){
            // setIcon(cloudsIco);}
            setIcon('https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');}
        else if(iconCode == '09d' || iconCode == '10d' || iconCode == '09n' || iconCode == '10n'){
            // setIcon(RainIco); 
            setIcon('https://images.unsplash.com/photo-1493314894560-5c412a56c17c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'); 
        }else if(iconCode == '11d' || iconCode == '11n'){
        //    setIcon(ThunderStormIco)
           setIcon('https://images.unsplash.com/photo-1528485238486-507af7c0aa19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')
          }
          else if(iconCode== '13d'|| iconCode== '13n'){
        //    setIcon(snowIco)
           setIcon('https://images.unsplash.com/photo-1518984211165-a6c9abed630f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80')
          }
          else if(iconCode == '50d' || iconCode == '50n'){
        //    setIcon(mistIco)
           setIcon('https://images.unsplash.com/photo-1579553947413-0eb573d52526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80')
          }
        else{
           setIcon(NA)
          }
    }

    

    useEffect(()=>{
        checkIcon();
    })


    const[icon,setIcon] = useState(<sunriseIco />)
  return (
    <div>
            <Box borderRadius={2} sx={{width:'100%',bgcolor:'#5C9CE5',height:{xs:'60vh',md:'80vh',lg:'75vh'}}}>
            <Card sx={{ maxWidth: '100%',height:{xs:'60vh',md:'80vh',lg:'75vh'},boxShadow:3 }}>
      <CardMedia id="cardimage" 
        sx={{ height: '57%',width:'100%' }}
        // sx={{ height: '56%',width:'100%'}}
        // image='https://img.freepik.com/free-photo/cloud-blue-sky_1122-624.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696636800&semt=sph'
        image={icon}
        title="weather icon"
      />
      <CardContent>
        <Typography textAlign={'center'}  variant="h1" color={'#3e3e3e'} component="div" >
          {(Math.floor(weatherData?.main?.temp))}
                <Typography textAlign={'center'}  fontSize={80}  variant="span" color={'#3e3e3ed9'} component="span" >
                    ℃
                </Typography>
        </Typography>
        <Typography textAlign={'center'} variant="h5" color="text.secondary">
          <LocationOnIcon/>
          {weatherData?.name}
        </Typography>
        <Stack direction={'row'} mr={3} mt={3}  justifyContent={'space-between'}>
        <Typography    variant="h5" color="text.secondary" component="div" >
          {weatherData?.weather?.map(e=>e.main)}     {/* Mapping array to get data */}
        </Typography>
        <Typography   variant="h5" color="text.secondary" component="div" >
          {new Date(weatherData?.dt *1000).toLocaleTimeString()}  {/* Converting utx format time to time string(10:10 Am) format. */}
        </Typography>
        </Stack>
      </CardContent>
    </Card>
            </Box>
    </div>
  )
}

export default LeftSection
