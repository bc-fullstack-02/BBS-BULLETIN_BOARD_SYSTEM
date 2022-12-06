import {createSlice} from '@reduxjs/toolkit';
const inicioEstado ={
    mode: 'light',
    user: null,
    token: null,
    posts: [],
}
export const inicioSlice = createSlice({
    name: 'Bene',
    inicioEstado,
    reducers: {
        setMode: (state) => {
            state.mode =  state.mode === 'light' ? 'dark' : 'light';
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setlogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends:(state, action) => {
            if(state.user){
                state.user.friends = action.payload;
            }else{
                console.log('Voce e tao triste tenho pena de voce');
            }
        },
        setPosts:(state, action) => {
            state.posts = action.payload;
        },
        setPost: (state, action) => {
            const upadatePost = state.posts.map((post) => {
                if(post.id === action.payload.id){
                    return action.payload;
                }
                return post;
            });
            state.posts = upadatePost;

    }
    }
})
export const {setMode, setLogin, setlogout, setFriends, setPosts, setPost} = inicioSlice.actions;
export default inicioSlice.reducer;