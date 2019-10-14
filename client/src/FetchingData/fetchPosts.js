import {fetchPostsPending,fetchPostsSuccess,fetchPostsError} from '../actions/getPostsAction'

function fetchPosts(){
    return dispatch=>{
        dispatch(fetchPostsPending());
        fetch('/api/posts/showall')
        .then(res=>res.json())
        .then(res=>{
            if(res.error){
                throw(res.error);
            }
            dispatch(fetchPostsSuccess(res));
            
            return res;
        })
        .catch(error=>{
            dispatch(fetchPostsError(error));
        })
    }
}
export default fetchPosts;