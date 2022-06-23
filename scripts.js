$('body').ready(() => {
  $('span#all').text('0');
  $('span#done-it').text('0');
});

let all = $('li').length

$('button#add').click(() => {
    let todo = $('input').val();
    $('ul').append("<li>" + todo + "</li>");
    $('li:last-child').append('<button class="done"><i class="fa-solid fa-check"></i></button>');
    $('li:last-child').append('<button class="delete"><i class="fa-regular fa-trash-can"></i></i></button>');
    $('input').val("");
    all += 1;
    $('span#all').text(all);
});

$('body').keypress((event) => {
  let keycode = event.which;
  if(keycode == '13'){
    let todo = $('input').val();
    $('ul').append("<li>" + todo + "</li>");
    $('li:last-child').append('<button class="done"><i class="fa-solid fa-check"></i></button>');
    $('li:last-child').append('<button class="delete"><i class="fa-regular fa-trash-can"></i></i></button>');
    $('input').val("");
    all += 1;
    $('span#all').text(all);  
  }
});

$('ul').on('click', 'li',(event) => {
    $(event.target).addClass("alldone");
    $('span#done-it').text($('li.alldone').length);
  });

$('ul').on('click', 'button.done',(event) => {
    $(event.target.parentElement.parentElement).addClass("alldone");
    $('span#done-it').text($('li.alldone').length);
});

$('ul').on('click', '.delete', (event) => {
    $(event.target.parentElement.parentElement).css('display', 'none');
  if $(event.target.parentElement.parentElement.parentElement).hasClass("alldone") {
    let done = $('li.alldone').length;
    done -= 1;
    $('span#done-it').text($('li.alldone').length);
    all -= 1;
    $('span#all').text(all);
  } else {
    all -= 1;
    $('span#all').text(all);
  }
});
