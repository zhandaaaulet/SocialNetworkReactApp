import {rerenderEntireTree} from "../render";


let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 0},
            {id: 2, message: "It's my first post", likesCount: 27}
        ],
        newPostText: 'ghj'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Sake"},
            {id: 2, name: "Make"},
            {id: 3, name: "Bake"},
            {id: 4, name: "Zhake"},
            {id: 5, name: "Shake"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Hello"},
            {id: 3, message: "How are you?"},
            {id: 4, message: "Good"},
            {id: 5, message: "OK"}
        ]
    },
    sidebar: {}
};

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 15
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;

