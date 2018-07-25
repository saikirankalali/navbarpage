$(document).ready(() =>{
        $(' #dropmenu').click(()=>{
        
        	$("#dropmenu ul").children().toggle();
        });
        $(' li a').hover(()=>{
        
        	$("this ").addclass("focus");
        });
         
       }) ;