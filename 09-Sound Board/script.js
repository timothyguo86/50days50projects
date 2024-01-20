const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.map((sound) => {
  const audio = document.createElement('audio')
  audio.setAttribute('src', `sounds/${sound}.mp3`)
  audio.setAttribute('id', sound)

  document.querySelector('#audio-container').append(audio)

  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = sound
  document.querySelector('#button-container').append(btn)

  btn.addEventListener('click', () => {
    stopSongs()
    document.getElementById(sound).play()
  })
})

function stopSongs() {
  sounds.map((sound) => {
    const song = document.getElementById(sound)
    song.pause()
    song.currentTime = 0
  })
}
