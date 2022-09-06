import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import BtnCounting from './BtnCounting'
import Comments from './Comments'
import Replies from './Replies'


const StyledBox = styled(Box)({
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    width: "80%"
   
})

const CommentSection = ({items,replys}) => {
  const RealComments = items.map((comment) => (
    <StyledBox key={comment.id}>
    <Box  bgcolor="white" p={3} borderRadius={5} margin={3}>
       <Stack direction="row"  bgcolor="white">
            <BtnCounting />
             
                <Comments 
                name={comment.name}
                time={comment.time}
                comment={comment.comment}
                />
                </Stack>
    </Box>
    <Replies reply={replys} id={comment.id}/>
</StyledBox>
  ))

  return (
    <Box>
        {RealComments}
    </Box>
  )
}

export default CommentSection