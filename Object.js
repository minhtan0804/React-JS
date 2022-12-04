var user = {
    name : "Nguyễn Tiến Đạt",
    age : 25,
    email : 'support@amela.vn'
};

// Bai 1.  Viết hàm để lấy danh sách các key của object

const userKeys =  Object.keys(user);

console.log(userKeys);

// Bai 2. Viết hàm để lấy danh sách các value của object

const userValues = Object.values(user);

console.log(userValues);

// Bai 3. Viết hàm kiểm tra key có tồn tại trong Object không

const haveKey = (key) => userKeys.includes(key);

console.log(haveKey('name'));

// Bai 4. . Viết hàm kiểm tra Object có độ dài bao nhiêu

// const sizeObject = Object.keys(user).length;

const sizeObject = _.size(user);

console.log(sizeObject);

// Bai 5. Cho mảng các user mỗi user có cấu trúc
// user = {
//   name : string,
//   age : number,
//   isStatus : bool
// }
// Viết function lấy ra những user có tuổi > 25 và isStatus = true

var user1 = {
    name : "A",
    age : 18,
    isStatus : true
};

var user2 = {
    name : "B",
    age : 30,
    isStatus : true
};

var user3 = {
    name : "C",
    age : 27,
    isStatus : false
};

const userArray = [user1, user2, user3];

const userHaveCondition = userArray.filter((user, index, array) => {
    return user.age > 25 && user.isStatus === true;
}, [])
console.log(userHaveCondition);
