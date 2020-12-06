현재 진행중입니다. <br>
Express로 서버 개발 -> React 연동 <br>
2020-12-07 : login까지 <br>

```User```와 관계없는 URI
```bash
router.post('/login',userController.loginUser);
```

```/users```
```bash
router.post('/', userController.createUser);
router.get('/', userController.retrieveAllUser);
router.get('/:uno',auth, userController.retrieveUser);
router.patch('/:uno',auth, userController.updateUser);
router.delete('/:uno',auth, userController.deleteUser);
```

