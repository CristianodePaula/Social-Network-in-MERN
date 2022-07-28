const pageReducer = (state = { pageData: null, loading: false, error: false, updateLoading: false }, action) => {
    switch (action.type) {
        case "PAGE_START":
            return { ...state, loading: true, error: false }
            
        case "PAGE_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }))

            return { ...state, pageData: action.data, loading: false, error: false }

        case "PAGE_FAIL":
            return { ...state, loading: false, error: true }

        case "UPDATING_START":
            return { ...state, updateLoading: true, error: false }

        case "UPDATING_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
            return { ...state, pageData: action.data, updateLoading: false, error: false }

        case "UPDATING_FAIL":
            return { ...state, updateLoading: true, error: true }

        case "FOLLOW_PAGE":
            return { ...state, pageData: { ...state.pageData, user: { ...state.pageData.user, following: [...state.pageData.user.following, action.data] } } }

        case "UNFOLLOW_PAGE":
            return { ...state, pageData: { ...state.pageData, user: { ...state.pageData.user, following: [...state.pageData.user.following.filter((personId) => personId !== action.data)] } } }

        default:
            return state
    }
}

export default pageReducer