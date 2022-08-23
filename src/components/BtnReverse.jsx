import { AddCircleOutlined, RemoveCircleOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const BtnReverse = () => {
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
       display: { xs: "block", sm: "block", md: "none" }
    }}
  >
          <Box sx={{
              display: "flex",
              flexDirection: "row",
            
             width: "100%",
              backgroundColor: "#d3d3d3",
              borderRadius: "5px",
          }}> 
          <IconButton onClick={AddHandler}>
               <AddCircleOutlined color="primary"/>
          </IconButton>


          <Typography variant='h4' fontWeight={100} textAlign="center" >{counter}</Typography>

          <IconButton onClick={RemoveHandler}>
               <RemoveCircleOutlined color="primary"/>
          </IconButton>

          </Box>
  </Box>
  )
}

export default BtnReverse