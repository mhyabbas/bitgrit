fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bitgrit')
   .then((res) => res.json())
   .then((data) => {
      // Filter for actual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
      const res = data.items //This is an array with the content. No feed, no info about author etc..
      const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !

      var firstpost = posts.slice(0, 1);
      var nextposts = posts.slice(1, 5);

      // Functions to create a short text out of whole blog's content
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
      firstpost.forEach((item) => {
         output += `
            <div class="col-md-6">
               <div class="card text-left mb-3">
                  <img src="${item.thumbnail}" class="card-img-top" alt="event">
                  <div class="card-body">
                     <p class="text-muted text-uppercase mb-1"><small>${shortenText(item.pubDate,0 ,10)}</small></p>
                     <a href="${item.link}" target="_blank"><h5 class="card-title">${item.title}</h5></a>
                     <p class="text-muted">${'...' + shortenText(toText(item.content),60, 300)+ '...'}</p>
                     <a href="${item.link}" target="_blank">Continue Reading
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                           <title>Arrow</title>
                           <path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
                        </svg>
                     </a>
                  </div>
               </div>
            </div>`

      })

      output += `<div class="col-md-6">`

      nextposts.forEach((item) => {
         output += `
            <div class="card text-left">
               <div class="card-body">
                  <p class="text-muted text-uppercase mb-1"><small>${shortenText(item.pubDate,0 ,10)}</small></p>
                  <a href="${item.link}" target="_blank"><h5 class="card-title">${item.title}</h5></a>
               </div>
            </div>
            <hr>`

      })

      output += `<div>`

      document.querySelector('.blog-wrapper').innerHTML = output
})