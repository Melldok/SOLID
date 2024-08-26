import { PostService } from './05-dependancy-b';
import { JsonDataBaseService, LocalDataBaseService, WebApiPostService } from './05-dependancy-c';


// Main
(async () => {

    // const provider = new JsonDataBaseService();
    // const provider = new LocalDataBaseService();
    const provider = new WebApiPostService();

    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts });


})();