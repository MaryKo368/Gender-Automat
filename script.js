<script type="text/javascript">
document.querySelector("form").onsubmit=function(){
    //Wert des Suche-Felds bestimmen
    let suche= document.querySelector("input").value;
    if(suche.length<3){alert("zu kurzer Suchbegriff");
}
else{//style ist ein Obkjekt, daher einfach eine Eigenschaft setzen
let h1=document.querySelector("h1");
h1.innerHTML="Noch nicht unterstützt";
h1.style["background-color"]="green";
}
return false;
};

document.getElementById("btn-gendern").onclick=function(){
    const texte= document.querySelectorAll("#texte p");
    texte.forEach(p =>{
        let text= p.textContent;
        //Ersetzte generisches Maskulinium durch gendergerechte Formen
        text = text.replaceAll("Techniker", "Techniker:innen");
            text = text.replaceAll("Mitarbeiter", "Mitarbeiter:innen");
            text = text.replaceAll("Benutzer", "Benutzer:innen");
            //Sicher: kein injizierter Code wurde ausgeführt
            p.textContent= text;

    });
    alert("Texte wurden gegendert!");
};
</script>

