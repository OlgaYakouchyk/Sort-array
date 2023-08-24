const wrapper = document.querySelector('.wrapper')
const button = document.querySelector('.button')

const sameArray = ['hi', 'hello', 'world', 'Olga']


button.addEventListener('click', function(){
    const list =document.createElement('ul')
    const listItem =document.createElement('li')
   
    
    wrapper.append(list)
    for(let i = 0; i<sameArray.length; i++){

        const itemArr = sameArray[i]
        list.textContent = itemArr

        list.append(listItem)

    }
})
