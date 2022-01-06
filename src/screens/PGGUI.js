import React from 'react'
import Chart from "react-google-charts";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useEffect } from 'react';
import { useState } from 'react';
import './styles/froms.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Modal from 'react-modal';


export default function PGGUI() {

        const TurkeyLF = [12000,11400,11000,9750,9500,9300,10050,11060,11560,13500,14700,15000,14800,14500,14000,14200,14300,14500,14600,13800,13400,13000,12200,11000]
        const TurkeyLF_improved = [12000,11400,11000,11450,11100,11000,12050,12060,12560,13500,13700,14000,13800,13500,13800,14100,14300,14400,14500,13800,13400,13000,12200,11000]
        const SelectFrom = ['Malaysia']
        const [Selected, setSelected] = useState(null)
        const [modalIsOpen, setModalIsOpen] = useState(false)
        const [ShowCosting, setShowCosting] = useState(false)

        //units generated
        // load factor = avg load / peak load
        //md
        //plant capacity
        //avg load

        // total plant cost
        // fuel cost 
        // fuel/kg pkr
        // maintaince cost 
        // operational cost
        // cost per KW


        return (
                <div><br/>
                <Container>
                <Paper elevation={2} style={{padding:'20px'}} >
                <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Load Profile to Display</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Selected}
                        label="Age"
                        onChange={(e)=>setSelected(e.target.value)}
                        style={{fontSize:'30px'}}
                        >
                        {SelectFrom.map(x=><MenuItem value={x}>{x}</MenuItem>)}
                        </Select>
                </FormControl>
                </Paper>
                </Container><br/>
               {Selected && <Container>
               <Paper elevation={2} style={{padding:'20px'}} >
               {Selected === 'Malaysia' && <Chart width={'1200px'} height={'500px'} chartType="Bar" loader={<div>Loading Chart</div>}
                data={[ ['Hours','1', '2' , '3' , '4' , '5' , '6' , '7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24' ],['Voltage Regulation before Optimization', 
                TurkeyLF[0] , TurkeyLF[1], TurkeyLF[2], TurkeyLF[3], TurkeyLF[4], TurkeyLF[5], TurkeyLF[6] ,
                TurkeyLF[7] , TurkeyLF[8], TurkeyLF[9], TurkeyLF[10], TurkeyLF[11], TurkeyLF[12], TurkeyLF[13] ,
                TurkeyLF[14] , TurkeyLF[15], TurkeyLF[16], TurkeyLF[17], TurkeyLF[18], TurkeyLF[19], TurkeyLF[20] ,
                TurkeyLF[21] , TurkeyLF[22], TurkeyLF[23] ], ]} options={{ chart: { }, }}/>}
               
               <Grid container >
               <Grid item sm={3} style={{textAlign:'center'}} > <p style={{color:'grey'}} >Units Generated</p> <p style={{fontSize:'30px',fontFamily:'cursive'}} >{TurkeyLF.reduce((a,b)=>a+b)} {' MW'}</p> </Grid>
               <Grid item sm={3} style={{textAlign:'center'}} > <p style={{color:'grey'}} >Max Demand</p> <p style={{fontSize:'30px',fontFamily:'cursive'}} >{Math.max(...TurkeyLF)} {' MW'}</p> </Grid>
               <Grid item sm={3} style={{textAlign:'center'}} > <p style={{color:'grey'}} >Average Load</p> <p style={{fontSize:'30px',fontFamily:'cursive'}} >{TurkeyLF.reduce((a,b)=>a+b)/24} {' MW'}</p> </Grid>
               <Grid item sm={3} style={{textAlign:'center'}} > <p style={{color:'grey'}} >Load Factor</p> <p style={{fontSize:'30px',fontFamily:'cursive'}} >{((TurkeyLF.reduce((a,b)=>a+b)) / (Math.max(...TurkeyLF)*24) ).toFixed(3)}</p> </Grid>
               <Grid item sm={3} style={{textAlign:'center'}} > <p style={{color:'grey'}} >Plant Capacity </p> <p style={{fontSize:'30px',fontFamily:'cursive'}} >{((TurkeyLF.reduce((a,b)=>a+b)) / (0.5*24) ).toFixed(1)}  {' MW'}</p> </Grid>
               <Grid item sm={3} style={{textAlign:'center'}} > <br/><br/><a target='_blank' href='google.com' >See Refference</a> </Grid>
               <Grid item sm={3} style={{textAlign:'center'}} > <br/> <Button variant='contained' style={{backgroundColor:'lightgreen'}} > <h3 style={{color:'white'}} onClick={()=>setShowCosting(!ShowCosting)} >Costing</h3> </Button> </Grid>
               <Grid item sm={3} style={{textAlign:'center'}} > <br/> <Button variant='contained' style={{backgroundColor:'white'}} > <h3 style={{color:'lightgreen'}} onClick={()=>setModalIsOpen(true)} >Improve</h3> </Button> </Grid>
               </Grid>
               </Paper><br/>
               {ShowCosting && <Paper elevation={2} style={{padding:'20px'}} >
               <Grid container >
               <Grid item sm={3} style={{textAlign:'center'}} > <p style={{color:'grey'}} >Annual Fuel Comsuption</p> <p style={{fontSize:'30px',fontFamily:'cursive'}} >{(TurkeyLF.reduce((a,b)=>a+b)/2.3).toFixed(2) } {' kg'}</p> </Grid>
               <Grid item sm={3} style={{textAlign:'center'}} > <p style={{color:'grey'}} >Maintaince Cost </p> <p style={{fontSize:'30px',fontFamily:'cursive'}} > 300000 {' pkr'}</p> </Grid>
               <Grid item sm={3} style={{textAlign:'center'}} > <p style={{color:'grey'}} >Total Plant Cost</p> <p style={{fontSize:'30px',fontFamily:'cursive'}} >{TurkeyLF.reduce((a,b)=>a+b)/24} {' MW'}</p> </Grid>
               <Grid item sm={3} style={{textAlign:'center'}} > <p style={{color:'grey'}} >Fuel Cost</p> <p style={{fontSize:'30px',fontFamily:'cursive'}} >{((TurkeyLF.reduce((a,b)=>a+b)/2.3)*40).toFixed(0)}{' pkr'}</p> </Grid>
               <Grid item sm={3} style={{textAlign:'center'}} > <p style={{color:'grey'}} >Total Lubricating Oil Cost</p> <p style={{fontSize:'30px',fontFamily:'cursive'}} >{((TurkeyLF.reduce((a,b)=>a+b)/400)*125).toFixed(1)}{' pkr'}</p> </Grid>
               <Grid item sm={3} style={{textAlign:'center'}} > <p style={{color:'grey'}} >Total Variable Cost</p> <p style={{fontSize:'30px',fontFamily:'cursive'}} >{((TurkeyLF.reduce((a,b)=>a+b)/400)*125 + (TurkeyLF.reduce((a,b)=>a+b)/2.3)*40 + 500000).toFixed(0) }{' pkr'}</p> </Grid>
               <Grid item sm={3} style={{textAlign:'center'}} > <p style={{color:'grey'}} >Total Fixed/Semi-Fixed Cost</p> <p style={{fontSize:'30px',fontFamily:'cursive'}} >340000 {' pkr'}</p> </Grid>
               <Grid item sm={3} style={{textAlign:'center'}} > <p style={{color:'grey'}} >Overall Cost per KWh</p> <p style={{fontSize:'30px',fontFamily:'cursive'}} >
                     {(((TurkeyLF.reduce((a,b)=>a+b)/400)*125 + (TurkeyLF.reduce((a,b)=>a+b)/2.3)*40 + 500000 + 340000)/TurkeyLF.reduce((a,b)=>a+b)).toFixed(3) }   
                {' pkr'}</p> </Grid>
               </Grid>
               </Paper>}

               </Container>}


                <Modal isOpen={modalIsOpen}  contentLabel="Example Modal"> 
                <button style={{textAlign:'right'}} onClick={()=>setModalIsOpen(false)}>close</button>
                
                <Paper elevation={2} style={{padding:'20px'}} >
                <Grid container >
                <Grid item lg={5} >
                <h2 style={{textAlign:'center'}} >Before</h2>
                {Selected === 'Malaysia' && <Chart width={'500px'} height={'350px'} chartType="Bar" loader={<div>Loading Chart</div>}
                data={[ ['Hours','1', '2' , '3' , '4' , '5' , '6' , '7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24' ],['Voltage Regulation before Optimization', 
                TurkeyLF[0] , TurkeyLF[1], TurkeyLF[2], TurkeyLF[3], TurkeyLF[4], TurkeyLF[5], TurkeyLF[6] ,
                TurkeyLF[7] , TurkeyLF[8], TurkeyLF[9], TurkeyLF[10], TurkeyLF[11], TurkeyLF[12], TurkeyLF[13] ,
                TurkeyLF[14] , TurkeyLF[15], TurkeyLF[16], TurkeyLF[17], TurkeyLF[18], TurkeyLF[19], TurkeyLF[20] ,
                TurkeyLF[21] , TurkeyLF[22], TurkeyLF[23] ], ]} options={{ chart: { }, }}/>}
                <div>
                <p style={{color:'grey'}} >Units Generated</p> <p style={{fontSize:'30px',fontFamily:'cursive'}} >{TurkeyLF.reduce((a,b)=>a+b)} {' MW'}</p>
                <p style={{color:'grey'}} >Max Demand</p> <p style={{fontSize:'30px',fontFamily:'cursive'}} >{Math.max(...TurkeyLF)} {' MW'}</p>
                <p style={{color:'grey'}} >Load Factor</p> <p style={{fontSize:'30px',fontFamily:'cursive'}} >{((TurkeyLF.reduce((a,b)=>a+b)) / (Math.max(...TurkeyLF)*24) ).toFixed(3)}</p>
                </div>
                </Grid>
                <Grid item lg={2}  >
                        <div>
                        <br/><br/><br/><br/>
                        <h4 style={{color:'gray',fontFamily:'cursive'}}>Performing Peak Shave / Valley filling</h4>
                        <img style={{width:'100%',height:'100px'}} src='https://thumbs.dreamstime.com/b/gray-arrow-sign-has-drawn-paint-brushstroke-grange-watercolor-texture-brush-stroke-watercolour-ink-sketch-drawing-created-187794395.jpg' />
                        </div>
                </Grid>
                <Grid item lg={5}>
                <h2 style={{textAlign:'center'}}>After</h2>
                {Selected === 'Malaysia' && <Chart width={'500px'} height={'350px'} chartType="Bar" loader={<div>Loading Chart</div>}
                data={[ ['Hours','1', '2' , '3' , '4' , '5' , '6' , '7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24' ],['Voltage Regulation before Optimization', 
                TurkeyLF_improved[0] , TurkeyLF_improved[1], TurkeyLF_improved[2], TurkeyLF_improved[3], TurkeyLF_improved[4], TurkeyLF_improved[5], TurkeyLF_improved[6] ,
                TurkeyLF_improved[7] , TurkeyLF_improved[8], TurkeyLF_improved[9], TurkeyLF_improved[10], TurkeyLF_improved[11], TurkeyLF_improved[12], TurkeyLF_improved[13] ,
                TurkeyLF_improved[14] , TurkeyLF_improved[15], TurkeyLF_improved[16], TurkeyLF_improved[17], TurkeyLF_improved[18], TurkeyLF_improved[19], TurkeyLF_improved[20] ,
                TurkeyLF_improved[21] , TurkeyLF_improved[22], TurkeyLF_improved[23] ], ]} options={{ chart: { }, }}/>}
                <div>
                <p style={{color:'grey'}} >Units Generated</p> <p style={{fontSize:'30px',fontFamily:'cursive'}} >{TurkeyLF_improved.reduce((a,b)=>a+b)} {' MW'}</p>
                <p style={{color:'grey'}} >Max Demand</p> <p style={{fontSize:'30px',fontFamily:'cursive'}} >{Math.max(...TurkeyLF_improved)} {' MW'}</p>
                <p style={{color:'grey'}} >Load Factor</p> <p style={{fontSize:'30px',fontFamily:'cursive'}} >{((TurkeyLF_improved.reduce((a,b)=>a+b)) / (Math.max(...TurkeyLF_improved)*24) ).toFixed(3)}</p>
                </div>
                </Grid>
                </Grid>
                
                <br/>
                

                </Paper>
                </Modal>


                </div>
        )
}
