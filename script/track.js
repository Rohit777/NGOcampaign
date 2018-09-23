!function(a){
    "use strict";
    var n=[
            {   id:"GE",
                title:"GIRLS’ EDUCATION AND EMPOWERMENT",
                body:'Working closely in the community of Jahangirpuri, Kanshiram Welfare Foundation organization found out that even after the presence of schools there were many drop-outs and unemployed girls in the community. This was due to their economic weaker backgrounds or the excessive restriction implies upon female mobility that prevented them from availing higher education. Also, the thought that more education to girls is irrelevant as girls eventually have to play the role of a caregiver to her family after marriage has led to discontinuation of education among girls. Thus, to address these issues, Kanshiram Welfare Foundation in collaboration with Shrimati Ram Ditti Dua Memorial Society organized a community program on the topic of \“Girls’ Education and Empowerment\”.The community program had representatives from the Delhi government, Delhi Commission for Women (DCW), Delhi University (for higher education) and Rajkiya Madhyamik Vidyala (for secondary education), who discussed the importance of girls’ education and its role in empowering them, and the long-term benefits that education brings, which most parents seem to overlook as they are looking for instant results. The purpose was to make the parents aware that the onus of educating their children is on them. It is their responsibility to leave aside societal notions of discrimination and move ahead in empowering their girl child with education to not only earn a livelihood but to also make a better human being in the process',
                img:"img/track-ai.png"
            },
            {   id:"GR",
                title:"WOMEN RIGHTS AND ROLE OF DELHI COMMISSION FOR WOMEN",
                body:'Today\'s most exciting use cases for blockchain technology extend far beyond payments and digital currency. With the advent of "smart contracts" and turing-complete frameworks, blockchain technology has evolved far beyond just bitcoins. It is time to join the Web 3.0 revolution!',
                img:"img/track-blockchain.png"
            }
        ];
    function o(e){
        var t=a("#trackModal");
        t.find(".modal-title").text(e.title),
        t.find(".modal-body").text(e.body),
        t.find(".track-img").css("background",'url("'+e.img+'")'),
        t.data("id",e.id)}a("#trackModal").on("show.bs.modal",
        function(e){
            var t=a(e.relatedTarget).data("track");
            o(n.filter(function(e){return e.id===t})[0])}),
            a("#nextTrack").on("click",
            function(){
                var e,t,i=a("#trackModal").data("id");
                o(n[(e=i,t=n.map(function(e){return e.id}).indexOf(e),
                    t===n.length-1?0:t+1)])})}(jQuery);