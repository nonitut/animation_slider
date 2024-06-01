document.addEventListener('DOMContentLoaded', function () {
  let count = 1; // перемотка событий

  function updateState() {
    const states = [
      {class: 'bt', transformX: '33vw', rotate: '-1deg', header: 'БАБЛ-ТАЙМ'},
      {class: 'meditation', transformX: '-1vw', rotate: '-95deg', header: 'МЕДИТАЦИИ'},
      {class: 'fluid_art', transformX: '-35vw', rotate: '-190deg', header: 'ФЛЮИД-АРТ'},
      {class: 'gadaniya', transformX: '-69vw', rotate: '-276deg', header: 'ГАДАНИЯ'}
    ];
    let state = states[count % states.length];

    ['bt', 'meditation', 'fluid_art', 'gadaniya'].forEach(event => {
      let elements = document.querySelectorAll(`.${event}`);
      elements.forEach(el => el.style.animationPlayState = 'paused');
    });

    let darkens = document.querySelectorAll('.darken');
    darkens.forEach(darken => darken.style.opacity = '1');

    let activeElements = document.querySelectorAll(`.${state.class}`);
    activeElements.forEach(el => el.style.animationPlayState = 'running');
    let activeDarken = document.querySelector(`.${state.class} .darken`);
    if (activeDarken) activeDarken.style.opacity = '0';

    document.querySelector('.event_cards').style.transform = `translateX(${state.transformX})`;
    document.querySelector('.event_text').style.transform = `rotate(${state.rotate})`;
    document.querySelector('.reg_head').innerHTML = state.header;
  }

  document.querySelector('.next').addEventListener('click', function () {
    count += 1;
    updateState();
    resetRegButton();
  });

  document.querySelector('.previous').addEventListener('click', function () {
    count -= 1;
    if (count < 0) count = 3;
    updateState();
    resetRegButton();
  });

  // // кнопка регистрации
  // document.querySelector('.registration').addEventListener('click', function () {
  //   document.querySelector('.darken_reg').style.zIndex = '1';
  //   setTimeout(function () {
  //     document.querySelector('.reg_form').style.opacity = '1';
  //     document.querySelector('.darken_reg').style.opacity = '0.7';
  //   }, 200);
  // });

  // document.querySelector('.exit_btn').addEventListener('click', function () {
  //   document.querySelector('.reg_form').style.opacity = '0';
  //   document.querySelector('.darken_reg').style.opacity = '0';
  //   setTimeout(function () {
  //     document.querySelector('.darken_reg').style.zIndex = '-3';
  //   }, 300);
  // });

  // function resetRegButton() {
  //   let regBtn = document.querySelector('.reg_btn');
  //   regBtn.innerHTML = 'Записаться!';
  //   regBtn.style.backgroundColor = '#FF7596';
  // }

  // document.querySelector('.reg_btn').addEventListener('click', function () {
  //   let regBtn = document.querySelector('.reg_btn');
  //   regBtn.innerHTML = 'Ты записан(а)!';
  //   regBtn.style.backgroundColor = '#FFDCE9';
  // });

  // document.querySelector('.previous').addEventListener('click', resetRegButton);
  // document.querySelector('.next').addEventListener('click', resetRegButton);
});
