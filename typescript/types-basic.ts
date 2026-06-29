const ten: string = "Phuong"
console.log(ten)

const tuoi: number = 20
const diem: number = 9.56
console.log(diem.toFixed(1))
console.log(Number.isInteger(diem))
console.log(tuoi)

const isStudent: boolean = true
console.log(isStudent)

// array
const arrNumber: number[] = [1, 2, 3, 4, 5]
console.log(arrNumber)
const arrString: string[] = ["Phuong", "Nguyen", "Hang"]
console.log(arrString)

// union type: 1 biến hoặc hàm sẽ có nhiều kiểu dữ liệu
const id: string | number = "123"
console.log(id)

// hàm không có kết quả trả về thì sẽ có kiểu dữ liệu là void
const xuLyId = (id: string | number): void => {
    if (typeof id === "string") {
        console.log(id.toUpperCase())
    } else {
        console.log(id.toFixed(2))
    }
}
xuLyId("hello")
xuLyId(456.789)

// interface: định nghĩa kiểu dữ liệu cho object
interface NguoiDung {
    id: number;
    ten: string;
    email: string;
    tuoi?: number; // optional property
    readonly ngayTao: string; // readonly property
}

const user1: NguoiDung = {
    id: 1, 
    ten: "Phuong",
    email: "phuong@gmail.com",
    ngayTao: "2024-06-01"
}
console.log(user1)

// trường hợp muốn tạo thêm object mới từ object đã có sẵn
interface Admin extends NguoiDung {
    role: "admin" | "user"
}

const admin1: Admin = {
    id: 2,
    ten: "Nguyen",
    email: "nguyen@gmail.com",
    ngayTao: "2024-06-01",
    role: "admin"
}
console.log(admin1)

// interface và type alia
// interface: model hóa object nhận về từ API (user, product, order,...)
// type alias: tương tác với các business logic (thêm, xóa, sửa,...)

interface NguoiDungDayDu {
    id: number;
    ten: string;
    email: string;
    diaChi: string;
    tuoi: number;
}

// tạo type cho form đăng ký người dùng
// thông thường thì sẽ không có input nhập id vì API sẽ tự sinh id
// Omit: bỏ qua 1 số thuộc tính trong interface
type FormDangKyUser = Omit<NguoiDungDayDu, "id">

const formDangKy: FormDangKyUser = {
    ten: "Hang",
    email: "hang@gmail.com",
    diaChi: "TPHCM",
    tuoi: 28
}
console.log(formDangKy)

// Partial: tất cả các thuộc tính trong interface sẽ trở thành optional
// khi nào dùng:
// 1. update thông tin người dùng (có thể update 1 hoặc nhiều thuộc tính)
// 2. filter dữ liệu (có thể filter theo 1 hoặc nhiều thuộc tính)

// flow update data
// 1. có dữ liệu của user (list user)
// 2. user muốn update thông tin (form update)
// typescript: bắt buộc define type cho update user
// => Partial để convert require -> optional

type UpdateUser = Partial<NguoiDungDayDu>

const capNhatName: UpdateUser = {
    ten: "Phuong"
}

// gửi data này về API để update thông tin người dùng
console.log(capNhatName)
// thường dùng: kết hợp Partial và Omit để update thông tin người dùng

// hook: define flow update data và get data mới

type UpdateUser2 = Partial<Omit<NguoiDungDayDu, "id">>

// Pick: chỉ lấy ra 1 số thuộc tính trong interface
// khi nào dùng:
// 1. danh sách dropdown (chỉ cần lấy ra 1 số thuộc tính để hiển thị trong dropdown)
// 2. card preview

type NguoiDungDropdown = Pick<NguoiDungDayDu, "id" | "ten">

const userDropdown: NguoiDungDropdown[] = [
    {id: 1, ten: "Phuong"},
    {id: 2, ten: "Nguyen"},
    {id: 3, ten: "Hang"}
]

// define kiểu dữ liệu với hard code value
type Role = "admin" | "user" | "guest"
// const role1: Role = "admin1" // error vì không có trong type Role

// Record: tạo ra 1 object với key và value
type UserRole = Record<string, Role>

const userRole: UserRole = {
    "1": "admin",
    "2": "user",
    "3": "guest"
}
console.log(userRole["1"]) // admin

// tạo object chứa lịch làm việc theo ca được lấy từ API
// <ten>: <ca làm việc>
// An: ["thu 2", "thu 3", "thu 4"]
// Phuong: ["thu 5", "thu 6"]
type LichLamViec = Record<string, string[]>
const lichLamViec: LichLamViec = {
    An: ["thu 2", "thu 3", "thu 4"],
    Phuong: ["thu 5", "thu 6"]
}
console.log(lichLamViec["An"]) // ["thu 2", "thu 3", "thu 4"]




