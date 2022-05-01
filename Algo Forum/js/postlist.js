import {onRequest, getEntryFromDb} from './database.js';

onRequest.onsuccess = async() => {
    const posts = await getEntryFromDb('post')
    var result = ''

    posts.map((post) => {
        result += `
            <div>
                <div class="post-preview">
                    <a href="post.html"> 
                        <h2 class="post-title">${post.title}</h2>
                        <h4 class="post-tag">#${post.problemnum} #${post.language} #${post.algorithm}</h4>
                    </a>
                    <p class="post-meta">
                        Posted by
                        <a href="#!">${post.author}</a>
                        2022.04.26
                    </p>
                </div>
                <hr class="my-4" />
            </div> 
        `
    })
    console.log(result)
    document.getElementById('postlist').innerHTML = result
}