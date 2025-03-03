var posts=["2025/03/03/hello-world/","2025/03/03/cse-filesystem/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };