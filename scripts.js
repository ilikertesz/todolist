$('body').ready(() => {
  $('span#all').text('0');
  $('span#done-it').text('0');
});

$('button#add').click(() => {
    let todo = $('input').val();
    $('ul').append("<li>" + todo + "</li>");
    $('li:last-child').append('<button class="done"><i class="fa-solid fa-check"></i></button>');
    $('li:last-child').append('<button class="delete"><i class="fa-regular fa-trash-can"></i></i></button>');
    $('input').val("");
    $('span#all').text($('li').length);
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
    $('span#all').text($('li').length -1);
});