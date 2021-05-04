

$(document).ready(
          function  (){
            $.ajax({
                type:'GET',
                url:'http://192.168.10.85:9000/users',
                success: function(data){
                    console.log(data);
                },
                error: function(data){
                    console.log(data);
                }
            })
})           