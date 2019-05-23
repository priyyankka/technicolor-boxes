function yes(){
  let w=window.innerWidth;
  let h=window.innerHeight;
  var r=Math.floor(h/30);
  var c=Math.floor(w/45);


  $("#main").css("height",30*r);
  $("#main").css("width",45*c);
  $("#part").css("height",30*r);
  $("#part").css("width",22.5*c);
  var color1;

  $(".box").css({"width":"45","height":"30"});

  $(document).ready(function(){
    $(".box").mouseover(function(){
      color1=color();
      $(this).css("background-color",color1);
      $(this).css("z-index","20000000");
      $(this).css("box-shadow","5px 5px");


    });
    $(".box").mouseout(function(){
      $(this).css('box-shadow', "none");
      $(this).css('z-index', "1");
    });
  });
  function color(){
    let letter="0123456789ABCDEF".split("");
    let bg="#";
    for(let i=0;i<6;i++){
      bg+=letter[Math.floor(Math.random()*15)]
    }
    return bg;
  }
}
