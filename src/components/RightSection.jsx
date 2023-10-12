import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ExploreIcon from '@mui/icons-material/Explore';
import Divider from '@mui/material/Divider';
import { shadows } from '@mui/system';
import { blue, green, blueGrey, orange, red, yellow, teal } from '@mui/material/colors';


function RightSection({weatherData}) {
  return (
    <div>
        <Grid container  columnSpacing={1} rowSpacing={1} pr={2}>
            <Grid item xs={6}>
                <Box sx={{width:'100%',bgcolor:'#ffffffe6',height:250,backdropFilter:(5)}} borderRadius={2} >
                      <Card sx={{ width:'100%',height:'100%',bgcolor:'transparent',backdropFilter:(5) }}>
                          <CardContent>
                              <Typography mt={3} textAlign={'center'} variant="h6" component="div">
                                 Wind Speed
                              </Typography>
                              <Typography mt={3} textAlign={'center'} color={green[400]} variant="h2">
                                  {weatherData?.wind?.speed}
                              <Typography fontSize={24} mt={3} textAlign={'center'} variant="span">
                                  km/h
                              </Typography>
                              </Typography>

                            <Stack mt={3} direction={'row'} justifyContent={'center'}  >
                                <ExploreIcon />
                              <Typography fontSize={18} color='text-secondary' variant="span">
                                  {weatherData?.wind?.deg}
                                    <Typography fontSize={12} color='text-secondary' variant="span">
                                        deg
                                    </Typography>
                              </Typography>
                            </Stack>
                          </CardContent>
                      </Card>
                </Box>
            </Grid>
            
            <Grid item xs={6}>
                <Box sx={{width:'100%',bgcolor:'#ffffffe6',height:250,backdropFilter:(5)}} borderRadius={2} >
                <Card sx={{ width:'100%',height:'100%',bgcolor:'transparent',backdropFilter:(5) }}>
                          <CardContent>
                              <Typography mt={3} textAlign={'center'} variant="h6" component="div">
                                 Humidity
                              </Typography>
                              <Typography mt={3} textAlign={'center'} color={blue[400]} variant="h2">
                                  {weatherData?.main?.humidity}
                              <Typography fontSize={24} mt={3} textAlign={'center'} variant="span">
                                  %
                              </Typography>
                              </Typography>

                            <Stack mt={3} direction={'row'} justifyContent={'center'}  >
                                feels like:
                              <Typography fontSize={18} mx={1} color='text-secondary' variant="h6">
                                  {weatherData?.main?.feels_like}℃
                              </Typography>
                            </Stack>
                          </CardContent>
                      </Card>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box sx={{width:'100%',bgcolor:'#ffffffe6',height:125,backdropFilter:(5),boxShadow:1}} borderRadius={2} >
                <Stack direction="row"  divider={<Divider orientation="vertical" flexItem />} >
                <Card sx={{ width:'50%',height:125,bgcolor:'transparent',backdropFilter:(5),boxShadow:'none' }}>
                          <CardContent>
                              <Typography  textAlign={'center'} variant="h6" component="div">
                                 Visibility
                              </Typography>
                              <Typography mt={1} textAlign={'center'} color={blueGrey[600]} variant="h4">
                              {weatherData?.visibility/1000}
                              <Typography fontSize={24} mt={3} textAlign={'center'} variant="span">
                                  km
                              </Typography>
                              </Typography>
                          </CardContent>
                      </Card> 

                <Card sx={{ width:'50%',height:125,bgcolor:'transparent',backdropFilter:(5),boxShadow:'none' }}>
                          <CardContent>
                              <Typography  textAlign={'center'} variant="h6" component="div">
                                 Air Pressure
                              </Typography>
                              <Typography mt={1} textAlign={'center'} color={blueGrey[600]}variant="h4">
                              {weatherData?.main?.pressure}
                              <Typography fontSize={24} mt={3} textAlign={'center'} variant="span">
                                  hPa
                              </Typography>
                              </Typography>
                          </CardContent>
                      </Card>            
                </Stack>
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box sx={{width:'100%',bgcolor:'#ffffffe6',height:{xs:250,md:125},backdropFilter:(5),boxShadow:1}} borderRadius={2} >
                <Stack direction="row" flexWrap={'wrap'} divider={<Divider orientation="vertical" flexItem  />} >
                <Card sx={{  width:{xs:'49%',md:'24%'},height:125,bgcolor:'transparent',backdropFilter:(5),boxShadow:'none' }}>
                          <CardContent>
                              <Typography  textAlign={'center'} variant="h6" component="div">
                                 Max Temp
                              </Typography>
                              <Typography mt={1} textAlign={'center'} color={blueGrey[600]} variant="h4">
                              {weatherData?.main?.temp_max}
                              <Typography fontSize={24} mt={3} textAlign={'center'} variant="span">
                                  ℃
                              </Typography>
                              </Typography>
                          </CardContent>
                      </Card> 
    
                <Card sx={{ width:{xs:'49%',md:'24%'},height:125,bgcolor:'transparent',backdropFilter:(5),boxShadow:'none' }}>
                          <CardContent>
                              <Typography  textAlign={'center'} variant="h6" component="div">
                                 Min Temp
                              </Typography>
                              <Typography mt={1} textAlign={'center'} color={blueGrey[600]} variant="h4">
                              {weatherData?.main?.temp_min}
                              <Typography fontSize={24} mt={3} textAlign={'center'} variant="span">
                                  ℃
                              </Typography>
                              </Typography>
                          </CardContent>
                      </Card> 
                            
                <Card sx={{ width:{xs:'49%',md:'24%'},height:125,bgcolor:'transparent',backdropFilter:(5),boxShadow:'none' }}>
                          <CardContent>
                              <Typography  textAlign={'center'} variant="h6" component="div">
                                 Sunrise
                              </Typography>
                              <Typography mt={1} textAlign={'center'} color={blueGrey[600]} variant="h5">
                                  {new Date(weatherData?.sys?.sunrise *1000).toLocaleTimeString()} {/* convert to local time format */}
                              </Typography>
                          </CardContent>
                      </Card> 

                <Card sx={{ width:{xs:'49%',md:'24%'},height:125,bgcolor:'transparent',backdropFilter:(5),boxShadow:'none' }}>
                          <CardContent>
                              <Typography  textAlign={'center'} variant="h6" component="div">
                                 Sunset
                              </Typography>
                              <Typography mt={1} textAlign={'center'} color={blueGrey[600]} variant="h5">
                                  {new Date(weatherData?.sys?.sunset * 1000).toLocaleTimeString()} {/* convert to local time format */}
                              </Typography>
                          </CardContent>
                      </Card>            
                </Stack>           
                </Box>
            </Grid>

        </Grid>
    </div>
  )
}

export default RightSection