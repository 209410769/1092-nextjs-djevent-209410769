const search = document.getElementById('search');
const submit = document.getElementById('submit');
const mealEl = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const single_mealEl = document.getElementById('single-meal');

// 透過fetch API 來搜尋我們要的meal
function searchMeal(e) {
    e.preventDefault(); //停止 html tag的默認動作

    single_mealEl.innerHTML = '' ;//讓single-meal 保持空值

    const term = search.value ;//取input的值

    if (term.trim()){//string.trim() = 去除字串的前後空白
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`) //非同步讀取url中的內容，返回可加載res時解析的promise
        .then(res => res.json()) //轉出此 Promise 的 JSON
        .then(data => {
            console.log(data);
            resultHeading.innerHTML = `<h1>Search Result for ' ${term} ' : </h1>`;//更改 HTML中 搜尋內容的 Heading
            
            if(data.meals === null){
                resultHeading.innerHTML = '<p>There are no results. Try again !</p>';// 當沒有搜尋的資料時
        
            }else{
                mealEl.innerHTML = data.meals.map(
                    meal => `
                    <div class="gallery-card">
                        <img class="gallery-card__img" src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                        <div class="gallery-card__details" data-mealid="${meal.idMeal}">
                            <h2>${meal.strMeal}</h2>
                        </div>
                    </div>`
                ).join('');
            }
        })
    }else{
        alert('Please enter a search term') //提示請輸入搜尋的值
    }
}

//透過API取得餐點ID
const getMealById = mealID => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)//透過ID取得特定餐點細節
    .then(res => res.json())//轉出此 Promise 的 JSON
    .then(data => {
            console.log(data)
            const meal = data.meals[0];

            addMealToDOM(meal);
        })
}

//添加餐點到DOM
const addMealToDOM =  meal => {
    const ingredients = []; //產生一個空的陣列做為原料的容器
    for(let i=1 ; i<=20 ; i++){
        if(meal[`strIngredient${i}`]){//當該陣列敘述有值的時候
            ingredients.push(`${meal[`strIngredient$[i]`]} : ${meal[`strMeasure${i}`]}`)
        }else{
            break;
        }
    }
    console.log('ingredients', ingredients);

    single_mealEl.innerHTML = `
        <div class="recipe-card">
            <h1 class="recipe-card__title" style="color: white">${meal.strMeal}</h1>
            <img class="recipe-card__img" src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <div class="recipe-card__main">
                <p>${meal.strInstructions}</p>
                <h5>Ingredients</h5>
                <ul>
                    ${ingredients.map(ing => `<li>${ing}</li>`).join('')} 
                </ul>
            </div>
        </div>
    `
}


//監聽按鈕
submit.addEventListener('submit', searchMeal);

mealEl.addEventListener('click', e => {
    // console.log('e.path', e.path);//觸發此事件獲取此元素冒泡過程的所有元素
    const mealInfo = e.path.find( item => {
        if( item.classList.contains('gallery-card__details') ){
            return item;
        }else {
            return false;
        }
    });
    // console.log('mealInfo',mealInfo);

    if (mealInfo) {
        const mealID = mealInfo.getAttribute('data-mealid')
        getMealById(mealID);
    }
})