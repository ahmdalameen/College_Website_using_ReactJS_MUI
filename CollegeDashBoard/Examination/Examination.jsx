import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './Exam.css'
import FloatingBar from '../floatingBar/floating';
const cards = [
  {
    id: 1,
    title: 'Semester Results',
    description: 'PG,UG,M.Phill,PhD Results are Out for july 2024 ',
  },
  {
    id: 2,
    title: 'PG University Exams',
    description: 'Exams helded by university of MG and Bharadidasan are affiliated with us',
  },
  {
    id: 3,
    title: 'Board Exams for B.Ed students',
    description: 'its Especially alotted for the students who taken the B.ed courses',
  },

  {
    id: 3,
    title: 'Other colleges Exams ',
    description: 'AlAmeen college of Arts and science welcomes who is willing to write exams in our college',
  },

  {
    id: 3,
    title: 'AlAmeen college Special Exams',
    description: 'We held here some special exams for the Students who have extra curricular activites',
  },

  {
    id: 3,
    title: 'Inter college Examinations',
    description: 'Click here to see inter college examination held by the own university of AlAmeen college',
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <div>
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
        
        marginTop:'100px',
        
      }}
    >
      {cards.map((card, index) => (
        <Card style={{backgroundImage: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)"}}  >
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
                
              height: '100%',
              '&[data-active]': {
                
                backgroundImage: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                  
                  color: 'white'
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography style={{fontFamily:'sans sherif' ,fontSize:'25px'}} variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}

      
    </Box>
    <br />
    <br />
    <br />
    <div style={{marginLeft:'450px', }}>
<FloatingBar/>

      </div>
    </div>
  );
}

export default SelectActionCard;
