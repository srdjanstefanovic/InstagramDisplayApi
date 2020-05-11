$.getJSON("https://graph.instagram.com/17841431608152940?fields=id,username&access_token=IGQVJVX1VMdk1wRkJjdnpUcXRQYXRDN2FVWU10aE9veDE1dnBEbmZAZAbkEtZAjE3N3NpMFpvQ3loTFdlNHBIN0xib0k5Vk11MWFuSE1yRnROS2J1MWxzYVhueWJvUHlDaDZAOdHljU2o4Nk5LcEdCRHVKWkhpcnBEYWxBR2Vj", 
        function(data){
            
            $("#head-profil").text("Profil korisnika: "+data.username);
            $("#profil-slika").attr("src",data.data.profile_picture);
            $("#full-name").html("Puno ime korisnika > <strong>"+data.data.full_name+"</strong>");
            $("#user-bio").html("Biografija korisnika > <i>"+data.data.bio+"</i>");
            $("#user-website").text("Vebsajt korisnika > "+data.data.website);
            $("#user-media").text("Broj objava > "+data.data.counts.media);
            $("#user-followed-by").text("Broj pratilaca > "+data.data.counts.followed_by);
            $("#user-follows").text("Prati > "+data.data.counts.follows);

        })
