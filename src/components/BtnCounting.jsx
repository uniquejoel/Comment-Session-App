import {  AddCircleOutlined, RemoveCircleOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'




const BtnCounting = () => {
  const [counter, setCounter] = useState(0);

  const AddHandler = () => {
    setCounter(count => count + 1);
  }

  const RemoveHandler = () => {
    if(counter > 0){
    setCounter(count => count - 1);
    }
  }



  return (
    <Box flex={0}
      sx={{
        
         margin: "auto",
         display: { xs: "none", sm: "none", md: "block" }
      }}
    >
            <Box sx={{
                height: "100%",
                backgroundColor: "#d3d3d3",
                borderRadius: "5px",
            }}> 
            <IconButton onClick={AddHandler}>
                 <AddCircleOutlined color="primary"/>
            </IconButton>


            <Typography variant='h4' textAlign="center" >{counter}</Typography>

            <IconButton onClick={RemoveHandler}>
                 <RemoveCircleOutlined color="primary"/>
            </IconButton>

            </Box>
    </Box>
  )
}

export default BtnCounting