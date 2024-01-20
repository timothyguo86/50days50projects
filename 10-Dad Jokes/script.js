const jokeEl = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')
const tweetButton = document.querySelector('#tweetBtn')
const tweetIntent = 'https://twitter.com/intent/tweet?text='

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }

  try {
    await fetch('https://icanhazdadjoke.com/', config)
      .then(res => res.json())
      .then(data => {
        jokeEl.innerText = data.joke
        tweetButton.href =
          tweetIntent +
          encodeURIComponent(
            data.joke + '\n\t~ via #tweetadadjoke on Codepen https://codepen.io/timothyguo/full/VwRWjRe'
          )
      })
  } catch (error) {
    console.error('Error fetching joke:', error)
    jokeEl.innerText = 'No Joke For You'
  }
}

generateJoke()

jokeBtn.addEventListener('click', generateJoke)
