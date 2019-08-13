fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bitgrit')
   .then((res) => res.json())
   .then((data) => {
       // Fillter the array
       const res = data.items //This is an array with the content. No feed, no info about author etc..
       const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !
       
       var recentposts = posts.slice(0, 3);

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
         output += `
            <div class="col-md-4">
               <div class="card text-left mb-3">
                  <div class="card-img-top" style="background: url(${item.thumbnail}) center center/contain no-repeat;">
                  </div>
                  <div class="card-body">
                     <p class="text-muted text-uppercase mb-1"><small>${shortenText(item.pubDate,0 ,10)}</small></p>
                     <a href="${item.link}" target="_blank"><h5 class="card-title">${item.title}</h5></a>
                     <p class="text-muted">${'...' + shortenText(toText(item.content), 60, 160)+ '...'}</p>
                     <a href="${item.link}" target="_blank">Read More</a>
                  </div>
               </div>
            </div>`
      })

      document.querySelector('.blog-wrapper').innerHTML = output
})