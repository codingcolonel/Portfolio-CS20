// Kung Fu Panda Character Look Up

// Event Listener
document.getElementById('search').addEventListener('click', searchClicked);

var po = {
name: 'Po',
image: 'img/po.png', 
quote: 'Buddy, I am the Dragon Warrior.',
}

var tigress = {
  name: 'Master Tigress',
  image: 'img/tigress.png', 
  quote: 'That was pretty hardcore!',
}

var mantis = {
  name: 'Master Mantis',
  image: 'img/mantis.png', 
  quote: 'Fear the bug!',
}

var monkey = {
  name: 'Master Monkey',
  image: 'img/monkey.png', 
  quote: 'We should hang out.',
}

var crane = {
  name: 'Master Crane',
  image: 'img/crane.png', 
  quote: 'You can chain my body, but you will never chain my warrior spirit!',
}

var viper = {
  name: 'Master Viper',
  image: 'img/viper.png', 
  quote: "I don't need to bite to fight!",
}

var shifu = {
  name: 'Master Shifu',
  image: 'img/shifu.png', 
  quote: 'There is now a Level Zero.',
}

var ping = {
  name: 'Mr. Ping',
  image: 'img/mr-ping.png', 
  quote: 'We are noodle folk, broth runs through our veins!',
}

var unknown = {
  name: '?????',
  image: 'img/question-mark.png', 
  quote: 'Character Not Found',
}



// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById('input-name').value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === 'po' || name === 'dragon warrior') {
    // Update page to Po
    changeElements(po)
  } else if (name === 'tigress' || name === 'master tigress') {
    // Update page to Tigress
    changeElements(tigress)
  } else if (name === 'mantis' || name === 'master mantis') {
    // Update page to Mantis
    changeElements(mantis)
  } else if (name === 'monkey' || name === 'master monkey') {
    // Update page to Monkey
    changeElements(monkey)
  } else if (name === 'crane' || name === 'master crane') {
    // Update page to Crane
    changeElements(crane)
  } else if (name === 'viper' || name === 'master viper') {
    // Update page to Viper
    changeElements(viper)
  } else if (name === 'shifu' || name === 'master shifu') {
    // Update page to Master Shifu
    changeElements(shifu)
  } else if (name === 'ping' || name === 'mr. ping') {
    // Update page to Mr. Ping
    changeElements(ping)
  } else {
    // Update page to Question Mark
    changeElements(unknown)
  }
}

function changeElements(character) {
  document.getElementById('character-name').innerHTML = character.name;
  document.getElementById('main-img').src = character.image;
  document.getElementById('quote').innerHTML = character.quote;
}
