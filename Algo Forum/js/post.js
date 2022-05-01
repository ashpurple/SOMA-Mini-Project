import { onRequest, getEntryFromDb } from "./database.js";

onRequest.onsuccess = async () => {
    var objectStore = onRequest.result.transaction("post").objectStore("post");

    const id = getQueryStringObject().id;
    console.log(id)

    const post = await getEntryFromDb('post', Number(id))
    console.log(post)
    document.getElementsByTagName('h1')[0].innerHTML = post.title;
    document.getElementById('subheading').innerHTML = `
    #${post.problemnum} #${post.language} #${post.algorithm}`;
    document.getElementById('author').innerHTML = post.author;
    document.getElementById('contents').innerHTML = post.contents;
    document.getElementById('code').innerHTML = post.code;
}

function getQueryStringObject() {
    var a = window.location.search.substr(1).split('&');
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
}