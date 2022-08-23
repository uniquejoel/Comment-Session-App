import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import BtnCounting from './BtnCounting'
import Comments from './Comments'
import ReplySection from './ReplySection'

const StyledBox = styled(Box)({
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    width: "80%"
   
})

const CommentSection = (props) => {
  return (
    <StyledBox>
        <Box  bgcolor="white" p={3} borderRadius={5} margin={3}>
           <Stack direction="row"  bgcolor="white">
                <BtnCounting />
                <Comments 
                  name={props.name}
                  time={props.time}
                  comment={props.comment}
                />
           </Stack>
        </Box>
        <ReplySection />
    </StyledBox>
  )
}

export default CommentSection