
import * as UploadApi from "../api/PagesRequests"

export const uploadImage = (data) => async (dispatch) => {
  try {
    console.log("Envio de imagem iniciado")
    await UploadApi.uploadImage(data)
  } catch (error) {
    console.log(error)
  }
}

export const uploadPage = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" })
  try {
    const newPage =await UploadApi.uploadPage(data)
    dispatch({ type: "UPLOAD_SUCCESS", data: newPage.data })
  } catch (error) {
    console.log(error)
    dispatch({ type: "UPLOAD_FAIL" })
  }
}

/*
export const getTimelinePages = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" })
  try {
    const { data } = await PostsApi.getTimelinePages(id)
    dispatch({ type: "RETREIVING_SUCCESS", data: data })
  } catch (error) {
    dispatch({ type: "RETREIVING_FAIL" })
    console.log(error)
  }
}
*/