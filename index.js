var button1 = $('.img1');
var button2 = $('.img2');
var button3 = $('.img3');
var button4 = $('.img4');
var button5 = $('.img5');
var button6 = $('.img6');
var button7 = $('.img7');
var button8 = $('.img8');
var button9 = $('.img9');
var button10 = $('.img10');
var button11 = $('.img11');
var button12 = $('.img12');
var submit = $('.submit');
var append = $('.append');
var userScore= 0;


button1.on("click", func1);
button2.on("click", func2);
button3.on("click", func3);
button4.on("click", func4);
button5.on("click", func5);
button6.on("click", func6);
button7.on("click", func7);
button8.on("click", func8);
button9.on("click", func9);
button10.on("click", func10);
button11.on("click", func11);
button12.on("click", func12);
submit.on("click", funcsubmit);


function func1() {
  userScore= userScore+1;
}

function func2() {
  userScore= userScore+2;
}

function func3() {
  userScore= userScore+3;
}

function func4() {
  userScore= userScore+4;
}
function func5() {
  userScore= userScore+1;
}
function func6() {
  userScore= userScore+2;
}

function func7() {
  userScore= userScore+3;
}

function func8() {
  userScore= userScore+4;
}

function func9() {
  userScore= userScore+1;
}

function func10() {
  userScore= userScore+2;
}
function func11() {
  userScore= userScore+3;
}
function func12() {
  userScore= userScore+4;
}

function funcsubmit() {
  console.log(userScore);
  if (userScore<7) {
    append.append (`
      <section class="submitAnswer">
      <h1 class="submitAnswerHead">You are happy.</h1>
      <p class="submitBlurb">You are happy. There are many foods you can eat to keep up your good mood. Click "Go" to see some of these food.</p>
      <button class="submitansbutton" href="#">Go</button>
      </section>
      `)
  }
  else if (userScore>7 && userScore<10) {
    append.append (`
      <section class="submitAnswer">
      <h1 class="submitAnswerHead">You are anxious.</h1>
      <p class="submitBlurb">You are anxious. There are many foods you can eat to boost your mood. Click "Go" to see some of these food.</p>
      <button class="submitansbutton" href="#">Go</button>
      </section>
    `)
  }
  else {
    append.append (`
      <section class="submitAnswer">
      <h1 class="submitAnswerHead">You are sad.</h1>
      <p class="submitBlurb">You are sad. There are many foods you can eat to boost your mood. Click "Go" to see some of these food.</p>
      <button class="submitansbutton" href="#">Go</button>
      </section>
      `)
  }

}
