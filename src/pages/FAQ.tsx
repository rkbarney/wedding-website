import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Are kids allowed?",
      answer: "No, we kindly request that this be an adults-only celebration."
    },
    {
      question: "Where can I stay?",
      answer: `There are several accommodation options in the area:

• In El Sobrante: Various Airbnb options are available in the immediate area.

• In Point Richmond (15-20 minutes away): We recommend the Hotel Mac, located in the charming downtown area of Point Richmond.

• There are also a range of hotel options available throughout the East Bay area.`
    },
    {
      question: "Planning your stay - How long will it take to get here?",
      answer: `Here are approximate driving times to El Sobrante:

• From Downtown San Francisco: 30-60 min.
• From Berkeley: 20-30 min.
• From Oakland: 25-40 min.
• From Napa: 45-60 min.

Note: Drive times can vary significantly depending on traffic conditions, especially during rush hour.`
    },
    {
      question: "I have dietary restrictions. Can you accommodate them?",
      answer: "Yes! Please email or text us with your dietary restrictions, and we will ensure the caterer is aware and can accommodate your needs."
    },
    {
      question: "What should I wear?",
      answer: "The dress code is semi-formal/cocktail attire. PLEASE NOTE: Plan for temperatures with a high of 75 and low of 50."
    },
    {
      question: "Can I take pictures during the ceremony?",
      answer: "We kindly ask that you do not take photos during the ceremony, as we have hired a professional photographer."
    },
    {
      question: "Will the wedding be indoors or outdoors?",
      answer: "The ceremony and reception will be held outdoors in our backyard! Plan for temperatures with a high of 75 and low of 50."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, we encourage guests to carpool. If you are comfortable walking 100-200 yards we encourage you to park down the street from our house on Clark Rd to save space for guests with limited mobility."
    }
  ];

  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        py: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'  
      }}
    >
      <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom
        sx={{
          alignSelf: 'flex-start'  
        }}
      >
        Frequently Asked Questions
      </Typography>
      <Box sx={{ mt: 4 }}>
        {faqs.map((faq, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography 
              variant="h6" 
              component="h2" 
              sx={{ 
                color: 'primary.main',
                fontWeight: 'bold',
                mb: 1
              }}
            >
              {faq.question}
            </Typography>
            <Typography
              sx={{
                whiteSpace: 'pre-line',
                color: 'text.secondary',
                pl: 0
              }}
            >
              {faq.answer}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default FAQ;
