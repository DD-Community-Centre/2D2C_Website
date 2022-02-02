function handle_click(element){
  fetch('https://ddcc-service-monitor-backend.herokuapp.com/api/minecraft?server=lobby')
  .then(res => {
      return res.json();
  }).then(result => {
      let server_state = result.isOnline;
      if (server_state){
        document.getElementById("s1").src="image/mc-s1-g.png";
      }
      else{
        document.getElementById("s1").src="image/mc-s1-r.png";
      }
  });
}


