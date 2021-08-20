const ScreenInput = document.querySelector('.result');
const AllBtn = document.querySelectorAll('.btn');
const AllClearBtn = document.querySelector('.all-clear-btn');
const DelBtn = document.querySelector('.del-btn');
const EqualBtn = document.querySelector('.equal-btn');

AllBtn.forEach(function (singleBtn) {
    singleBtn.addEventListener("click", function (event) {
      const currentNumber = event.target.dataset.num;
      ScreenInput.value += currentNumber;
      event.preventDefault();
    });
  });

  AllClearBtn.addEventListener('click', ClearScreen);
  function ClearScreen(event){
      ScreenInput.value = "";
  };
  DelBtn.addEventListener('click', remove);
  function remove(event){
   ScreenInput.value = ScreenInput.value.substr(0,ScreenInput.value.length-1);
  }
  EqualBtn.addEventListener('click', answer);
  function answer(event){
      ScreenInput.value = eval(ScreenInput.value);
  }
  