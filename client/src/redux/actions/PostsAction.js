import * as PostsApi from "../api/PostsRequests"


export const deletePost=(id, formData)=> async(dispatch)=> {
  dispatch({type: "DELETE_START"})
  try{
      const {data} = await PostsApi.deletePost(id, formData);
      console.log("Postagem deletada com sucesso!",data)
      dispatch({type: "DELETE_SUCCESS", data: data})
  }   
  catch(error){
      dispatch({type: "DELETE_FAIL"})
  }
}

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostsApi.getTimelinePosts(id);
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};

/*
export const deletePost = (id, data)=> async(dispatch)=> {
  dispatch({type: "DELETE_POST", data: id})
  PostsApi.deletePost(id, data)
}
*/