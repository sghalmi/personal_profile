window.addEventListener('scroll', function(e) {    
    if (window.scrollY > 200) {
        console.log("hiii");
        document.querySelector('.side_bar').setAttribute('id','past_pt_sidebar'); 
        document.querySelector('.besides_sidebar').setAttribute('id','past_besides');  
        document.querySelector('.information').setAttribute('id','pls_work');     
    }
    
    if (window.scrollY < 200 ) {
        console.log("goooo");
        document.querySelector('.side_bar').removeAttribute('id','past_pt_sidebar'); 
        document.querySelector('.besides_sidebar').removeAttribute('id','past_besides');  
        document.querySelector('.information').removeAttribute('id','pls_work');             

    }
});
  