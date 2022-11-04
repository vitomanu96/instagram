const posts = [
    {
        id: 1,
        userImage: './imgs/gundam logo.jpg',
        userName: 'Vito Manuguerra1',
        postImage: './imgs/Mobile_Suit_Gundam.jpg',
        like: true,
        comments: [{
            userImage: './img/UsrImgBot1.jpg',
            userName: 'bot12',
            text: 'nice img, love it2'
        }],
        likes: ['vitomanu', 'giacomobaz'],
        createDate: '1664812347283'
    },
    {
        id: 2,
        userImage: './imgs/gundam logo4.jpg',
        userName: 'Vito Manuguerra2',
        postImage: './imgs/Mobile_Suit_Gundam.jpg',
        like: false,
        comments: [{
            userImage: './img/UsrImgBot1.jpg',
            userName: 'bot12',
            text: 'nice img, love it3'
        }],
        likes: ['vitomanu', 'giacomobaz'],
        createDate: '1664812347283'
    }
]

// @giaco interazione con il like svg
function handleClickLike() {
    // toogle like
    post.like = !post.like // !true
    const likeSvg = document.getElementById('like')
    likeSvg.style.fill = post.like ? '#FF0000' : '#000000'
}

const handleClickLikeBind = () => {
    // toogle like
    post.like = !post.like // !true
    const likeSvg = document.getElementById('like')
    likeSvg.style.fill = post.like ? '#FF0000' : '#000000'
}


window.addEventListener('load', (event) => {
    console.log('page is fully loaded', new Date().getTime())
    console.log('Start instagram')

    posts.forEach(post => {
        // todo creare il post completo con JS
        const postHtml = document.createElement('article')
        postHtml.className = 'flex-posts'
        postHtml.id = post.id
        document.querySelector('#imgProfile1')
        const postHeader = document.createElement('div')
        const imgHeader = document.createElement('img')
        imgHeader.id = 'imgProfile' + post.id
        imgHeader.src = post.userImage
        postHeader.appendChild(imgHeader)
        postHeader.className = 'flex-upperFunctions'
        postHtml.appendChild(postHeader)

        document.getElementById("posts-container").appendChild(postHtml)
    })

    /*const usernameDiv = document.getElementById('username')
    const likeSvg = document.getElementById('like')
    const imgProfile = document.getElementById('imgProfile')
    console.log(usernameDiv, new Date().getTime())
    console.log('likeSvg', likeSvg)
    usernameDiv.textContent = post.userName
    imgProfile.src = post.userImage

    likeSvg.style.fill = post.like ? '#FF0000' : '#000000'*/
    /*
        if (post.like) {
            likeSvg.color = 'red'
        } else {
            likeSvg.color = 'black'
        }*/
})




