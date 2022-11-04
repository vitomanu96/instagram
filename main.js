
var UImage= document.createElement(Image) 
UImage.src= "./imgs/gundam logo.jpg";


const post = {
    userImage: UImage,
    userName: 'Giacomo bazzano',
    postImage:'./imgs/Mobile_Suit_Gundam.jpg',
    like: true,
    comments: [{
        userImage: './img/UsrImgBot1.jpg',
        userName: 'bot1',
        text: 'nice img, love it'
    }],
    likes: ['vitomanu', 'giacomobaz'],
    createDate: '1664812347283'
}

// @giaco interazione con il like svg
function handleClickLike() {
    // toogle like
    post.like = !post.like // !true
    const likeSvg = document.getElementById('like')
    likeSvg.style.fill = post.like ? '#FF0000' : '#000000'
}


window.addEventListener('load', (event) => {
    console.log('page is fully loaded', new Date().getTime())
    console.log('Start instagram')

    const usernameDiv = document.getElementById('username')
    const likeSvg = document.getElementById('like')
    console.log(usernameDiv, new Date().getTime())
    console.log('likeSvg', likeSvg)
    usernameDiv.textContent = post.userName

    likeSvg.style.fill = post.like ? '#FF0000' : '#000000'
/*
    if (post.like) {
        likeSvg.color = 'red'
    } else {
        likeSvg.color = 'black'
    }*/


})




