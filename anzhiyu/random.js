var posts=["2025/03/03/hello-world/","2025/03/03/cse-filesystem/","2025/03/04/cse-rpc/","2025/03/04/cse-dfs/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };