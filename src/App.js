
import { Box } from "@mui/material";
import React from "react";
import CommentSection from "./components/CommentSection";

const AllComments = [
  {
    id: 'n1',
    name: 'John Cena',
    time: '1 Month Ago',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, minus!',
  },
  {
    id: 'n2',
    name: 'Tega Anthony',
    time: '2 Month Ago',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, minus!',
  },
  {
    id: 'n3',
    name: 'Anthony Joshua',
    time: '3 Month Ago',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, minus!',
  }
];

function App() {
  return (
  <Box >
     <CommentSection 
        name={AllComments[0].name}
        time={AllComments[0].time}
        comment={AllComments[0].comment}
     />

<CommentSection 
        name={AllComments[1].name}
        time={AllComments[1].time}
        comment={AllComments[1].comment}
     />

<CommentSection 
        name={AllComments[2].name}
        time={AllComments[2].time}
        comment={AllComments[2].comment}
     />
  </Box>
  
  
 
  );
}

export default App;
