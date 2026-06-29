// OOP: lập trình hướng đối tượng
// 1. thuộc tính (property, attribute): đặc điểm của đối tượng
// code - tập hợp các biến chứa dữ liệu đối tượng
// 2. phương thức (method): hành vi của đối tượng
// code - tập hợp các function thao tác với dữ liệu đối tượng

// typescript: không mạnh về OOP như C#, Java, C++,... nhưng vẫn hỗ trợ OOP
class User {
    // thuộc tính
    private taiKhoan: string;
    private hoTen: string;
    private email: string;
    private soDT: string;
    private matKhau: string | null;
    private maLoaiNguoiDung: string;

    // phương thức tạo đối tượng (constructor)
    constructor(taiKhoan: string, hoTen: string, email: string, soDT: string, matKhau: string | null, maLoaiNguoiDung: string) {
        this.taiKhoan = taiKhoan;
        this.hoTen = hoTen;
        this.email = email;
        this.soDT = soDT;
        this.matKhau = matKhau;
        this.maLoaiNguoiDung = maLoaiNguoiDung;
    }

    // hiển thông tin người dùng
    hienThiThongTin(): void {
        console.log(`
        Tài khoản: ${this.taiKhoan}
        Họ tên: ${this.hoTen}
        Email: ${this.email}    
        `)
    }
}

// tạo đối tượng
const user2 = new User("phuong", "Duy Phuong", "phuong@gmail.com", "0123123", "123123", "KhachHang")
user2.hienThiThongTin()

// 4 tính chất OOP: tính đóng gói, tính kế thừa, tính đa hình, tính trừu tượng
// dễ -> khó: tính kế thừa -> tính đóng gói -> tính trừu tượng -> tính đa hình
// quan hệ cha con (parent - child)

// 1. tính kế thừa: một đối tượng có thể kế thừa các thuộc tính (biến) và phương thức (function) từ một đối tượng khác
// Tránh lặp code, tái sử dụng code
// Sale, Admin, Manager => kế thừa từ User
class Sale extends User {
    private doanhSo: number;
    private hoaHong: number;

    // muốn sửa hay lấy dữ liệu từ thuộc tính thì phải tạo phương thức getter và setter
    getDoanhSo(): number {
        return this.doanhSo
    }
    setDoanhSo(doanhSo: number): void {
        this.doanhSo = doanhSo
    }

    constructor(taiKhoan: string, hoTen: string, email: string, soDT: string, matKhau: string | null, maLoaiNguoiDung: string, doanhSo: number, hoaHong: number) {
        // super: kế thừa các thuộc tính và phương thức từ lớp cha (User)
        super(taiKhoan, hoTen, email, soDT, matKhau, maLoaiNguoiDung)
        this.doanhSo = doanhSo;
        this.hoaHong = hoaHong;
    }

    // override: ghi đè phương thức của lớp cha
    hienThiThongTin(): void {
        super.hienThiThongTin()
        console.log(`
        Doanh số: ${this.doanhSo}
        Hoa hồng: ${this.hoaHong}
        `)
    }

}
const sale1 = new Sale("sale1", "Dat", "dat@gmail.com", "0123456789", "123456", "Sale", 1000000, 0.1)
sale1.hienThiThongTin()

// đóng gói: private, protected, public
// private: chỉ có thể truy cập trong class
// protected: có thể truy cập trong class và các class kế thừa
// public: có thể truy cập ở bất cứ đâu


// design pattern: mẫu thiết kế, cách tổ chức code để giải quyết vấn đề