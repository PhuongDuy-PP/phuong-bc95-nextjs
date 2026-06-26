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
