const init = () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.querySelector('input#searchByID')
    //   console.log(input.value);
    //   form.reset();

      fetch(`http://localhost:3000/movies/${input.value}`)
      .then(resp => resp.json())
      .then(movie => {
          const title = document.querySelector('#movieDetails h4');
          const summary = document.querySelector('#movieDetails p');
          
          title.textContent = movie.title;
          summary.textContent = movie.summary;
      })

      form.reset();
  });

}

document.addEventListener('DOMContentLoaded', init);