import {addPostAC, updatePostMessageAC} from "../../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        postText: state.profilePage.postText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postMessage) =>  dispatch(addPostAC(postMessage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)

// connect - это аналог контейнера с помощью React.createContext
// connect защищает разработчика от знания store
// state в mapStateToProps достает до store, без посредников с помощью react-redux библиотеки
// dispatch в mapDispatchToProps  уже за-bind-eн
// методы из объекта возвращаемого mapStateToProps нужно правильно деструкторизировать
// в объекте возвращенном mapStateToProps нужно копировать state с помощью деструктуризации