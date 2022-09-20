
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

const AllReplies = [
  {
    id: 1,
    comment_id: "n1",
    name: "John Nike",
    time: "23, AUG 2022",
    comment: "first reply "
  },
  {
    id: 2,
    comment_id: "n2",
    name: "John Nike",
    time: "23, AUG 2022",
    comment: "second reply "
  },
  {
    id: 3,
    comment_id: "n3",
    name: "John Nike",
    time: "23, AUG 2022",
    comment: "third reply"
  },
]


const App = () => {

  return (
  <Box>
    <CommentSection 
     items={AllComments}
     replys={AllReplies}
    
    />
  </Box>
  
  
 
  );
}

export default App;
