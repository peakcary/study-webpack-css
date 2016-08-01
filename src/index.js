require('./alert.js')
import greetings from './robot.js'

document.write(greetings("affirmative","dave"));


import styles from './app.css'

let element = `
      <div class="element">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium recusandae itaque libero velit minus ex reiciendis veniam. Eligendi modi sint delectus beatae nemo provident ratione maiores, voluptatibus a tempore!</p>
      </div>
`
document.write(element);

let element1 = `
      <div class="${styles.element}">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium recusandae itaque libero velit minus ex reiciendis veniam. Eligendi modi sint delectus beatae nemo provident ratione maiores, voluptatibus a tempore!</p>
      </div>
`
document.write(element1);
