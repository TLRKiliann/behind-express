const express = require('express');

const app = express();
app.use(express.json());

const PORT = 5000;

const notes = [
  {
    'id': 1,
    'name': 'Celestine',
    'age': 42
  },
  {
    'id': 2,
    'name': 'Francine',
    'age': 38
  }
];

console.log(notes)

app.get('/notes', (request, response) => {

  console.log(request.params)
  response.json(notes);
})

app.get('/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find(note => note.id === id);
  response.status(200).json(note);
});


app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`));