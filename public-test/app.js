$('button').on('click', test)

function test() {
  console.log('clicked')
  $.get('./api', (res) => {
    console.log(res);
  })
}

