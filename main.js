const posts = [
    {
        id: 1,
        userImage: './imgs/gundam logo.jpg',
        userName: 'Giacomo Bazzano',
        postImage: './imgs/Mobile_Suit_Gundam.jpg',
        like: true,
        comments: [{
            userImageC: './imgs/UsrImgBot1.png',
            userNameC: 'Bot1',
            text: 'Nice one'
        }],
        likes: ['vitomanu', 'giacomobaz'],
        createDate: '1664812347283'
    },
    {
        id: 2,
        userImage: './imgs/2.jpg',
        userName: 'Post Bot 2',
        postImage: './imgs/woods.jpg',
        like: false,
        comments2: [{
            userImageC: './imgs/Bot 2.png',
            userNameC: 'Bot2',
            text2: 'Nice one'
        }],
        likes: ['vitomanu', 'giacomobaz'],
        createDate: '1664812347283'
    },
    {
        id: 3,
        userImage: './imgs/3.jpg',
        userName: 'Post Bot 3',
        postImage: './imgs/snowoods.jpg',
        like: true,
        comments: [{
            userImageC: './imgs/Bot 3.png',
            userNameC: 'Bot3',
            text3: 'Nice one'
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

// esercizio 1.1
// 1.2 aggiungere la logica del like
window.addEventListener('load', (event) => {

    const article = document.createElement('article')
    article.className = 'article-post'
    article.id = 1

    const headerPost = document.createElement('div')
    headerPost.className = 'header-post'

    const userNameElem = document.createElement('h4')
    userNameElem.textContent = 'Vito'

    /*TODO 1. aggiungere anche body-post e footer-post*/

    headerPost.appendChild(userNameElem)

    article.appendChild(headerPost)

    const container = document.getElementById('posts-container')

    container.appendChild(article)

})

// esercizio 2.1: creare lista di posts
// 2.2 aggiungere il like
// 2.3 il medesimo esercizio potrebbe essere fatto utilizzando il "map" al posto del foreach
// 2.3 NOTA container.append([article, article, article, article])
/*
window.addEventListener('load', (event) => {

    const container = document.getElementById('posts-container')

    posts.forEach((post, index) => {

        console.log('post ', post, ' con indice ', index)
        const article = document.createElement('article')
        article.className = 'article-post'
        article.id = post.id

        const headerPost = document.createElement('div')
        headerPost.className = 'header-post'

        const userNameElem = document.createElement('h4')
        userNameElem.textContent = post.userName

        /!*TODO 1. aggiungere anche body-post e footer-post*!/

        headerPost.appendChild(userNameElem)

        article.appendChild(headerPost)

        container.appendChild(article)
    })
})
*/




