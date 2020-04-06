import './style.css';
import $ from 'jquery';
import welcomeImg from '../dist/09781134dab0b8c6c8e6b99bdc8ba514.jpg';
import quizSnippit from '../dist/530e52cd1dfe9473baceb2bd9ccf7935.png';

function generateWelcomeView(){
  return (
    ` <h1>Welcome</h1>
      <h2 id="opening_statement">My name is Chris and I went to math camp.</h2>
      <img id='welcome_image' src="${welcomeImg}" alt="Chris sitting and wearing a suit from the game Fallout">`
  );
}


function generateBioView(){
  return (
    `<h2>Bio</h2>
    <p>
      Going from a small town boy with big aspirations to being able to call 
      myself a father and web developer has been quite a journey. It all 
      started with going to math camp (Well, it was more of a math and science 
      honors program that high school students attended during their summer 
      break). That’s what sparked my interest in coding. My first 
      experience with this new found passion by becoming the head programmer 
      for my high school robotics team for the remaining 3 years of high school.
      From there, I continued to take Computer Science college courses while 
      raising and providing for two wonderful boys. Any free time I had was 
      spent either going on runs or playing video games on my custom built 
      computer. After spending years in customer service related jobs and now 
      that my boys are becoming more independent, I finally found the time and 
      opportunity to rekindle my passion for coding.
    </p>`
  );
}

function generateProjectView(){
  return(
    `<h2>Projects</h2>
    <h3>Borderlands Quiz</h3>
    <img id='quiz_snippit' src="${quizSnippit}" alt="A snippet of the quiz application">
    <p>
      <span>Description:</span> An application that allows the user to play through a Borderlands 2 themed
      quiz.
    </p>
    <div class="project_links">
      <a href="https://github.com/thinkful-ei-leopard/jorge-chris-quiz-app" target="_blank">Github Repo</a>
      ||
      <a href="https://thinkful-ei-leopard.github.io/jorge-chris-quiz-app/" target="_blank">Live hosted page</a>
    </div>`
  );
}

const STORE = {
  sectionVal: 'welcome',
};

function render() {
  if (STORE.sectionVal === 'welcome') {
    $('main').html(generateWelcomeView());
  } else if (STORE.sectionVal === 'bio') {
    $('main').html(generateBioView());
  } else if (STORE.sectionVal === 'projects') {
    $('main').html(generateProjectView());
  }
}

function handleSelectValue(){
  $('select').change(() => {
    STORE.sectionVal = $('select').val();
    render();
  });
}

render();
handleSelectValue();