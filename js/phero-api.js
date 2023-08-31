const handleBlogBtn=()=>{
    window.location.href='blog.html'
}


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
    <a class="tab bg-gray-300 mb-2 rounded gap-8">${card.category}</a>
    `
    tabContainer.appendChild(divCard)
})
};
const handleLoadCard=async(id)=>{
const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await response.json()
    console.log(data);
    const idData = data.data
    console.log(idData);
    const cardContainer = document.getElementById('card-container');
    // cardContainer.innerHTML= ""
    
    idData.forEach((singleIdData)=>{
        console.log(singleIdData);
        const div = document.createElement('div')
        div.innerHTML =`
        <div class="card bg-base-100 shadow-xl ">
                    <figure class="w-40 h-32 text-justify"><img class="" src="${singleIdData.thumbnail}" /></figure>
                    <p>${singleIdData.others.posted_date}</p>
                    <h1 class="text-2xl">${singleIdData.title}</h1>
                    <div class="card-body">
                    <img class="rounded-full h-10 w-10" src="${singleIdData.authors[0].profile_picture}"/>
                      <h2 class="card-title">
                      
                        <div class="p-5">
                        ${singleIdData.authors[0].profile_name}
                        </div>
                        <div>
                        <h2> ${singleIdData.authors[0].verified}</h2>
                        </div>
                      </h2>
                      
                      <h2>${singleIdData.others.views} views</h2>

                    </div>
                  </div>
        `
        cardContainer.appendChild(div)
    })
    

}




handleCardData()
handleLoadCard('1000')