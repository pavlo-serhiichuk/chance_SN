import {addPostAC, updatePostMessageAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 let state = store.getState().profilePage
//                 const addPost = () => {
//                     store.dispatch(addPostAC())
//                     store.dispatch(updatePostMessageAC(''))}
//
//                 const updatePostMessage = (text) => {
//                     store.dispatch(updatePostMessageAC(text))}
//
//                 return <MyPosts posts={state.posts}
//                                 postText={state.postText}
//                                 updatePostMessage={updatePostMessage}
//                                 addPost={addPost}/>
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        postText: state.profilePage.postText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePostMessage: (text) => dispatch(updatePostMessageAC(text)),
        addPost: () =>  dispatch(addPostAC())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)

// connect - это аналог контейнера с помощью React.createContext
// connect защищает разработчика от знания store
// state в mapStateToProps достает до store, без посредников с помощью react-redux библиотеки
// dispatch в mapDispatchToProps  уже за-bind-eн
// методы из объекта возвращаемого mapStateToProps нужно правильно деструкторизировать
// в объекте возвращенном mapStateToProps нужно копировать state с помощью деструктуризации