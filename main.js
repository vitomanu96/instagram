const posts = [
    {
        id: 1,
        userImage: './imgs/gundam logo.jpg',
        userName: 'Giacomo Bazzano',
        postImage: './imgs/Mobile_Suit_Gundam.jpg',
        like: true,
        likes: ['vitomanu', 'giacomobaz'],
        comments: [{
            userImageC: './imgs/UsrImgBot1.png',
            userNameC: 'Bot1',
            text: 'Nice one'
        }],
        
        createDate: '1664812347283'
    },
    {
        id: 2,
        userImage: './imgs/2.jpg',
        userName: 'Post Bot 2',
        postImage: './imgs/woods.jpg',
        like: false,
        likes: ['vitomanu', 'giacomobaz'],
        comments2: [{
            userImageC: './imgs/Bot 2.png',
            userNameC: 'Bot2',
            text2: 'Nice one'
        }],
        
        createDate: '1664812347283'
    },
    {
        id: 3,
        userImage: './imgs/3.jpg',
        userName: 'Post Bot 3',
        postImage: './imgs/snowoods.jpg',
        like: true,
        likes: ['vitomanu', 'giacomobaz'],
        comments: [{
            userImageC: './imgs/Bot 3.png',
            userNameC: 'Bot3',
            text3: 'Nice one'
        }],
        
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

likeSvg = document.getElementById('like');

// esercizio 1.1
// 1.2 aggiungere la logica del like
window.addEventListener('load', (event) => {

    const article = document.createElement('article')
    article.className = 'article-post'
    article.id = 1

    const headerPost = document.createElement('div')
    headerPost.className = 'header-post'

    //chiedere come invertire l'ordine di nome utente e immagine profilo utente 
  /* const userProfImg = document.createElement('img')
    userProfImg.className = 'imgProfile'
    userProfImg.src = './imgs/gundam logo.jpg'
    */



    const userNameElem = document.createElement('h4')
    userNameElem.textContent = 'Giacomo'

    /*TODO 1. aggiungere anche body-post e footer-post*/

    const bodyPost = document.createElement('div')
    bodyPost.className = 'body-post'

    const postImg = document.createElement ('img')
    postImg.className= 'img-body-post' 
    postImg.src = './imgs/Mobile_Suit_Gundam.jpg'
    

    
   
    

    const footerPost = document.createElement('div')
    footerPost.className= 'footer-post'
    
//SVG CUORE
    const postLikeFunction = document.createElement('svg')
    
    
    const postLikes = document.createElement('h6')
    postLikes.textContent = 'Piace a VitoManu, a GiacomoBazz e altri'

    const postComment = document.createElement('h4')
    postComment.textContent = 'VitoManu: WOW'

    const postCommentS = document.createElement('h4')
    postCommentS.textContent = 'Mostra altri commenti'



// relativo ad immagine profilo userNameElem.appendChild(userProfImg)
    headerPost.appendChild(userNameElem)
    

    article.appendChild(headerPost)

    const container = document.getElementById('posts-container')
    
    article.appendChild(bodyPost)
    article.appendChild(footerPost)

    bodyPost.appendChild(postImg)
    
        container.appendChild(article)
    footerPost.appendChild(postLikeFunction)
    footerPost.appendChild(postLikes)

    postComment.appendChild(postCommentS)
    postLikes.appendChild(postComment)
    
    
    
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




