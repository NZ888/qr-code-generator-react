import {useMemo} from "react";


export const usePosts = (posts, query) => {
    const sortedPosts = useMemo(()=>{
        if(!query){
            return posts;
        }
        return posts.filter(post => post.value.toLowerCase().includes(query.toLowerCase()));
    }, [query]);
    return sortedPosts;
}