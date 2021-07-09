# Routes
* Endpoint: `/api/auth/login`
* Method: `POST`
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
***
* Endpoint: `/api/transactions/create`
* Method: `POST`
```javascript
 Request
 {
   servicesIds: ["dsafdsadsc", "fdsacccaads"],
   employeeId: "dfsdckeonf"
 }

 Response
 {
   status: true,
   message: "تم اضافة العملية بنجاح",
 }
```
***
* Endpoint: `/api/transactions/get`
* Method: `POST`
```javascript
 Request
 {
   employeeId: "dfsdckeonf", //Null
   date: "01-27-2021" //mm-dd-yyyy
 }

 Response
 {
   status: true,
   message: "تم استرجاع البيانات بنجاح",
   data: {
    transactions: [
      {
        _id: "dsafdsafeaedascsaeafe",
        services: [
          {
            _id: "sdafeafscaseda", 
            name: "حلاقة الذقن", 
            price: 30
          },
          {
            _id: "sdafeafscaseda", 
            name: "حلاقة الشعر", 
            price: 30
          }
        ],
        employee: {
          _id: "sdfdceceaa",
          name: "مؤمن"
        },
        cashier: {
          _id: "sadfdascaeqecaefae",
          name: "نور",
        },
        total: 60,
        day: "07-09-2021",
        time: "2021-04-30T14:11:15.378+00:00"
      }
    ],
    employees: [
      {
        _id: "fdfdsacdasvsd",
        name: "مؤمن"
      },
      {
        _id: "fknoengionqe",
        name: "محمود"
      }
    ],
  }
 }
```
***
* Endpoint: `/api/home`
* Method: `POST`
```javascript
 Request
 {
    employees: [
      {
        _id: "fdfdsacdasvsd",
        name: "مؤمن"
      },
      {
        _id: "fknoengionqe",
        name: "محمود"
      }
    ],
    services: [
      {
        _id: "sdfeaeverbser",
        name: "حلاقة الذقن",
        price: 30
      },
      {
        _id: "sdfeaeverbser",
        name: "حلاقة الشعر",
        price: 60
      }
    ]
 }

 Response
 {
   status: true,
   message: "تم استرجاع البيانات بنجاح",
 }
```