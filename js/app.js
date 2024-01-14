// fetch catagory data
const loadCatagoryData = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCatagoryData(data.data.news_category))
}
const displayCatagoryData = catagory => {
    console.log(catagory)
    const navBar = document.getElementById('navbar-default');
    catagory.forEach(navData =>{
        console.log(navData)
        const navUl = document.createElement('li');
        const ancorTag = document.createElement('a');
        ancorTag.href = '#';
        ancorTag.classList.add('block', 'py-2', 'px-3', 'text-gray-700', 'bg-blue-700', 'rounded', 'md:bg-transparent', 'md:text-gray-600', 'md:p-0', 'dark:text-white', 'md:dark:text-gray-700', 'hover:text-indigo-600', 'font-semibold');
        ancorTag.innerText = `${navData.category_name}`
        navUl.appendChild(ancorTag);
        navBar.appendChild(navUl);
    })
}

loadCatagoryData()