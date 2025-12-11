var limitItemsperPage = 3; //Aqui você pode o numero de items a ser exibido na tela
    var counter = 0;
    var numberOfPages = 0;

    $(".box-pinacao > .item-pg").each(function(){
      if(counter == limitItemsperPage){counter = 0;}
      if(counter == 0){
        ++numberOfPages;
        $(".box-pinacao").append(`
          <div class="page" page-id="${numberOfPages}">
          </div>
        `);
      };
      $(this).clone().appendTo(".page[page-id="+numberOfPages+"]");
      $(this).detach();
      ++counter;
    });
    for(let i = 1; i <= numberOfPages; i++){
      $(".btn-paginacao").append(`
        <li class="page_anchor" page-id="${i}">${i}</li>
      `)
    }
    $("ul.btn-paginacao").append(`<button onclick="changePage('next')"> > </button>`);
    $("ul.btn-paginacao").prepend(`<button onclick="changePage('prev')"> < </button>`);

    $(".page").eq(0).addClass("ativaPag");
    $(".page_anchor").eq(0).addClass("ativaPag");
    $(".page_anchor").on("click",function(){
      var id = $(this).attr("page-id");
      $(".page_anchor.ativaPag").removeClass("ativaPag");
      $(this).addClass("ativaPag");
      
      $(".page.ativaPag").removeClass("ativaPag");
      $(".page[page-id="+id+"]").addClass("ativaPag");
    });

    function changePage(command){
      try{
        if(command == 'next'){
          $("li.ativaPag").next().trigger("click");
        }
        if(command == 'prev'){
          $("li.ativaPag").prev().trigger("click");
        }
      }catch(err){ }
      
    }