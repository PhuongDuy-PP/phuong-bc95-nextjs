import Image from "next/image";
import Link from "next/link";

// mặc định phải truyền đúng đường dẫn tới page.tsx của router
// VD: auth/login/page.tsx => "/auth/login"
// muốn bỏ /auth => dùng ngoặc tròn bọc tên auth (auth) => "/login"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">
        <h1>BC95 Hotel</h1>
        <div className="flex justify-center flex-col">
          {/* muốn chuyển các page với nhau => Link của nextjs */}
          <Link href="/login" className=" px-5 py-3 rounded-2xl bg-amber-300 text-white">
            Đăng nhập
          </Link>
          <Link href="/register" className=" px-5 py-3 rounded-2xl bg-blue-300 text-white">
            Đăng ký
          </Link>
          <Link href="/rooms" className=" px-5 py-3 rounded-2xl bg-green-300 text-white">
            Danh sách phòng
          </Link>

        </div>
      </div>

    </div>
  );
}
