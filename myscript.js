

document.getElementById("read").onclick = function () {
  const rollV = document.getElementById("roll").value;
  firebase
    .database()
    .ref("ValunteerDetails/" + rollV)
    .on("value", function (snap) {
     const ADDRESS = snap.val().ADDRESS;
    const BG= snap.val().BG
    const CERTIFICATEID= snap.val().CERTIFICATEID;
   const COLLEGE= snap.val().COLLEGE; 
    const CONTACT= snap.val().CONTACT;
    const DOB= snap.val().DOB;
    const EMAIL= snap.val().EMAIL;
   const FATHER= snap.val().FATHER;
   const GENDER= snap.val().GENDER;
   const NAME= snap.val().NAME;
   const POSITION= snap.val().POSITION;
   const SESSION= snap.val().SESSION;
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
});
}
// Url = {
//     get get(){
//         var vars= {};
//         if(window.location.search.length!==0)
//             window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value){
//                 key=decodeURIComponent(key);
//                 if(typeof vars[key]==="undefined") {vars[key]= decodeURIComponent(value);}
//                 else {vars[key]= [].concat(vars[key], decodeURIComponent(value));}
//             });
//         return vars;
//     }
// };