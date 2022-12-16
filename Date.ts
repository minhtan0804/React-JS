// Bài 1: Viết một hàm JavaScript để lấy ngày hiện tại
// Lưu ý: Truyền dấu phân tách làm đối số.
// getCurrentDate("/") => 17/08/2020

const getCurrentDate = (option?: string) => {
  const today = new Date().toLocaleDateString("en-GB");
  const arr = today.split("/");

  return arr.join(option ? option : "-");
};

console.log(getCurrentDate("/"));

// Bài 2: Viết một hàm JavaScript để lấy số ngày trong tháng
// getDaysInMonth(8, 2020) => 31

const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month, 0).getDate();
}

console.log(getDaysInMonth(2, 2022));

// Bài 3: Viết một hàm JavaScript để kiểm tra xem một ngày có phải là ngày cuối tuần hay không.

interface ITimeCheck {
  year?: number;
  month: number;
  date: number;
}

const checkIsWeekend = (timeCheck: ITimeCheck): boolean => {
  let { year, month, date } = timeCheck;

  if (!year) {
    year = new Date().getFullYear();
  }

  const indexDate = new Date(year, month - 1, date).getDay();

  return [0, 6].includes(indexDate);
};

// console.log(isDayWeekend(22-12-2002));

// Bài 4: Viết một hàm JavaScript sẽ trả về số phút theo giờ và phút

const getMin = (hours: number, minutes: number) : number => {
  return hours * 60 + minutes;
}

console.log(getMin(2, 5));

// Bài 5: Viết một hàm JavaScript để đếm số ngày đã trôi qua kể từ đầu năm.

const countDay = (): number => {
  const today = new Date();
  const firstDay = new Date(today.getFullYear(), 0, 1);

  return Math.ceil((today.getTime() - firstDay.getTime()) / 3600 / 24 / 1000);
}

console.log(countDay());

// Bài 6: Viết chương trình JavaScript để tính tuổi.
// calculate_age(new Date(1982, 11, 4))

const calcAge = (inputDate: Date): number => {
  const today = new Date().getFullYear();
  const bornDay = new Date(inputDate).getFullYear();

  return today - bornDay;
}


console.log(calcAge(new Date(1982, 5, 28)));

// Bài 7: Viết một hàm JavaScript để lấy ngày bắt đầu của tuần.
// let dt = new Date();
// startOfWeek(dt)

const getMonday = (date: Date) => {
  const day = date.getDay() - 1;
  if (day < date.getDate())
    return date.getDate() - day
  
  // retur
}

console.log(getMonday(new Date()));

// Bài 8: Viết một hàm JavaScript để lấy ngày kết thúc tháng
// dt = new Date();
// endOfMonth(dt);

const endOfMonth = (date: Date) => {
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return lastDay
}

console.log(endOfMonth(new Date));

// Bài 9: Viết hàm đếm ngược thời gian đến tết dương lịch

const countToNewYear = (date: Date) => {
  const firstDayInNewYear = new Date(date.getFullYear() + 1, 0, 0)
  return (firstDayInNewYear.getTime() - date.getTime()) / 1000 / 60 / 60 / 24;
}

console.log(countToNewYear(new Date()));

// Bài 10: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ với t = ''9:20:56'' và x = 7 thì kết quả là ''9:21:3''

const plusSecond = (t: string, x: number) => {
  if (x > 1000) {
    throw new Error("x bé hơn 1000");
  } else if (x < 0) {
    throw new Error("x phải lớn hơn hoặc bằng 0");
  }

  const [hours = 0, minutes = 0, seconds = 0] = t.split(":");

  const d = new Date();
  d.setHours(+hours);
  d.setMinutes(+minutes);
  d.setSeconds(+seconds);
  console.log(d);

  d.setSeconds(d.getSeconds() + x);

  const hoursPlus = d.getHours();
  const minutesPlus = d.getMinutes();
  const secondsPlus = d.getSeconds();

  return `${hoursPlus}:${minutesPlus}:${secondsPlus}`;
};

console.log(plusSecond("9:20:56", 232));

// Bài 11. Viết hàm reset data. Input là object. Output là object sau khi được reset

const obj = {
  name: "quan",
  age: 25,
  hobby: ["code", "play", "game"],
  family: {
    name: "tuna",
    age: 12,
    parent: {
      name: "Hoa",
    },
  },
};

const isObject = (value: unknown): boolean => {
  return typeof value === "object" && !Array.isArray(value) && value !== null;
};

const resetData = <T extends {}>(input: T) => {
  if (!isObject(input)) {
    throw new Error("Input không phải là object");
  }

  for (const [key, value] of Object.entries(input)) {
    if (typeof value === "string") {
      input[key] = "";
    } else if (typeof value === "number") {
      input[key] = 0;
    } else if (Array.isArray(value)) {
      input[key] = [];
    } else if (isObject(value)) {
      resetData(value as {});
    }
  }

  return input;
};

console.log(resetData(obj));

//dung de quy de xu ly obj sau
// nếu value là string -> ''
// nếu value là number -> 0
// nếu value là array -> []

// ---> obj = {
//   name : "",
//   age : 0,
//   hobby : [],
//   family : {
//     name : "",
//     age : 0,
//     parent : {
//       name : ""
//     }
//   }
// }


