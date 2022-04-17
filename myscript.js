let ADDRESS,BG,COLLEGE,CONTACT,DOB,EMAIL,FATHER,GENDER,NAME,POSITION,SESSION,VERIFIEDBY,WORKINKWA,CERTIFICATEID
function amr() {
  ADDRESS=document.getElementById("address").value;
  BG= document.getElementById("bg").value;
  COLLEGE= document.getElementById("College").value;; 
  CONTACT= document.getElementById("mob").value;
  DOB= document.getElementById("DOB").value;
  EMAIL= document.getElementById("email").value;
  FATHER= document.getElementById("father").value;
  GENDER= document.getElementById("gender").value;
  NAME= document.getElementById("name").value;
  POSITION=document.getElementById("pos").value;
  SESSION= document.getElementById("Session").value;
  VERIFIEDBY= "PRINCIPAL JEC,SENIOR HEAD OF KAARWAAN,HEAD OF KAARWAAN,PRESIDENT OF KAARWAAN";
  WORKINKWA= "4 Years";
  CERTIFICATEID= `KWA${CONTACT.slice(0,4)}${DOB.slice(0,5).replace('/', '')}${NAME.slice(0,1)}` 
}
document.getElementById("insert").onclick = function () {
  amr();
  firebase
    .database()
    .ref("ValunteerDetails/" + CERTIFICATEID)
    .set({
      ADDRESS:ADDRESS,
      BG:BG,
      CERTIFICATEID:CERTIFICATEID,
      COLLEGE:COLLEGE,
      CONTACT:CONTACT,
      DOB:DOB,
      EMAIL:EMAIL,
      FATHER:FATHER,
      GENDER:GENDER,
      NAME:NAME,
      POSITION:POSITION,
      SESSION:SESSION,
      VERIFIEDBY:VERIFIEDBY,
      WORKINKWA:WORKINKWA
    });
    window.alert("Entry Inserted");
};
