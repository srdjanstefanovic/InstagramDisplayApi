const token = "IGQVJWVlNKcmtYa2ozMjRxVmhZAUkJtc2FLREFac3J1NXBqRmpLWkI3NG9SRHdEVXN4T3BnaGNlcEJhRzFRTk83bmR2dFRHM3o0ZAnNDN3VXMmJFSEhGanVqbkl0N3lKckgtTUlUQnRsRF9qbmFGaUVPNGszOU12UEVHa2NR";

//prvo saljemo zahtev kojim dobijamo osnovne informacije o profilu
$.getJSON("https://graph.instagram.com/17841431608152940?fields=id,username,media_count,account_type&access_token="+token, 
        function(data){
            
            $("#head-profil").text("Profil korisnika: "+data.username);
            $("#korisnicko-ime").text("Korisnicko ime: "+data.username);
            $("#broj-objava").text("Broj objava: "+data.media_count);
            $("#id-korisnika").text("Id korisnika: "+data.id);
            $("#tip-naloga").text("Tip naloga: "+data.account_type);
        });

//zatim saljemo zahtev da dobijemo informacije o objavama tog profila
$.getJSON("https://graph.instagram.com/17841431608152940/media?fields=id,caption&access_token="+token, 
        function(data){
            var mediaId = data.data[0].id;
            //alert(mediaId);
            $("#opis-objave").text("Opis objave: "+data.data[0].caption);
           

        });

// u prethodnom zahtevu smo dobili id poslednje objave na profilu, ovim zahtevom preuzimamo url te fotografije i prikazujemo je
$.getJSON("https://graph.instagram.com/17851307273028969?fields=id,media_type,media_url,username,timestamp&access_token="+token, 
        function(data){
            
            
            $("#poslednja-slika").attr("src",data.media_url);
            

});

        
