function build_interface(){
  // build the HTML structure to hold and display content
  // An interface needs to have a menu, a way to invoke the settings page
  // A table of contents
  // landing page for when the book first opens


}

function test_menu(){

}

function add_item(){

}

function turn_page(direction, evt){
    console.log(direction, evt)
    document.getElementById('slider').classList.remove('closed');
}

function show_toc(evt){
  console.log("showing toc", evt)
  
  if(tag("table-of-contents").style.height===tag("table-of-contents").scrollHeight + "px"){
    tag("table-of-contents").style.height = "0px"
  }else{
    tag("table-of-contents").style.height = tag("table-of-contents").scrollHeight + "px"
  }
}

async function show_user_menu(evt){
  console.log("showing user menu", evt)

  console.log("testing API request")
  response=await get_page("content/junk7.html", "https://basis-dev.blogspot.com/")
  //response=await api_request({a:"from blog"}, "https://basis-dev.blogspot.com/?api")
  console.log(response)
  
}
