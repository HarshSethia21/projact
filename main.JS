var reasons = [
    
    "The parents Sandeep Sethia And Purnima Sethia",
    "The brother and sister Harsh and Kushi",
    "The grand parents PAyal sethia and Rishab"
  ];
  
  var images = [
    
    "https://us.123rf.com/450wm/yupiramos/yupiramos1904/yupiramos190418715/123390809-young-couple-avatars-characters-vector-illustration-design.jpg?ver=6",
   " https://www.kindpng.com/picc/m/16-164838_brother-sibling-sister-clip-art-brother-and-sister.png",
    "https://thumbs.dreamstime.com/b/happy-grandparents-elderly-people-grandparent-s-day-grandfather-grandmother-vector-card-white-background-98347485.jpg"
  ];
  
  var i = 0;
  function nextslide() {  document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
                        document.getElementById("audio").play();
   
  }
  
  
  
  