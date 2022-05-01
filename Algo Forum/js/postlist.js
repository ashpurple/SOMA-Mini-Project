import {onRequest} from './database.js';

onRequest.onsuccess = async() => {
    const database = onRequest.result
    const transaction = database.transaction('post')
    const store = transaction.objectStore('post')
    store.openCursor().onsuccess = (e) => {
        var cursor = e.target.result;
        if (cursor) {
            var result = 
                `<div>
                    <div class="post-preview">
                        <a href="post.html?id=${cursor.key}"> 
                            <h2 class="post-title">${cursor.value.title}</h2>
                            <h4 class="post-tag">#${cursor.value.problemnum} #${cursor.value.language} #${cursor.value.algorithm}</h4>
                        </a>
                        <p class="post-meta">
                            Posted by
                            <a href="#!">${cursor.value.author}</a>
                            2022.04.26
                        </p>
                    </div>
                    <hr class="my-4" />
                </div>`
            document.getElementById('postlist').insertAdjacentHTML('beforeend', result);
            cursor.continue();
        }
    }

}