const wrapper = document.querySelector('.wrapper')
const button = document.querySelector('.button')

const sameArray = ['hi', 'hello', 'world', 'Olga']


button.addEventListener('click', function(){
    const list =document.createElement('ul')
    
   
    
    wrapper.append(list)
    for(let i = 0; i<sameArray.length; i++){
        const listItem =document.createElement('li')
        listItem.textContent =  sameArray[i]
        list.append(listItem)

    }
})
