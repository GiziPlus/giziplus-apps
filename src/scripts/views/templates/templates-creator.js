const creteArticleItemtemplate = (article) => `
<div class=" mx-auto bg-white border border-gray-200 rounded-lg shadow">
              <div>
                  <img class="object-cover max-h-56 w-full mx-auto sm:min-w-[300px] rounded-t-lg" src="${article.thumbnail ? article.thumbnail : '/images/thumbnailArticleDefault.webp'}" alt="${`Image ${article.title}`}" />
              </div>
              <div class="p-5">
                  <a href="${article.link}">
                      <h5 class="mb-2 py-5 text-2xl font-bold tracking-tight text-gray-900">${article.title}</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700">${article.description}</p>
                  <a href="${article.link}" class="inline-flex items-center px-3 py-2 font-medium text-center text-white bg-fourth rounded-lg hover:bg-third focus:ring-4 focus:outline-none focus:ring-blue-300">
                      Lanjut Baca
                      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
          </div>
`;

const creteNewArticleItemtemplate = (article) => `
<div class="lg:px-32 md:px-16 mt-2 flex flex-col items-center">
    <div class="grid md:grid-cols-2 mb-6 max-w-full bg-white">
        <div>
            <img class="object-cover max-h-56 w-3/4 mx-auto sm:min-w-[300px]" src="${article.thumbnail ? article.thumbnail : '/images/thumbnailArticleDefault.webp'}" alt="${`Image ${article.title}`}" />
        </div>
        <div class="px-6 py-3">
            <a href="${article.link}">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${article.title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700">${article.description}</p>
            <a href="${article.link}" class="inline-flex  items-center px-3 py-2 font-medium text-center text-white bg-fourth rounded-lg hover:bg-third focus:ring-4 focus:outline-none focus:ring-blue-300">
                Lanjut Baca
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</div>

<div class="flex flex-wrap justify-center mx-auto text-black py-6 max-w-lg md:text-lg md:pt-24">
<h1 class="text-3xl font-extrabold after:block after:content-[''] after:mt-4 after:mb-3 after:h-1 after:bg-gradient-to-r from-primary to-secondary after:scale-x-125 lg:text-4xl">
Daftar Artikel</h1>
    `;

export { creteArticleItemtemplate, creteNewArticleItemtemplate };
