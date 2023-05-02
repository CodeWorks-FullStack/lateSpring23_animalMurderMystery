/**
 * The murderer will become one of the animals from the animals array not just the emoji
 */
let murderer = null

const animals = [
  {
    name: 'Craig',
    picture: '🦑',
    oceanBound: true,
    diet: ['meat', 'fruits'],
    age: 823,
    weapon: 'intellect'
  },
  {
    name: 'Georgie',
    picture: '🐒',
    oceanBound: false,
    diet: ['fruits'],
    age: 8,
    weapon: 'strength'
  },
  {
    name: 'Guillermo Jr.',
    picture: '🦈',
    oceanBound: true,
    diet: ['meat'],
    age: 403,
    weapon: 'teeth'
  },
  {
    name: 'Gloria',
    picture: '🦙',
    oceanBound: false,
    diet: ['fruits'],
    age: 4,
    weapon: 'intellect'
  },
  {
    name: 'Carlos',
    picture: '🦃',
    oceanBound: false,
    diet: ['meat'],
    age: 3,
    weapon: 'claws'
  },
  {
    name: 'Oswald',
    picture: '🦦',
    oceanBound: true,
    diet: ['meat', 'fruits'],
    age: 40,
    weapon: 'teeth'
  },
  {
    name: 'Tiffany',
    picture: '🦞',
    oceanBound: true,
    diet: ['meat'],
    age: 3,
    weapon: 'claws'
  },
  {
    name: 'Derringer',
    picture: '🐕',
    oceanBound: false,
    diet: ['meat'],
    age: 35,
    weapon: 'teeth'
  },
  {
    name: 'Lè Pierrè',
    picture: '🐩',
    oceanBound: false,
    diet: ['meat'],
    age: 84,
    weapon: 'intellect'
  },
  {
    name: 'Bartholomew',
    picture: '🐭',
    oceanBound: false,
    diet: ['meat', 'fruits', 'trash'],
    age: 2,
    weapon: 'teeth'
  },
  {
    name: 'Flash',
    picture: '🦥',
    oceanBound: false,
    diet: ['meat', 'fruits'],
    age: 90,
    weapon: 'speed'
  },
  {
    name: 'Randy',
    picture: '🦆',
    oceanBound: true,
    diet: ['meat', 'fruits', 'trash'],
    age: 4,
    weapon: 'teeth'
  },
  {
    name: 'Pamela',
    picture: '🐡',
    oceanBound: true,
    diet: ['meat'],
    age: 1,
    weapon: 'horns'
  },
  {
    name: 'Raymond',
    picture: '🐉',
    oceanBound: true,
    diet: ['meat', 'fruits'],
    age: 53,
    weapon: 'intellect'
  },
  {
    name: 'Richard',
    picture: '🐓',
    oceanBound: false,
    diet: ['trash'],
    age: 23,
    weapon: 'claws'
  },
  {
    name: 'Gerry',
    picture: '🦫',
    oceanBound: false,
    diet: ['wood'],
    age: 15,
    weapon: 'teeth'
  }
]

let givenClues = []


// NOTE                v parameter
/**
 * Checks to see if an animal is the murderer, ends the game if so
 * @param {string} picture 
 */
function accuseAnimalByPicture(picture) {
  if (picture == murderer.picture) {
    alert('Great Job, Detective 🔎 you found the murderer')
    // TODO end game stuff
    // bring back all dead animals.....
    // or draw new game button play again????
    return
  }


  // 🔎 THE CLUE STUFF
  handleTheClueStuff()


  // 🗡️ THE BAD STUFF 
  console.log('The murderer will kill again....')


}

function handleTheClueStuff() {


  const options = ['oceanBound', 'diet', 'age', 'weapon']

  const randomOptionIndex = Math.floor(Math.random() * options.length)

  const clueKey = options[randomOptionIndex]


  if (givenClues.includes(clueKey)) {
    // this clue has already been given
    return // full stop I don't have to do anything else.... 🦥
  }

  // let's add this to our list of given clues then we will actually do the hard work
  givenClues.push(clueKey) // we do this no matter what if we get past ^ the return


  // if (murderer.oceanBound && clueKey == 'oceanBound') {
  //   return drawClue('There seems to be a puddle of water around the victim..... 💦')
  // }

  switch(clueKey){
    case 'oceanBound':
      murderer.oceanBound ? drawClue('There seems to be a puddle of water around the victim..... 💦') : null
      break;
    case 'weapon':
      if(murderer.weapon == 'teeth'){
        return drawClue('There are several chuncks of flesh ripped from the corpse 🧟‍♂️')
      }
      if(murderer.weapon == 'intellect'){
        return drawClue('So smart.... What a smarty pants 🥸')
      }
      if(murderer.weapon == 'horns'){
        return drawClue('The killer had a point 👉')
      }
      if(murderer.weapon == 'claws'){
        return drawClue('Rawr 🦖')
      }
      break;
    case 'diet':
      // if,elseif,elseif,else
      murderer.diet.includes('meat') 
        ? drawClue('🥩') 
        : murderer.diet.includes('fruits') 
        ? drawClue('🍍') 
        : murderer.diet.includes('trash') 
        ? drawClue('🍫')
        : drawClue('🪵')

      break;
    case 'age':
      murderer.age > 30 ? drawClue('This was obviously a professional hit.... 🧤') : drawClue('Ugh.... what a mess, 🤮')
      break;
  }

}


function handleTheBadStuff() {
  // TODO get a random animal index
  // make sure the animal is not already in the list of murderedAnimals
  // if they are full stop
  // if not add them to the list
  // then get their element and apply the murdered class
  // document.getElementById('🦥').classList.add('murdered')
}


function selectRandomMurderer() {
  const randomIndex = Math.floor(Math.random() * animals.length)
  murderer = animals[randomIndex]
}


/**
 * 🔎 A clue can be passed to be drawn to the screen
 * @param {string} clue 
 */
function drawClue(clue) {
  document.getElementById('clues').innerHTML += `<li class="list-group-item">${clue}</li>`

}



selectRandomMurderer()




























/**
 * 🐇🕳️ This is just for notes, please never write a function like this
 * @param {string} x 
 * @param {number} y 
 * @param {boolean} z 
 * @param {object} a 
 * @param {array} b
 */
function whatever(x, y, z, a, b) { }

whatever('', 2, false, {}, [''])