// the Flyer Project, NRRINC Media (C) 2021, Apache V2 
function rmvflyer(){$("#flyer-xbtn").prop("disabled",!0),$("#flyer-xbtn").slideUp(1500).queue(function(e){$(this).fadeOut(250),$(this).remove(),e()}),$("#flyer-desc").slideUp(750).queue(function(e){$(this).empty(),$("#flyer-image,#flyer-video,#flyer-frame").slideUp(750),$("#flyer-t").slideUp(3500).queue(function(e){$("#flyer-t").remove(),$("#flyer-image,#flyer-video,#flyer-frame").remove().queue(function(e){})}),e()}),$("#flyer").addClass("hide"),localStorage.setItem("ad","hide"),$("#flyer").attr("id","flyer-removed"),$("#flyer-removed").append('<div style="padding:20px">-----<br>Flyer Ad Closed by Flyer.<br>-----</div>'),setTimeout(function(){$("#flyer-removed").slideDown(2e3).queue(function(e){$(this).empty(),e()}),console.warn("Flyer: Removed")},5e3)}function videoEnded(){$("#flyer-video").slideUp(1500).queue(function(e){$("#flyer-video").remove(),$("#flyer-image").slideDown(1500),e()})}function flyerloadcount(){$.ajax({type:"GET",url:"http://localhost:3000/offsite/count.php"}).done(function(e){console.log("Flyer: Logged +1")})}function flyerclick(){$.ajax({type:"GET",url:"http://localhost:3000/offsite/click.php"}).done(function(e){console.log("Flyer: Clicked +1")})}function flyerdetect(){"img"===flyer.flyer_show?($("#flyer-frame").remove(),$("#flyer-video").remove(),$("#flyer-image").show()):"vid"===flyer.flyer_show?($("#flyer-image").hide(),$("#flyer-frame").remove(),$("#flyer-video").show()):"frm"===flyer.flyer_show?($("#flyer-image").remove(),$("#flyer-video").remove(),$("#flyer-frame").show()):console.log("error")}function flyerrand(){const e=["FlyerconfA","FlyerconfB","FlyerconfC","FlyerconfD","FlyerconfE","FlyerconfF","FlyerconfG"];Math.floor(Math.random()*e.length)}function flyerinit(){try{flyer}catch(e){console.error("Flyer: Add Conf to page. Above Flyer.js"),flyer={flyer_css:"yes",flyer_show:"img",flyer_aid:"FLYER IS NOT WORKING",flyer_title:"Default Flyer Config",flyer_title_link:"http://git.nrrinc.net/flyer",flyer_frame_src:"/src/ad.html",flyer_frame_rp:"unsafe-url",flyer_desc:"Flyer is not working ATM...",flyer_video:"/link/to/mp4.mp4",flyer_img_title:"FlyerJS",flyer_img_src:"/src/flyer/flyer.svg",flyer_note:"Hey! Welcome to Flyer! http://git.nrrinc.net/flyer",flyer_ajax1:"",flyer_ajax2:"",flyer_useid:"TBD"}}"Hey! Welcome to Flyer! http://git.nrrinc.net/flyer"==flyer.flyer_note||(console.log("add flyer_note to your config. where you set flyer up. Copy and paste."),console.warn('flyer_note: "Hey! Welcome to Flyer! http://git.nrrinc.net/flyer",'),youforgottoaddthenote()),$(document).ready(function(){var e;"yes"===flyer.flyer_css?((e=document.createElement("link")).rel="stylesheet",e.href="/src/flyer/flyer.css",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)):function(){var e=document.createElement("link");e.rel="stylesheet",e.href=flyer.flyer_css,(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}()})}flyerinit(),$(document).ready(function(){$("#flyer").length?(flyer,$("#flyer").append('        <h2 id="flyer-t">           <a href="#" id="flyer-title" target="_top" alt="Link to Sponsor" onClick="flyerclick()"></a><button style="position: absolute; right: 35px;background-color: white;cursor:pointer;" onclick="rmvflyer()" id="flyer-xbtn">X</button>        </h2>        <div id="flyer-content">        <img class="flyer-image" id="flyer-image" src="" alt="none" title="" style="display:none;">        <iframe id="flyer-frame" class="flyer-iframe" src="" allowpaymentrequest="false" name="Flyer" allowfullscreen="false" referrerpolicy="unsafe-url" stlye="display: none;"></iframe>        <video oncontextmenu="return false;" id="flyer-video" width="100%" height="100%" muted style="display:block;" onended="videoEnded()" autoplay="autoplay">        <source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4#t=25" type="video/mp4">        </video>        <p class="flyer-desc" id="flyer-desc" alt="ad desc."></p>        </div>'),$(document).ready(function(){flyerdetect(),$("#flyer-frame").attr("src",flyer.flyer_frame_src),$("#flyer-frame").attr("sandbox",""),$("#flyer-frame").attr("name","Flyer"),$("#flyer-frame").attr("allowfullscreen","false"),$("#flyer-frame").attr("allowpaymentrequest","false"),$("#flyer-frame").attr("referrerpolicy",flyer.flyer_frame_rp),$("#flyer-image").attr("src",flyer.flyer_img_src),$("#flyer-image").attr("title",flyer.flyer_img_title),$("#flyer-image").attr("alt",flyer.flyer_img_title),$("#flyer_video").attr("data-type","video/mp4"),$("#flyer-title").append(flyer.flyer_title),$("#flyer-title").attr("href",flyer.flyer_title_href),$("#flyer-desc").append(flyer.flyer_desc),$("#flyer-desc").attr("alt",flyer.flyer_desc),flyerloadcount(),console.log("Flyer: Im Locked and Loaded. Bring. it. on.")})):console.log('%c Flyer: div Not found. Flyer Stopped. to fix, add <div id="flyer"></div> do your page.',"border: 8px none #00FF16; border-radius: 40px;background-color:black; color: #00FF80;")}),$(document).ready(function(e){if(e("#flyer").length){var l=localStorage.getItem("ad");l&&e("#flyer").addClass(l),e("#nofly").click(function(){e("#flyer").addClass("hide"),console.log("Flyer: Hidden"),localStorage.setItem("ad","hide")}),e("#yesfly").click(function(){e("#flyer").removeClass("hide"),console.log("Flyer: Shown"),localStorage.setItem("ad",null)}),e("#nofly, #yesfly").length&&console.log("Flyer: buttons Found and loaded")}else console.error("Flyer: Buttons disabled due to div not found."),e("#nofly").remove(),e("#yesfly").remove()}),$(document).ready(function(){$.ajax({url:"/offsite/counter",dataType:"text",success:function(e){$(".text").append("Flyer Load Number: "+e)}})}),flyerrand();