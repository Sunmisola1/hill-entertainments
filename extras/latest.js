// Sample data for the music catalog
const musicData = [
  {
    title: 'Song 1',
    artist: 'Artist 1',
    genre: 'Pop',
    year: 2020,
    image: 'https://placekitten.com/150/150'
  },
  {
    title: 'Song 2',
    artist: 'Artist 2',
    genre: 'Rock',
    year: 2019,
    image: 'https://placekitten.com/150/151'
  },
  {
    title: 'Song 3',
    artist: 'Artist 3',
    genre: 'Hip Hop',
    year: 2021,
    image: '/assets/album.png'
  },
  {
    title: 'Song 3',
    artist: 'Artist 3',
    genre: 'Hip Hop',
    year: 2021,
    image: 'https://placekitten.com/150/152'
  },
  {
    title: 'Song 3',
    artist: 'Artist 3',
    genre: 'Hip Hop',
    year: 2021,
    image: 'https://placekitten.com/150/152'
  }
  // Add more songs as needed
]

// Function to generate HTML for each music item
function generateMusicItemHTML (music) {
  return `
        <div class="bg-white p-2 rounded-lg shadow-md relative">
            <img src="${music.image}" alt="${music.title}" class="mb-2 rounded-lg h-20 w-full object-cover">

            <h2 class="text-sm font-bold mb-1">${music.title}</h2>
            <p class="text-xs text-gray-600">${music.artist}</p>
            <p class="text-xs text-gray-600">${music.genre}</p>
            <p class="text-xs text-gray-600">${music.year}</p>

            <div class="absolute bottom-2 right-2">
                <button class="text-blue-500 mr-2" onclick="togglePlayPause('${music.title}')">
                    <span id="${music.title}IconPlay" class="fas fa-play"></span>
                    <span id="${music.title}IconPause" class="fas fa-pause hidden"></span>
                </button>
                 
                <span class="ml-2 text-sm text-red-600 "><i class="fa-brands fa-spotify fa-beat-fade"></i></span>
                <span class="ml-4 text-sm text-red-600 "><i class="fa-brands fa-youtube fa-beat-fade"></i></span>
                            <span class="ml-4 text-sm text-red-600 "><i class="fa-solid fa-cloud fa-beat"></i></span>

                
                <button class="text-yellow-500">
                    <span></span>
                </button>
            </div>
        </div>
    `
}

// Function to toggle play/pause functionality
function togglePlayPause (title) {
  const playIcon = document.getElementById(`${title}IconPlay`)
  const pauseIcon = document.getElementById(`${title}IconPause`)

  // Toggle visibility of play and pause icons
  if (playIcon && pauseIcon) {
    playIcon.classList.toggle('hidden')
    pauseIcon.classList.toggle('hidden')
  }

  // Add your play/pause logic here
  alert(`Play/Pause clicked for: ${title}`)
}

// Function to render the music catalog
function renderMusicCatalog () {
  const musicListContainer = document.getElementById('musicList')
  musicListContainer.innerHTML = '' // Clear existing content

  // Generate HTML for each music item and append it to the container
  musicData.forEach(music => {
    const musicItemHTML = generateMusicItemHTML(music)
    musicListContainer.innerHTML += musicItemHTML
  })
}

// Initial rendering of the music catalog
renderMusicCatalog()

// hero
// slider
const swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000 // Time in milliseconds between slides
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
