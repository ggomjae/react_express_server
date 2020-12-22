REACT + Express  ( ~ing ) 🐻
============ 


-------
* Author 민경재[ggomjae] <br>
* 개인 개발 블로그 링크 <https://blog.naver.com/ggomjae> <br>

-------

Fronted ( React )
============

현재 진행중입니다. <br>

Server ( Express )
============


```User```와 관계없는 URI
```bash
router.post('/login',userController.loginUser);
```

```/users```와 ```/posts```
```bash

// User
router.post('/', userController.createUser);
router.get('/', userController.retrieveAllUser);
router.get('/:uno',auth, userController.retrieveUser);
router.patch('/:uno',auth, userController.updateUser);
router.delete('/:uno',auth, userController.deleteUser);

// Post 
router.post('/:uno/posts',postController.createPost);
router.get('/:uno/posts',postController.retrieveAllPost);
router.get('/:uno/posts/:pno',postController.retrievePost);
router.patch('/:uno/posts/:pno',postController.updatePost);
router.delete('/:uno/posts/:pno',postController.deletePost);

```

```mocha``` 적용
```bash
"scripts": { 
    "test": "SET \"NODE_ENV=test\" && mocha ./express/services/user/user.spec.js -w",
    "start": "node ./express/server.js"
  },
```

# 끝맺음
<br>

> 주기적인 업데이트. <br>
> 완전한 코드는 Git 위의 코드 부분을 봐주세요. <br>