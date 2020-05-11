const userId="";
const token = "IGQVJVVjZANOGpCRFdQeVNndDNRaEpyajZAmekJHNHVvd0JwZAlRqRU03ZADJFcUZAFZAWtCdEJadWFMVXJPbEJmUDlfYU83d2dhd2x3b08ySndZANTEtM3gwcHlLLTNYU2h0aTc4NDZACaHZAZANl9Xci1PVkpRcFRJSUNJeGY4OF9v";

$.getJSON("https://graph.instagram.com/17841431608152940?fields=id,username,media_count,account_type&access_token="+token, 
        function(data){
            
            $("#head-profil").text("Profil korisnika: "+data.username);
            $("#korisnicko-ime").text("Korisnicko ime: "+data.username);
            $("#broj-objava").text("Broj objava: "+data.media_count);
            $("#id-korisnika").text("Id korisnika: "+data.id);
            $("#tip-naloga").text("Tip naloga: "+data.account_type);
        });

$.getJSON("https://graph.instagram.com/17841431608152940/media?fields=id,caption&access_token="+token, 
        function(data){
            var mediaId = data.data[0].id;
            //alert(mediaId);
            $("#opis-objave").text("Opis objave: "+data.data[0].caption);
           

        });

        $.getJSON("https://graph.instagram.com/17851307273028969?fields=id,media_type,media_url,username,timestamp&access_token="+token, 
        function(data){
            
            
            $("#poslednja-slika").attr("src",data.media_url);
            

        });

        
