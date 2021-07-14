import history from '../history';
import streams from '../APIs/streams';
import { SIGN_IN,SIGN_OUT,CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, EDIT_STREAM, DELETE_STREAM} from "./types";
export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};
export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};
export const createStream = formValues => async (disptach,getState) => {
    const userId = getState().auth.userId;
    const response = await streams.post('/streams', {...formValues,userId});
    disptach({
        type: CREATE_STREAM,
        payload: response.data
    });
    history.push('/');
};
export const fetchStreams = () => async disptach =>{
    const response = await streams.get('/streams');
    disptach({type: FETCH_STREAMS, payload: response.data});
};
export const fetchStream = (id) => async disptach =>{
    const response = await streams.get(`/streams/${id}`);
    disptach({type: FETCH_STREAM, payload:response.data});
};
export const editStream = (id,formValues) => async disptach => {
    const response = await streams.patch(`/streams/${id}`,formValues);
    disptach({type: EDIT_STREAM, payload:response.data});
    history.push('/');
};
export const deleteStream = (id,formValues) => async disptach =>{
    await streams.delete(`/streams/${id}`,formValues);
    disptach({type: DELETE_STREAM, payload: id});
    history.push('/');
};