const handleBlogBtn=()=>{
    window.location.href='blog.html'
}; 
// document.addEventListener('click',function(){
//     document.getElementsByClassName('tab')
// })

const handleCardData=async()=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data = await response.json()
    const allData = data.data
    // console.log(allData);

    const tabContainer= document.getElementById('tab-container');
    allData.forEach((card)=>{
    // console.log(card);
    
    const divCard= document.createElement('div')
    divCard.innerHTML=`
    <a onclick="handleLoadCard('${card.category_id}')" class="tab bg-gray-300 mb-2 rounded gap-8">${card.category}</a>
    `
    tabContainer.appendChild(divCard)
})
};
const handleLoadCard=async(id)=>{
const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await response.json()
    // console.log(data);
    const idData = data.data
    // console.log(idData);
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML= "";
    idData.forEach((singleIdData)=>{
        // console.log(singleIdData);
        const div = document.createElement('div')
        div.innerHTML =`
        <div class="card bg-base-100 shadow-xl ">
                    <figure class=" relative rounded-lg"><img class="rounded-lg w-[400px] h-[250px]  " src="${singleIdData.thumbnail}" />
                    <p class="absolute mt-48 ms-32 text-white">${singleIdData.others.posted_date}</p>
                    </figure>
                    <div class="card-body flex flex-col lg:flex-row ">
                    <img class="rounded-full h-14 w-14" src="${singleIdData.authors[0].profile_picture}"/>
                    <div class="-mt-7">
                    
                    <h1 class="text-xl font-semibold ">${singleIdData.title.slice(0,15)}</h1>
                       
                    <div class="flex items-center">

                    <div class="p-3 text-sm font-medium">
                    ${singleIdData.authors[0].profile_name}
                    </div>
                    <div>
                    <h2 class="items-center"> ${singleIdData.authors[0].verified?`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_11_245)">
                      <path d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z" fill="#2568EF"/>
                      <path d="M12.7094 7.20637L9.14065 10.7751L7.29065 8.92668C6.88909 8.52512 6.23752 8.52512 5.83596 8.92668C5.4344 9.32824 5.4344 9.97981 5.83596 10.3814L8.43127 12.9767C8.8219 13.3673 9.45627 13.3673 9.8469 12.9767L14.1625 8.66106C14.5641 8.25949 14.5641 7.60793 14.1625 7.20637C13.761 6.80481 13.111 6.80481 12.7094 7.20637Z" fill="#FFFCEE"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_11_245">
                        <rect width="20" height="20" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>`:'  '}</h2>
                    </div>

                    </div>
                    
                    </div>
                    </div>
                    <h2 class= "-mt-8 mb-1 text-center">${singleIdData.others.views} views</h2>
                  </div>
        `
        cardContainer.appendChild(div)
    }) 

    const noDataContainer =document.getElementById('no-data-container')
    
    if(idData.length===0){
    noDataContainer.innerHTML=`
    <img class="items-center h-20 w-20 mx-auto" src="./Icon.png" alt="">
    <h1 class="text-xl font-semibold">Oops!! Sorry, There is no content here</h1>
    `
    }
    else{
      noDataContainer.innerHTML='';
    } 
    const sortBtView = ()=>{
      idData.sort((a,b)=>b.others.views-a.others.views)
      handleLoadCard('1000')
    }
    const sortBtn = document.getElementById('sort-btn')
    sortBtn.addEventListener("click",function(){
      sortBtView()
    })
  }
handleCardData()
handleLoadCard('1000')
