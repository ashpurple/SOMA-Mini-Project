import { onRequest, addEntryToDb } from './database.js';

onRequest.onsuccess = () => {
    document.getElementById('upload').onclick = () => {
        const author = document.getElementById("author").value;
        const title = document.getElementById("title").value;
        const problemnum = document.getElementById("problemnum").value;
        const algorithm = document.getElementById("algorithm").value;
        const selectOption = document.getElementById("language");
        const language = selectOption.options[selectOption.selectedIndex].value;
        const solvetime = document.getElementById("solvetime").value;
        const contents = document.getElementById("contents").value;
        const code = document.getElementById("code").value;
        addEntryToDb('post', 
        {author:author, title:title, problemnum:problemnum, algorithm:algorithm, 
            language:language, solvetime:solvetime, contents:contents, code:code});
    };
}