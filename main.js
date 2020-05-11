$.getJSON("https://api.instagram.com/v1/users/self/?access_token=TOKEN_HERE", 
        function(data){
            
            $("#head-profil").text("Profil korisnika: "+data.data.username);
            $("#profil-slika").attr("src",data.data.profile_picture);
            $("#full-name").html("Puno ime korisnika > <strong>"+data.data.full_name+"</strong>");
            $("#user-bio").html("Biografija korisnika > <i>"+data.data.bio+"</i>");
            $("#user-website").text("Vebsajt korisnika > "+data.data.website);
            $("#user-media").text("Broj objava > "+data.data.counts.media);
            $("#user-followed-by").text("Broj pratilaca > "+data.data.counts.followed_by);
            $("#user-follows").text("Prati > "+data.data.counts.follows);

        })
