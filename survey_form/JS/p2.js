   
        var f1=document.getElementById("first");
        var f2=document.getElementById("last");
        var f3=document.getElementById("ma");
        var f4=document.getElementById("dob");
        var f5=document.getElementById("mobile");
        

        var sbut=document.getElementById("sub");
        var resbut=document.getElementById("res");
      sbut.addEventListener('click',(e)=>{
            e.preventDefault();
            if(f1.value =="")
            {
                alert("enter first name");
                f1.focus();
            }
            else if(f1.value!== "" && f2.value== "")
            {
                alert("enter last name");
                f2.focus();
            }
            else if(f1.value!=="" && f2.value!=="" && f3.value=="")
            {

              alert("enter mail");
              f3.focus();
            }
            else if(f1.value!=="" && f2.value!=="" && f3.value!=="" && f4.value=="")
            {

              alert("enter DOB");
              f4.focus();
            
            }
            else if(f1.value!=="" && f2.value!=="" && f3.value!=="" && f4.value!=="" && f5.value=="")
            {

              alert("enter DOB");
              f5.focus();
            }
            else{

                alert("Success to Upload");
            }
          
});

