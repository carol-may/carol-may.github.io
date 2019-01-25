//fetch from api 
var data = [
    {
        name: 'Mr. X',
        phone: '+918777023592',
        image: 'images/c1.jpeg'
    }, {
        name: 'Mr. Y',
        phone: '+919933442009',
        image: 'images/c2.jpeg'
    }, {
        name: 'Mr. Z',
        phone: '+917585952009',
        image: 'images/c3.jpeg'
    }
]
for(var x = 0; x < data.length; x++) {
    var ul = document.createElement('ul')
    ul.style = 'text-align: center;'

    var li = document.createElement('li')
    li.style = 'display: inline-block;'
    var h6 = document.createElement('h6')
    var a = document.createElement('a')
    a.className = 'white-text valign-wrapper'
    var i = document.createElement('i')
    i.className = 'material-icons prefix'
    i.innerText = 'person'
    a.appendChild(i)
    a.innerHTML += '&nbsp;' + data[x].name
    h6.appendChild(a)
    li.appendChild(h6)
    ul.appendChild(li)

    ul.appendChild(document.createElement('br'))

    var li2 = document.createElement('li')
    li2.style = 'display: inline-block;'
    var h62 = document.createElement('h6')
    var a2 = document.createElement('a')
    a2.className = 'white-text valign-wrapper'
    var i2 = document.createElement('i')
    i2.className = 'material-icons prefix'
    i2.innerText = 'phone'
    a2.appendChild(i2)
    a2.innerHTML += '&nbsp;' + data[x].phone
    h62.appendChild(a2)
    li2.appendChild(h62)
    ul.appendChild(li2)

    var a3 = document.createElement('a')
    a3.className = 'waves-effect waves-light btn deep-purple darken-4'
    a3.innerHTML = 'WHATSAPP'
    a3.href = '#'

    var img = document.createElement('img')
    img.src = data[x].image
    img.className = 'circle responsive-img'
    
    var center = document.createElement('center')
    center.appendChild(img)
    center.appendChild(ul)
    center.appendChild(a3)

    var card = document.createElement('div')
    card.className = 'card hoverable large'
    card.style = 'background-color: rgba(17, 22, 37, 1);' 

    var card_content = document.createElement('div')
    card_content.className = 'card-content'
    card_content.style = 'width: 100%;'

    card_content.appendChild(center)
    card.appendChild(card_content)

    var item = document.createElement('div')
    item.className = 'carousel-item'
    item.appendChild(card)

    document.getElementById('organizer').appendChild(item)
}