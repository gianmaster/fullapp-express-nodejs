var socket = io.connect('http://localhost:3000', {
  forceNew: true
});

socket.on('messages', function(data){
  console.log(data);
  render(data);
});

function render(data){
  var html = data.map(function(elem, idx){
    return(`
      <div>
        <strong>${elem.author}</strong>
        <em>${elem.text}</em>
      </div>
      `)
  }).join(" ");

  document.getElementById("messages").innerHTML = html;
}

/*
functino para enviar los mensajes
*/
function addMessage(e){
  var mensaje = {
    author: document.getElementById("username").value,
    text: document.getElementById("texto").value
  };

  console.log(mensaje);
  socket.emit('new-message', mensaje);
  return false;
}
