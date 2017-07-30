        $(document).ready(function(){
            $.ajax({
               url:'/api/watson',
               success: function(a,b,c){
                   //console.log(a);
                   $.each(a.results,function(i,v){
                        if(i==1){
                            //console.log(v);
                        }
                   });
               } 
            });
        });
