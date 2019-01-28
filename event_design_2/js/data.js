//fetch from api 
// var data = [
//     {
//         name: 'Mr. X',
//         phone_number: '+918777023592',
//         profile_pic_url: 'images/c1.jpeg',
//         volunteer_type: 'co-ordinator'
//     }, {
//         name: 'Mr. Y',
//         phone_number: '+919933442009',
//         profile_pic_url: 'images/c2.jpeg',
//         volunteer_type: 'volunteer'
//     }, {
//         name: 'Mr. Z',
//         phone_number: '+917585952009',
//         profile_pic_url: 'images/c3.jpeg',
//         volunteer_type: 'co-ordinator'
//     }
// ]

function parallax_carousel(images) {
    var imgs = ["images/front_background_1.jpg", "images/front_background_2.jpg"];
    imgs.push(images)
    var currentIndex = 0;
    var carouselFunction = function showNext() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }
    $("#carousel_img").fadeOut('slow', function () {
            $("#carousel_img").attr('src', imgs[currentIndex]);
            $("#carousel_img").fadeIn('slow');
        });
    }
    setInterval(carouselFunction, 5000);
}

function createVolunteers(data) {
    for(var x = 0; x < data.length; x++) {
        var img = document.createElement('img')
        img.src = data[x].profile_pic_url
        img.className = 'circle responsive-img'
        
        var center = document.createElement('center')
        center.appendChild(img)
        
        var ul = document.createElement('ul')
        ul.style = 'text-align: center;'

        var li = document.createElement('li')
        li.style = 'display: inline-block;'
        var h6 = document.createElement('h6')
        var a = document.createElement('a')
        a.className = 'white-text valign-wrapper'
        var i = document.createElement('i')
        i.className = 'material-icons prefix'
        i.innerText = 'account_circle'
        a.appendChild(i)
        a.innerHTML += '&nbsp;' + data[x].volunteer_type
        h6.appendChild(a)
        li.appendChild(h6)
        ul.appendChild(li)

        var li1 = document.createElement('li')
        li1.style = 'display: inline-block;'
        var h61 = document.createElement('h6')
        var a1 = document.createElement('a')
        a1.className = 'white-text valign-wrapper'
        var i1 = document.createElement('i')
        i1.className = 'material-icons prefix'
        i1.innerText = 'person'
        a1.appendChild(i1)
        a1.innerHTML += '&nbsp;' + data[x].name
        h61.appendChild(a1)
        li1.appendChild(h61)
        ul.appendChild(li1)

        if(data[x].volunteer_type == 'co-ordinator') {
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
            a2.innerHTML += '&nbsp;' + data[x].phone_number
            h62.appendChild(a2)
            li2.appendChild(h62)
            ul.appendChild(li2)

            ul.appendChild(document.createElement('br'))
            
            var li3 = document.createElement('li')
            li3.style = 'display: inline-block;'
            var a3 = document.createElement('a')
            a3.className = 'waves-effect waves-light btn deep-purple darken-4 valign-wrapper'
            a3.innerHTML = 'WHATSAPP'
            a3.href = '#'
            li3.appendChild(a3)
            ul.appendChild(li3)
        }

        center.appendChild(ul)

        var card = document.createElement('div')
        card.className = 'card hoverable'
        card.style = 'background-color: rgba(17, 22, 37, 1);' 

        var card_content = document.createElement('div')
        card_content.className = 'card-content'
        card_content.style = 'width: 100%; display: flex; flex-grow: 1'

        card_content.appendChild(center)
        card.appendChild(card_content)

        var item = document.createElement('div')
        item.className = 'carousel-item'
        item.style = 'height: 100%;'
        item.appendChild(card)

        document.getElementById('organizer').appendChild(item)

        $(document).ready(function() {
            $('.carousel').carousel();
            $('.prev').click(function(e) {
                e.preventDefault()
                e.stopPropagation()
                $('.carousel').carousel('prev');
            })
            $('.next').click(function(e) {
                e.preventDefault()
                e.stopPropagation()
                $('.carousel').carousel('next');
            })
        })
    }
}

showdown.setFlavor('github')
var converter = new showdown.Converter()

$.ajax({
    async: true,
    crossDomain: true,
    crossOrigin: true,
    dataType: 'json',
    url: 'https://elixir-backend.ddns.net/get_events/events/?format=json',
    method: 'GET',
    headers: {
        // 'Origin': 'http://elixir-backend.ddns.net/',
        // 'Access-Control-Request-Headers': 'origin, x-requested-with',
        // 'Access-Control-Request-Method': 'GET'
    },
    success: function(data) {
        createVolunteers(data[0].volunteers)
        $('.event').html(data[0].name)
        parallax_carousel(data[0].event_pic_url)
        $('#introduction-text').html(converter.makeHtml(data[0].event_description))
        $('#rules').html(converter.makeHtml(data[0].rules))
        $('#timeline').html(converter.makeHtml(data[0].event_timeline))
        $('#prizes').html(converter.makeHtml(data[0].prizes))
        $('#faq').html(converter.makeHtml(data[0].faq))
    }
})
