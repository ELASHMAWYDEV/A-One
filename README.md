# Routes
- `/api/auth/login`
* Cookies: `access_token` `user_date`
```javascript
 Request
 {
   username: "nour",
   password: "123456"
 }

 Response
 {
   status: true,
   message: "تم تسجيل الدخول بنجاح",
   user: {
     username: "nour"
   },
   accessToken: "randomaccesstoken"
 }
```
