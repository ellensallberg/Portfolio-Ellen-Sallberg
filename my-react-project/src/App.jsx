import Project from "./components/project.jsx"
import image1 from "./assets/exploreTheInfinite.jpg"
import image2 from "./assets/genesis.jpg"
import image3 from "./assets/typingGame.jpg"

function App() {
  return (
    <>
      <div className="projectsContainer">
        <Project 
          title = "Explore The Infinite" 
          text = {`Explore The Infinite is a website created for a fictional company as part of a team project.
           My role focused on developing and validating front end forms. Through the project, I gained experience working with agile methods,
           collaborating in a team, and improving usability and responsive design.`}
          list = "HTML, CSS" 
          image = {image1}
          projectLink = "https://github.com/Fu94f/Group-project.git"
        />
        <Project 
          title = "Genesis" 
          text = {`Genesis is a project where I recreated a Figma design using HTML and CSS, with a strong focus on CSS Grid for layout and responsive structure.
           Through the project, I improved my ability to translate design concepts into clean and structured front end code.`}
          list = "HTML, CSS"  
          image = {image2}
          projectLink = "https://github.com/ellensallberg/Genesis.git"
        />
        <Project 
          title = "Typing Game" 
          text = {`Typing Game is a browser game built with vanilla JavaScript where the player types words as quickly as possible before the timer runs out.
           I developed the game logic, including the timer, score counter, and input handling,
           which improved my understanding of connecting different parts of an application.`} 
          list = "JavaScript" 
          image = {image3}
          projectLink = "https://github.com/ellensallberg/typingGame.git"
        />
      </div>
    </>
  )
}

export default App
