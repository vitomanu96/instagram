const post = {
    userImage: '',
    userName: 'Giacomo bazzano',
    postImage: '',
    like: true,
    comments: [{
        userImage: '',
        userName: '',
        text: ''
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




