import express from "express";
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
import { v4 as uuidv4 } from 'uuid';
app.use(express.json());

let articles = [
  {
    author: 'TOI News Desk',
    content: 'null',
    description: 'Football News: The All India Football Federation (AIFF) on Monday sacked Igor Stimac as the head coach of the countrys seniors mens team following a disappointing',
    title: "Sacked Igor Stimac warns AIFF: Clear payment within 10 days or I will file lawsuit - The Times of India",
    url: "https://timesofindia.indiatimes.com/sports/football/top-stories/sacked-igor-stimac-warns-aiff-clear-payment-within-10-days-or-i-will-file-lawsuit-against-you/articleshow/111092440.cms",
    urlToImage: "https://c.ndtvimg.com/2024-06/bi46t1d_gautam-gambhir-wv-raman_625x300_18_June_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
    publishedAt:"2024-06-18T17:57:00Z"
  },
  {
    author: 'TOI News Desk',
    content: 'null',
    description: 'Football News: The All India Football Federation (AIFF) on Monday sacked Igor Stimac as the head coach of the countrys seniors mens team following a disappointing',
    title: "Sacked Igor Stimac warns AIFF: Clear payment within 10 days or I will file lawsuit - The Times of India",
    url: "https://sports.ndtv.com/cricket/gautam-gambhir-team-india-head-coach-live-updates-gambhir-interview-live-telecast-bcci-5916492",
    urlToImage: null,
    publishedAt:"2024-06-18T17:57:00Z"
  },
  {
    author: 'TOI News Desk',
    content: 'null',
    description: 'Football News: The All India Football Federation (AIFF) on Monday sacked Igor Stimac as the head coach of the countrys seniors mens team following a disappointing',
    title: "Sacked Igor Stimac warns AIFF: Clear payment within 10 days or I will file lawsuit - The Times of India",
    url: "https://www.healthshots.com/health-news/flesh-eating-bacteria-in-japan/",
    urlToImage: null,
    publishedAt:"2024-06-18T17:57:00Z"
  },
  {
    author: 'TOI News Desk',
    content: 'null',
    description: 'Football News: The All India Football Federation (AIFF) on Monday sacked Igor Stimac as the head coach of the countrys seniors mens team following a disappointing',
    title: "Sacked Igor Stimac warns AIFF: Clear payment within 10 days or I will file lawsuit - The Times of India",
    url: "https://timesofindia.indiatimes.com/sports/football/top-stories/sacked-igor-stimac-warns-aiff-clear-payment-within-10-days-or-i-will-file-lawsuit-against-you/articleshow/111092440.cms",
    urlToImage: "https://static.toiimg.com/thumb/msid-111092521,width-1070,height-580,imgsize-55020,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    publishedAt:"2024-06-18T17:57:00Z"
  },
  {
    author: 'TOI News Desk',
    content: 'null',
    description: 'Football News: The All India Football Federation (AIFF) on Monday sacked Igor Stimac as the head coach of the countrys seniors mens team following a disappointing',
    title: "Sacked Igor Stimac warns AIFF: Clear payment within 10 days or I will file lawsuit - The Times of India",
    url: "https://www.hindustantimes.com/entertainment/hollywood/jackie-chan-spotted-at-montreal-club-with-fans-guess-the-song-he-is-dancing-to-karate-kid-101718728349767.html",
    urlToImage: "https://static.toiimg.com/thumb/msid-111092521,width-1070,height-580,imgsize-55020,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    publishedAt:"2024-06-18T17:57:00Z"
  },
  {
    author: 'TOI News Desk',
    content: 'null',
    description: 'Football News: The All India Football Federation (AIFF) on Monday sacked Igor Stimac as the head coach of the countrys seniors mens team following a disappointing',
    title: "Sacked Igor Stimac warns AIFF: Clear payment within 10 days or I will file lawsuit - The Times of India",
    url: "https://timesofindia.indiatimes.com/sports/football/top-stories/sacked-igor-stimac-warns-aiff-clear-payment-within-10-days-or-i-will-file-lawsuit-against-you/articleshow/111092440.cms",
    urlToImage: "https://static.toiimg.com/thumb/msid-111092521,width-1070,height-580,imgsize-55020,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    publishedAt:"2024-06-18T17:57:00Z"
  },
  {
    author: 'TOI News Desk',
    content: 'null',
    description: 'Football News: The All India Football Federation (AIFF) on Monday sacked Igor Stimac as the head coach of the countrys seniors mens team following a disappointing',
    title: "Sacked Igor Stimac warns AIFF: Clear payment within 10 days or I will file lawsuit - The Times of India",
    url: "https://timesofindia.indiatimes.com/sports/football/top-stories/sacked-igor-stimac-warns-aiff-clear-payment-within-10-days-or-i-will-file-lawsuit-against-you/articleshow/111092440.cms",
    urlToImage: "https://static.toiimg.com/thumb/msid-111092521,width-1070,height-580,imgsize-55020,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    publishedAt:"2024-06-18T17:57:00Z"
  },
  {
    author: 'TOI News Desk',
    content: 'null',
    description: 'Football News: The All India Football Federation (AIFF) on Monday sacked Igor Stimac as the head coach of the countrys seniors mens team following a disappointing',
    title: "Sacked Igor Stimac warns AIFF: Clear payment within 10 days or I will file lawsuit - The Times of India",
    url: "https://timesofindia.indiatimes.com/sports/football/top-stories/sacked-igor-stimac-warns-aiff-clear-payment-within-10-days-or-i-will-file-lawsuit-against-you/articleshow/111092440.cms",
    urlToImage: "https://static.toiimg.com/thumb/msid-111092521,width-1070,height-580,imgsize-55020,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    publishedAt:"2024-06-18T17:57:00Z"
  },
  {
    author: 'API Desk',
    content: 'null',
    description: 'Football News: The All India Football Federation (AIFF) on Monday sacked Igor Stimac as the head coach of the countrys seniors mens team following a disappointing',
    title: "Sacked Igor Stimac warns AIFF: Clear payment within 10 days or I will file lawsuit - The Times of India",
    url: "https://timesofindia.indiatimes.com/sports/football/top-stories/sacked-igor-stimac-warns-aiff-clear-payment-within-10-days-or-i-will-file-lawsuit-against-you/articleshow/111092440.cms",
    urlToImage: "https://static.toiimg.com/thumb/msid-111092521,width-1070,height-580,imgsize-55020,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    publishedAt:"2024-06-18T17:57:00Z"
  },

];

app.get('/api/v1/articles', (req, res) => {
  res.json(articles);
});

// app.post('/api/v1/students', (req, res) => {
//   const { name, program, grade } = req.body;
//   const newStudent = {
//     id: uuidv4(),
//     name,
//     program,
//     grade,
//   };
//   students.push(newStudent);
//   res.json(newStudent);
// });

app.listen(port, () => console.log(`Listening on ${port}`));
