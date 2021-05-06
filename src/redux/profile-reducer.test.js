import profileReducer, {addPostAC, deletePost} from "./profile-reducer";


describe('Posts should', () => {
//1.test data
    const state = {
        posts: [
            {id: 1, message: 'Glad to see everyone', likes: 0},
            {id: 2, message: 'Glad to see you', likes: 3},
            {id: 3, message: 'Glad to see everyone', likes: 5},
        ]
    }

test('increment', () => {
    // 2.action
    let action = addPostAC('new post message')
    let newState = profileReducer(state, action)

    // 3.expectation
    expect(newState.posts.length).toBe(4)
})

test('have a new post with correct text', () => {
    // 2.action
    let action = addPostAC('new post message')
    let newState = profileReducer(state, action)

    // 3.expectation
    expect(newState.posts[3].message).toBe('new post message')
})
    test('decrement', () => {
    // 2.action
    let action = deletePost(1)
    let newState = profileReducer(state, action)

    // 3.expectation
    expect(newState.posts.length).toBe(2)
})
})
