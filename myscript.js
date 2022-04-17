
document.getElementById("read").onclick = function () {
    const rollV = document.getElementById("roll").value;
     const email = document.getElementById("email").value;
     let ADDRESS,BG,CERTIFICATEID,COLLEGE,CONTACT,DOB,EMAIL,FATHER,GENDER,NAME,POSITION,SESSION
     let  VERIFIEDBY= "PRINCIPAL JEC,SENIOR HEAD OF KAARWAAN,HEAD OF KAARWAAN,PRESIDENT OF KAARWAAN";
    let  WORKINKWA= "4 Years";
     if(rollV==`KWA96699822P`){
        if(email=="jnvpghitesh@gmail.com"){
           ADDRESS = "Nadiya gate pichhore dabra gwalior 475115"
           BG= "A+"
           CERTIFICATEID="KWA96699822P"
           COLLEGE= "Jabalpur Engineering College" 
           CONTACT= "9340318270"
           DOB= "01/08/1998"
           EMAIL= "jnvpghitesh@gmail.com"
           FATHER= "Girijashankar Shrivastav"
           GENDER= "Male"
           NAME= "Hitesh Shrivastav"
           POSITION= "Event manager"
           SESSION= "2017-2021"
        }else{
            ADDRESS = "NA"
            BG= "O+"
            CERTIFICATEID= "KWA96699822P"
            COLLEGE=  "Jabalpur Engineering College" 
            CONTACT= "NA"
            DOB= "NA"
            EMAIL= "NA"
            FATHER= "NA"
            GENDER= "NA"
            NAME= "PRANAV BHAGAT"
            POSITION= "MEDIA HEAD"
            SESSION= "2017-2021"
        }
            const arr = [{"Name":NAME},{"FATHER'S NAME":FATHER},{"Blood Group":BG},{"Certificate Id":CERTIFICATEID},{"College":COLLEGE},{"Email":EMAIL},{"Contact":CONTACT},{"Gender":GENDER},{"Position in KaarwaaN":POSITION},{"Session":SESSION},{"Verified By":VERIFIEDBY},{"Duration In KaarwaaN":WORKINKWA},{"Date of Birth":DOB},{"ADDRESS":ADDRESS}]
            var html="";
            arr.forEach(function(data){
               
                html+=`<tr>
                <th scope="row">${Object.keys(data)[0]}</th>
                <td>${data[Object.keys(data)[0]]}</td>
                </tr>`;
            })
           
            document.getElementById('result').innerHTML+=html;
        console.log(html)
    }else{
    firebase
      .database()
      .ref("ValunteerDetails/" + rollV)
      .on("value", function (snap) {
         
       
       
       ADDRESS = snap.val().ADDRESS;
       BG= snap.val().BG
      CERTIFICATEID= snap.val().CERTIFICATEID;
      COLLEGE= snap.val().COLLEGE; 
      CONTACT= snap.val().CONTACT;
       DOB= snap.val().DOB;
       EMAIL= snap.val().EMAIL;
      FATHER= snap.val().FATHER;
      GENDER= snap.val().GENDER;
     NAME= snap.val().NAME;
      POSITION= snap.val().POSITION;
      SESSION= snap.val().SESSION;
     const VERIFIEDBY= snap.val().VERIFIEDBY;
    const WORKINKWA= snap.val().WORKINKWA;
        const arr = [{"Name":NAME},{"FATHER'S NAME":FATHER},{"Blood Group":BG},{"Certificate Id":CERTIFICATEID},{"College":COLLEGE},{"Email":EMAIL},{"Contact":CONTACT},{"Gender":GENDER},{"Position in KaarwaaN":POSITION},{"Session":SESSION},{"Verified By":VERIFIEDBY},{"Duration In KaarwaaN":WORKINKWA},{"Date of Birth":DOB},{"ADDRESS":ADDRESS}]
        var html="";
        arr.forEach(function(data){
           
            html+=`<tr>
            <th scope="row">${Object.keys(data)[0]}</th>
            <td>${data[Object.keys(data)[0]]}</td>
            </tr>`;
        })
       
        document.getElementById('result').innerHTML+=html;
    console.log(html)
  
    
      console.log(ADDRESS,BG,CERTIFICATEID,COLLEGE,CONTACT,DOB,EMAIL,FATHER,GENDER,NAME,POSITION,SESSION,VERIFIEDBY,WORKINKWA)
  });}
  }
