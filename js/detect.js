function handle_click(element){
  fetch('https://ddcc-service-monitor-backend.herokuapp.com/api/minecraft?server=lobby')
  .then(res => {
      return res.json();
  }).then(result => {
      let server_state = result.isOnline;
      if (server_state){
        document.getElementById("lobby").src="image/mc-lobby-g.png";
      }
      else{
        document.getElementById("lobby").src="image/mc-lobby-r.png";
      }
  });
  fetch('https://ddcc-service-monitor-backend.herokuapp.com/api/minecraft?server=S-1')
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
  fetch('https://ddcc-service-monitor-backend.herokuapp.com/api/minecraft?server=S-2')
  .then(res => {
      return res.json();
  }).then(result => {
      let server_state = result.isOnline;
      if (server_state){
        document.getElementById("s2").src="image/mc-s2-g.png";
      }
      else{
        document.getElementById("s2").src="image/mc-s2-r.png";
      }
  });
  fetch('https://ddcc-service-monitor-backend.herokuapp.com/api/minecraft?server=S-3')
  .then(res => {
      return res.json();
  }).then(result => {
      let server_state = result.isOnline;
      if (server_state){
        document.getElementById("s3").src="image/mc-s3-g.png";
      }
      else{
        document.getElementById("s3").src="image/mc-s3-r.png";
      }
  });
  fetch('https://ddcc-service-monitor-backend.herokuapp.com/api/minecraft?server=S-4')
  .then(res => {
      return res.json();
  }).then(result => {
      let server_state = result.isOnline;
      if (server_state){
        document.getElementById("s4").src="image/mc-s4-g.png";
      }
      else{
        document.getElementById("s4").src="image/mc-s4-r.png";
      }
  });
  fetch('https://ddcc-service-monitor-backend.herokuapp.com/api/minecraft?server=S-5')
  .then(res => {
      return res.json();
  }).then(result => {
      let server_state = result.isOnline;
      if (server_state){
        document.getElementById("s5").src="image/mc-s5-g.png";
      }
      else{
        document.getElementById("s5").src="image/mc-s5-r.png";
      }
  });
  fetch('https://ddcc-service-monitor-backend.herokuapp.com/api/minecraft?server=R-1')
  .then(res => {
      return res.json();
  }).then(result => {
      let server_state = result.isOnline;
      if (server_state){
        document.getElementById("r1").src="image/mc-r1-g.png";
      }
      else{
        document.getElementById("r1").src="image/mc-r1-r.png";
      }
  });
  fetch('https://ddcc-service-monitor-backend.herokuapp.com/api/minecraft?server=T-1')
  .then(res => {
      return res.json();
  }).then(result => {
      let server_state = result.isOnline;
      if (server_state){
        document.getElementById("t1").src="image/mc-t1-g.png";
      }
      else{
        document.getElementById("t1").src="image/mc-t1-r.png";
      }
  });
}



