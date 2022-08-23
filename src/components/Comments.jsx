import styled from '@emotion/styled'
import { Reply } from '@mui/icons-material'
import { Avatar,  FormControlLabel, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import BtnReverse from './BtnReverse'




const UserBox = styled(Box) ({
    display: "flex"
    
})

const Comments = (props) => {
  return (
   
    <Box
        flex={6}
        margin={2}
    >

        <Stack direction="row" spacing={0} justifyContent="space-between">
            <Box>
            <UserBox gap={1}>
            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=600" />
   
     
        <Typography variant='span' fontWeight={300} mt={1.5}>
            {props.name}
        </Typography>

        <Typography variant='span' fontWeight={200} mt={1.5} color="gray">
        {props.time}
        </Typography> 
  
            </UserBox>
            </Box>

            <Box>

    <FormControlLabel
          sx={{color:"blue",
          display: {xs: "none", sm: "none", md: "block"}
        }}
          value="top"
          control={<Reply/>}
          label="Reply"
          labelPlacement="top"
        />
      
            
            </Box>
        </Stack>

       
        
        
            <Typography variant='h6' fontWeight={100}
                sx={{
                    textAlign: {xs: "center", sm: "left"}
                }}
            >
          { props.comment}
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="space-between" mt={2}>
        <Box>
           <BtnReverse />
        </Box>
        <Box>
        <FormControlLabel
          sx={{color:"blue",
          display: {xs: "block", sm: "block", md: "none"}
        }}
          value="top"
          control={<Reply/>}
          label="Reply"
          labelPlacement="top"
        />
        </Box>
        </Stack>

       
    </Box>
    


  )
}

export default Comments