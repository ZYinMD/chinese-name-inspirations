$('button').on('click', test)

function test() {
  $.get('./api/char/eval', (res) => {
    console.log(res);
  })
}

