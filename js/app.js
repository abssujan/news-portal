// fetch catagory data
const loadCatagoryData = () => {
   const url = `https://openapi.programming-hero.com/api/news/categories`;
   try {
   fetch(url)
   .then(res => {
   if (!res.ok) {
   throw new Error(`Network response was not ok: ${res.status}`);
   }
   return res.json();
   })
   .then(data => displayCatagoryData(data.data.news_category))
   .catch(error => {
   console.error('Error fetching data:', error);
   });
   } catch (error) {
   console.error('Error in fetch operation:', error);
   }
   };

   const displayCatagoryData = catagory => {
   //console.log(catagory)
   const navBar = document.getElementById('navbar-default');
   const catagoryChange = document.getElementById('category-change');
   catagory.forEach(navData =>{
   //console.log(navData)
   const navUl = document.createElement('li');
   const ancorTag = document.createElement('a');
   ancorTag.href = '#';
   ancorTag.onclick = () => {
   loadNewsData(navData.category_id);
   if(navData.length !==0){
   catagoryChange.innerText =`${navData.category_name}`;
   }else {
   catagoryChange.innerText =`${navData.category_name}`;
   }
   };
   ancorTag.classList.add('block', 'py-2', 'px-3', 'text-gray-700', 'bg-blue-700', 'rounded', 'md:bg-transparent', 'md:text-gray-600', 'md:p-0', 'dark:text-white', 'md:dark:text-gray-700', 'hover:text-indigo-600', 'font-semibold');
   ancorTag.innerText = `${navData.category_name}`
   navUl.appendChild(ancorTag);
   navBar.appendChild(navUl);
   })
   }

   const loadNewsData = (category_id) => {
   const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
   //loder
   toggleSpiner(true)

   //console.log(url)
   fetch(url)
   .then(res => res.json())
   .then(data => displayNewsData(data.data))
   }

   const displayNewsData = newsData => {
   //console.log(newsData)
   const newsCard = document.getElementById('news-card');
   const newsCounter = document.getElementById('news-counter');
   if(newsData.length !== 0){
   newsCounter.innerText = `${newsData.length}`;
   //catagoryChange.innerText = `${}`
   }else {
   newsCounter.innerText = `No  Post `
   }
   newsCard.innerHTML = '';
   newsData.forEach(newsInformation => {
   //console.log(newsInformation)
   const newsDiv = document.createElement('div');
   newsDiv.classList.add('flex', 'justify-between', 'space-x-8', 'mt-10', 'bg-white', 'rounded-lg');
   newsDiv.innerHTML = `
   <!-- image -->
   <div class="image rounded-md  w-[40%] p-4">
      <img class="object-cover rounded-md h-[400px] w-full" src="${newsInformation.image_url}" alt="">
   </div>
   <!-- information -->
   <div data-modal-target="default-modal" data-modal-toggle="default-modal" onclick="loadModalPop('${newsInformation._id}')" class="w-[60%] p-5 cursor-pointer">
      <!-- tittle -->
      <h1 class="text-2xl font-semibold text-gray-800">${newsInformation.title}</h1>
      <!-- news body -->
      <p class="text-base mt-2 text-gray-600"> ${(newsInformation.details).slice(0, 400)}
      </p>
      <!-- icon and athor box -->
      <div class="w-full flex items-center justify-between mt-10">
         <!-- athor box -->
         <div class="flex items-center space-x-4">
            <!-- athor image -->
            <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 object-cover" src="${newsInformation.author.img}" alt="Bordered avatar">
            <div class="flex flex-col space-y-1 justify-center" >
               <p>${newsInformation.author.name ? newsInformation.author.name : 'Desk Report'}</p>
               <p>${(newsInformation.author.published_date) ? (newsInformation.author.published_date): 'no date found'}</p>
            </div>
         </div>
         <!-- view counter -->
         <div class="flex items-center space-x-2">
            <!-- icon -->
            <div>
               <i class="fa-regular fa-eye"></i>
            </div>
            <div>
               <p class="font-bold text-lg text-gray-700">${newsInformation.total_view ? newsInformation.total_view : '100'}m</p>
            </div>
         </div>
         <!-- Ratings -->
         <div class="flex items-center">
            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
         </div>
         <!-- arrow icon -->
         <div>
            <button><i class="fa-solid fa-arrow-right text-indigo-600"></i></button>
         </div>
      </div>
   </div>
   `;
   newsCard.appendChild(newsDiv)
   })
   toggleSpiner(false);
   }

   const toggleSpiner  = isLoading => {
      const loader = document.getElementById('loder');
      if(isLoading){
         loader.classList.remove('hidden');
      }else{
         loader.classList.add('hidden')
      }
   }
   const loadModalPop = (news_id) => {
      const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
      fetch(url)
      .then(res => res.json())
      .then(data => displayModalPopData(data.data[0]))
      const modal = document.getElementById('default-modal');
      if(modal.classList.contains('hidden')){
         modal.classList.remove('hidden');
      }
   }
   const displayModalPopData = newsDetails => {
      console.log(newsDetails)
      const modalHeader = document.getElementById('modal-header');
       modalHeader.innerText = `${newsDetails.title}`
      const newsBody = document.getElementById('news-body');
      newsBody.innerText = `${newsDetails.details}`
      const modalFooter = document.getElementById('modal-footer');
      modalFooter.innerHTML = `
      <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 object-cover" src="${newsDetails.author.img}" alt="Bordered avatar">
      <p>${newsDetails.author.name ? newsDetails.author.name : 'Desk Report'}</p>
      `;
   }
   const closeButton = () => {
      const closeButton = document.getElementById('close-button');
      const modal = document.getElementById('default-modal');
      if(closeButton.classList.contains('text-gray-400')){
         modal.classList.add('hidden')
      }
   }
   const loadTodaysPickData = (search) => {
      const url = `https://openapi.programming-hero.com/api/news/category/${search}`;
      fetch(url)
      .then(res => res.json())
      .then(data => displayTodaysPickData(data.data))
   }
   const displayTodaysPickData = todaysPick => {
      const todaysPickField = document.getElementById('todays-pick');
      //let foundTodaysPick = false;
      todaysPick.forEach(todaysPickData => {
         //console.log(todaysPickData)
         if(todaysPickData.others_info.is_todays_pick === true){ 
            todaysPickField.innerHTML =`
            <div class="flex justify-between space-x-8 mt-10 bg-white rounded-lg">
            <!-- image -->
   <div class="image rounded-md  w-[40%] p-4">
      <img class="object-cover rounded-md h-[400px] w-full" src="${todaysPickData.image_url}" alt="">
   </div>
   <!-- information -->
   <div data-modal-target="default-modal" data-modal-toggle="default-modal" onclick="loadModalPop('${todaysPickData._id}')" class="w-[60%] p-5 cursor-pointer">
      <!-- tittle -->
      <h1 class="text-2xl font-semibold text-gray-800">${todaysPickData.title}</h1>
      <!-- news body -->
      <p class="text-base mt-2 text-gray-600"> ${(todaysPickData.details).slice(0, 400)}
      </p>
      <!-- icon and athor box -->
      <div class="w-full flex items-center justify-between mt-10">
         <!-- athor box -->
         <div class="flex items-center space-x-4">
            <!-- athor image -->
            <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 object-cover" src="${todaysPickData.author.img}" alt="Bordered avatar">
            <div class="flex flex-col space-y-1 justify-center" >
               <p>${todaysPickData.author.name ? todaysPickData.author.name : 'Desk Report'}</p>
               <p>${(todaysPickData.author.published_date) ? (todaysPickData.author.published_date): 'no date found'}</p>
            </div>
         </div>
         <!-- view counter -->
         <div class="flex items-center space-x-2">
            <!-- icon -->
            <div>
               <i class="fa-regular fa-eye"></i>
            </div>
            <div>
               <p class="font-bold text-lg text-gray-700">${todaysPickData.total_view ? todaysPickData.total_view : '100'}m</p>
            </div>
         </div>
         <!-- Ratings -->
         <div class="flex items-center">
            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
         </div>
         <!-- arrow icon -->
         <div>
            <button><i class="fa-solid fa-arrow-right text-indigo-600"></i></button>
         </div>
      </div>
   </div>
            </div>
            `;

         }

      })
      todaysPickField.classList.toggle('hidden');
      todaysPickField.classList.toggle('opacity-100');
   }

   const loadTrendigNewsData = (search) => {
      const url = `https://openapi.programming-hero.com/api/news/category/${search}`;
      fetch(url)
      .then(res => res.json())
      .then(data => displayTrendigNewsData(data.data))
   }

   const displayTrendigNewsData = (trendingData) => {
      const trending = document.getElementById('trending');
      const trendigGrid = document.getElementById('trendig-grid');
      trendingData.forEach(trendingDataShow => {
         console.log(trendingDataShow)
         if(trendingDataShow.others_info.is_trending === true){
            console.log('true')
            const createDiv = document.createElement('div');
            createDiv.classList.add('w-full', 'bg-gray-900', 'rounded-lg', 'sahdow-lg', 'p-12', 'flex', 'flex-col', 'justify-center', 'items-center')
            createDiv.innerHTML = `
            <div class="mb-8 w-full">
            <img class="object-center object-cover rounded-md h-36 w-full" src="${trendingDataShow.image_url}" alt="photo"> 
            </div>
            <div class="text-center"> 
            <p class="text-lg text-white font-semibold mb-2">${trendingDataShow.title}</p> 
            <p class="text-sm text-white font-semibold mb-2">${(trendingDataShow.details).slice(0,200)} </p>
            </div>
            `;
            trendigGrid.appendChild(createDiv)
         }
      })
      trending.classList.toggle('hidden');
   }

   loadCatagoryData()
   loadNewsData('05')
   //loadTodaysPickData()
   