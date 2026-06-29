// generic function: function có thể hoạt động với nhiều kiểu dữ liệu khác nhau
// <T> là type parameter

// VD1: lấy ra phần tử đầu tiên của mảng
const layPtuDauTien = <T>(arr: T[]): T | undefined => {
    return arr[0]
}

// T: list number
const soDauTien = layPtuDauTien([1, 2, 3])
console.log(soDauTien)

// T: list string
const chuoiDauTien = layPtuDauTien(["a", "b", "c"])
console.log(chuoiDauTien)

// T: list object
// const nguoiDauTien = layPtuDauTien([
//     { id: 1, ten: "Phuong" },
//     { id: 2, ten: "Nguyen" }
// ])
// console.log(nguoiDauTien)

// define generic cho response API
// statusCode, message, data (user, film, product,...)

interface NguoiDung1 {
    taiKhoan: string;
    hoTen: string;
    email: string;
    soDT: string;
    matKhau: string | null;
    maLoaiNguoiDung: string;
}

interface ApiResponse<T> {
    statusCode: number;
    message: string;
    content: T[];
}

// {
//   "statusCode": 200,
//   "message": "Xử lý thành công!",
//   "content": [
//     {
//       "taiKhoan": "12312214123123",
//       "hoTen": "123",
//       "email": "mafi12311123243a@gmail.com",
//       "soDT": "0366465549",
//       "matKhau": null,
//       "maLoaiNguoiDung": "KhachHang"
//     }
//   ]
// }

const userListRespnse: ApiResponse<NguoiDung1> = {
    statusCode: 200,
    message: "Xử lý thành công!",
    content: [
        {
            taiKhoan: "12312214123123",
            hoTen: "123",
            email: "mafi12311123243a@gmail.com",
            soDT: "0366465549",
            matKhau: "213123",
            maLoaiNguoiDung: "KhachHang"
        }
    ]
}
console.log(userListRespnse)

// enum và literal type
// enum: định nghĩa 1 tập hợp các giá trị của 1 kiểu dữ liệu
enum VaiTro {
    Admin = "admin",
    User = "user",
    Guest = "guest"
}

const vaitro: VaiTro = VaiTro.User

console.log(VaiTro.Admin)

enum MaHTTP {
    OK = 200,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
    BAD_REQUEST = 400,
    CREATED = 201
}

enum PhuongThucThanhToan {
    CASH = "tien mat",
    CREDIT_CARD = "the tin dung",
    PAYPAL = "paypal",
    MOMO = "momo"
}

const thanhToan: PhuongThucThanhToan = PhuongThucThanhToan.MOMO;

enum TrangThaiDonHang {
    DANG_XU_LY = "dang xu ly",
    DANG_GIAO_HANG = "dang giao hang",
    DA_GIAO_HANG = "da giao hang",
    DA_HUY = "da huy"
}

// literal type: tương tự như enum
type TrangThaiDonHang1 = "dang xu ly" | "dang giao hang" | "da giao hang" | "da huy";
const trangThai: TrangThaiDonHang1 = "dang giao hang"
