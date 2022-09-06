import styled from '@emotion/styled'
import { Avatar, Button, ButtonGroup, TextField } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const StyledBox = styled(Box)({
    display: "flex",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    width: "80%"
})



const ReplySection = (props) => {

  return (
    <StyledBox >
        <Box bgcolor="white" p={3} borderRadius={5} margin={1} >
        <Stack direction="row"  bgcolor="white" gap={3}>
                <Box flex={1}>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </Box>
                <Box 
                     sx={{
                        width: {xs: "150px", sm: "250px", md: "500px", lg: "700px", xl: "890px" }
                       
                      }} 
                >
                <TextField fullWidth  id="fullWidth" />
                </Box>
                <Box flex={2}>
                <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                    <Button>Post</Button>
                </ButtonGroup>
                </Box>
        </Stack>
        </Box>
    </StyledBox>
  )
}

export default ReplySection;