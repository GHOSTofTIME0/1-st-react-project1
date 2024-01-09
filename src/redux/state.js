let state = {
    profilePage: {
        posts: [{ id: 1, body: "daseaseaseaee", likesCount: 23 },
        { id: 2, body: "something", likesCount: 10 },
        { id: 3, body: "daseaseaseaee", likesCount: 13 },],
    },
    messagesPage: {
        dialogsData: [{ id: 1, name: "Ilya", imgURL: "https://hypixel.net/attachments/nero_claudius_navidad___padoru_padoru_by_alexzer09_dbwh40a-png.2207884/" },
        { id: 2, name: "Dana", imgURL: "https://i.pinimg.com/736x/b9/e8/53/b9e853e5fd132be955e214395278e6eb.jpg" },
        { id: 3, name: "Chuvak", imgURL: "https://cdna.artstation.com/p/assets/images/images/025/241/080/4k/rienque-leverite-gutsattempt2-corrected.jpg?1585144202" },
        { id: 2, name: "Dana", imgURL: "https://i.pinimg.com/736x/b9/e8/53/b9e853e5fd132be955e214395278e6eb.jpg" },],
        messagesData: [{ id: 1, message: "Hi!" },
        { id: 2, message: "sdafsdr" },
        { id: 3, message: "fdsrfase" },],
    },
}


export let addPost = (post) => {
    let newPost = {
        id: post.id,
        body: post.body,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
}

export let removePost = (postId) => {
    const updatedPosts = state.profilePage.posts.filter(post => post.id !== postId);
    state.profilePage.posts = updatedPosts;
    console.log(state.profilePage.posts);
}




export default state;