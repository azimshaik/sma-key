        $(document).ready(function(){
            $.ajax({
               url:'http://sma-key.mybluemix.net/api/watson',
               success: function(a,b,c){
                   //console.log(a);
                   $.each(a.results,function(i,v){
                        if(i==1){
                            console.log(v);
                        }
                   });
               } 
            });
            // $.each(resp,function(i,v){
            //     //console.log(v);

            // });
            // var resp = JSON.stringify(resp)
            // console.log(resp)
            // var resp = JSON.parse(resp)
            // console.log(resp)
            // $.each(resp, function(i,v){
            //     $.each(v,function(index, val){
            //         console.log(val)
            //     });
            // });
            
        });
