var posts=["2025/03/03/hello-world/","2025/03/03/cse-filesystem/","2025/03/04/cse-rpc/","2025/03/04/cse-dfs/","2025/03/04/cse-kv/","2025/03/04/cse-tx/","2025/03/04/cse-paxos/","2025/03/05/cse-network/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };