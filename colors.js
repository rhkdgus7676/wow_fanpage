var body = {
  setcolor:function(color){
      document.querySelector('body').style.color = color;
  },
  setbackgroundcolor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

var links = {
  setcolor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
    alist[i].style.color = color;
    i= i + 1;
    }
  }
}

function dealertankerhandler(self){
var target = document.querySelector('body');
  if(self.value == 'dealer'){
    body.setbackgroundcolor('green');
    body.setcolor('yellow');
  self.value = 'tanker';

  links.setcolor('black');
}
  else{
    body.setbackgroundcolor('brown');
    body.setcolor('blue');
    self.value = 'dealer';

    links.setcolor('white');
  }}
