import styled from '@emotion/styled'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Comments from './Comments'
import Replies from './Replies'



const StyledBox = styled(Box)({
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  width: "80%"

})



const CommentSection = ({ items, replys }) => {
  // const [show, setShow] = useState(false);

  const RealComments = items.map((comment) => (
    <StyledBox key={comment.id}>
      <Box bgcolor="white" p={3} borderRadius={5} margin={3}>
        <Stack direction="column" bgcolor="white">
          {/* <BtnCounting /> */}

          <Comments
            id={comment.id}
            name={comment.name}
            time={comment.time}
            comment={comment.comment}
          />
        </Stack>
      </Box>
      {/* {show && <ReplySection />} */}

      {/* <button onClick={() => setShow("true")}> click</button> */}
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