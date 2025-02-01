!function(){class e{constructor(){this.loader=document.getElementById("loader"),this.mainWrapper=document.getElementById("mainWrapper"),this.loadedAssets=0,this.assetsToLoad=["../assets/images/bg.jpg","../assets/cursors/frame-1.png","../assets/cursors/frame-2.png","../assets/cursors/frame-3.png","../assets/cursors/frame-4.png","../assets/cursors/frame-5.png","../assets/cursors/frame-6.png","../assets/cursors/frame-7.png","../assets/cursors/frame-8.png","../assets/sounds/bg-sound.mp3","https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js","https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js","../assets/images/favicon-32x32.png","../assets/images/favicon-16x16.png","../assets/images/apple-touch-icon.png"]}updateProgress(){this.loadedAssets++;const e=Math.round(this.loadedAssets/this.assetsToLoad.length*100),s=document.querySelectorAll(".loader-blocks .block"),t=Math.floor(e/10);s.forEach(((e,s)=>{s<t&&e.classList.add("active")}))}loadImage(e){return new Promise(((s,t)=>{const n=new Image;n.onload=()=>{this.updateProgress(),s()},n.onerror=()=>{console.warn(`Failed to load image: ${e}`),this.updateProgress(),s()},n.src=e}))}loadAudio(e){return new Promise(((s,t)=>{const n=new Audio;n.oncanplaythrough=()=>{this.updateProgress(),s()},n.onerror=()=>{console.warn(`Failed to load audio: ${e}`),this.updateProgress(),s()},n.src=e}))}loadScript(e){return new Promise(((s,t)=>{const n=document.createElement("script");n.src=e,n.onload=()=>{this.updateProgress(),s()},n.onerror=()=>{console.warn(`Failed to load script: ${e}`),this.updateProgress(),s()},document.head.appendChild(n)}))}hide(){this.loader.classList.add("hidden"),setTimeout((()=>{this.mainWrapper.classList.remove("hidden"),this.loader.classList.add("remove"),setTimeout((()=>{this.mainWrapper.classList.add("visible")}),50)}),1e3)}loadAll(){return Promise.all(this.assetsToLoad.map((e=>e.match(/\.(jpg|jpeg|png|gif|webp)$/i)?this.loadImage(e):e.match(/\.(mp3|wav|ogg)$/i)?this.loadAudio(e):e.match(/\.js$/i)?this.loadScript(e):Promise.resolve())))}}class s{constructor(){this.audio=document.getElementById("bgSound"),this.soundToggle=document.getElementById("soundToggle"),this.soundOn=this.soundToggle.querySelector(".sound-on"),this.soundOff=this.soundToggle.querySelector(".sound-off"),this.init()}init(){this.soundToggle.addEventListener("click",(()=>{this.audio.paused?this.play():this.pause()})),document.addEventListener("visibilitychange",(()=>{document.hidden?this.pause():this.audio.paused||this.play()})),document.addEventListener("click",this.startAudio.bind(this),{once:!0})}async play(){try{await this.audio.play(),this.soundOn.classList.remove("hidden"),this.soundOff.classList.add("hidden")}catch(e){console.log("Playback failed:",e)}}pause(){this.audio.pause(),this.soundOn.classList.add("hidden"),this.soundOff.classList.remove("hidden")}startAudio(){this.play()}}class t{constructor(){this.messageElement=document.getElementById("message")}display(){const e=new URLSearchParams(window.location.search).get("name");let s="";if(e){const t=e.split(",");if(t.length>2){const e=t.pop();s=`Шаноўныя ${t.join(", ")} i ${e}!\nЗ вялікай радасцю запрашаем вас на нашае вяселле 18 траўня!\nКаб даць пачатак чароўнай цырымоніі, націсніце…`}else s=2===t.length?`Шаноўныя ${t[0]} i ${t[1]}!\nЗ вялікай радасцю запрашаем вас на нашае вяселле 18 траўня!\nКаб даць пачатак чароўнай цырымоніі, націсніце…`:`Прывітанне ${t[0]}!\nЗ вялікай радасцю запрашаем цябе на нашае вяселле 18 траўня!\nКаб даць пачатак чароўнай цырымоніі, націсніце…`}else s="Прывітанне";const t=s.split("\n").map((e=>`<p class="ml3">${e.split(" ").map((e=>`<span class='word'>${e.split("").map((e=>`<span class='letter'>${e}</span>`)).join("")}</span>`)).join(" ")}</p>`));this.messageElement.innerHTML=`<span class="ml3">${t.join(" ")}</span>`,this.animate()}animate(){anime.timeline({loop:!1,complete:e=>{const s=document.createElement("button");s.type="button",s.textContent="СЮДЫ",s.title="сюды",s.classList.add("message-button"),s.addEventListener("click",(e=>{e.preventDefault();setInterval((function(){const e=document.createElement("div");e.classList.add("star"),e.style.left=Math.random()*window.innerWidth+"px";const s=8+12*Math.random(),t=2+3*Math.random();e.style.fontSize=`${s}px`,e.style.animationDuration=`${t}s`,document.body.appendChild(e),setTimeout((()=>{document.body.contains(e)&&document.body.removeChild(e)}),1e3*t)}),30);setTimeout((()=>{window.open("https://docs.google.com/forms/d/1OdO48KtC-nQwa8QJsFPHxeI7QAb-fJG39HiDiQkktlg/viewform?edit_requested=true","_blank","noopener,noreferrer")}),5500)})),this.messageElement.appendChild(s)}}).add({targets:".ml3 .word .letter",opacity:[0,1],easing:"easeInOutQuad",duration:2650,delay:(e,s)=>220*(s+1)})}}const n={particles:{number:{value:300,density:{enable:!0,value_area:800}},color:{value:["#ffffff","#dac5ed","#f2d5f5","#FFD700","#C0C0C0"]},shape:{type:"star",stroke:{width:0,color:"#ffffff"},polygon:{nb_sides:5}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:.4,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:4,size_min:.2,sync:!1}},line_linked:{enable:!1},move:{enable:!0,speed:2,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!0,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:150,size:6,duration:2,opacity:.8,speed:3},repulse:{distance:200,duration:.4}}},retina_detect:!0};function a(){const e=document.getElementById("modal"),s=document.getElementById("modalButton"),n=document.getElementById("message"),a=new t,o=()=>{e.classList.add("hidden"),n.classList.remove("hidden"),setTimeout((()=>{a.display(),e.classList.add("remove")}),500),s.removeEventListener("click",o)};s.addEventListener("click",o)}class o{constructor(){this.flowerButton=document.getElementById("flowerButton"),this.mainWrapper=document.getElementById("mainWrapper"),this.init()}createEasterEggModal(){const e=document.createElement("div");e.className="easter-modal",e.innerHTML='\n            <div class="easter-modal-content">\n                <p class="easter-modal-text">Малайчына!</p>\n            </div>\n        ',this.mainWrapper.appendChild(e),setTimeout((()=>{e.classList.add("fade-out"),setTimeout((()=>{e.remove()}),1e3)}),2e3)}init(){this.flowerButton.addEventListener("click",(()=>{this.createEasterEggModal()}))}}document.addEventListener("DOMContentLoaded",(()=>{const t=new e;function i(){new s,new o;particlesJS("flyingStars",n);document.getElementById("flowerButton").addEventListener("click",(()=>{setTimeout((()=>{}),50)})),a()}t.loadAll().then((()=>{setTimeout((()=>{t.hide(),i()}),1e3)})).catch((e=>{console.error("Error loading assets:",e),t.hide(),i()}))}))}();
//# sourceMappingURL=index.079b6d2a.js.map
