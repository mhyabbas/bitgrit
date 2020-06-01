$(document).ready(function() {

  fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bitgrit')
  .then((res) => res.json())
  .then((data) => {
         // Fillter the array
         const res = data.items //This is an array with the content. No feed, no info about author etc..
         const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !
         
         var recentposts = posts.slice(0, 10);

         setTimeout(function(){

          if (recentposts.length >= 1) {
            $('.news').slick({
              lazyLoad: 'ondemand',
              prevArrow: "#news-previous",
              nextArrow: "#news-next",
              speed: 300,
              slidesToShow: 3,
              slidesToScroll: 1,
              responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 1
                }
              }
              ]
            });
          }

          $('.news').show(); 

        }, 100);

         function toText(node) {
           let tag = document.createElement('div')
           tag.innerHTML = node
           node = tag.innerText
           return node
         }

         function shortenText(text,startingPoint,maxLength) {
           return text.length > maxLength?
           text.slice(startingPoint, maxLength):
           text
         }

         let output = '';
         recentposts.forEach((item) => {

          const img = item.thumbnail.slice(0,18);
          if(img == 'https://medium.com') {
           output += `
           <div class="card">
           <div class="thumbnail"></div>
           <a href="${item.link}" target="_blank" rel="noopener"><h3>${item.title}</h3></a>
           <p>${shortenText(toText(item.content), 0, 160)+ '...'}</p>
           </div>`
         } else  {
           output += `
           <div class="card">
           <div class="thumbnail" style="background: url(${item.thumbnail}) center center/contain no-repeat;"></div>
           <a href="${item.link}" target="_blank" rel="noopener"><h3>${item.title}</h3></a>
           <p>${shortenText(toText(item.content), 0, 160)+ '...'}</p>
           </div>`
         }

       })
         document.querySelector('.news').innerHTML = output;
       })

});