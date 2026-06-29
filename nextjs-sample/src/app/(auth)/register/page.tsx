import React from 'react'

const RegisterPage = () => {
    return (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Tạo tài khoản</h1>
            {/* Next.js <Link>: client-side navigation, không reload trang */}
            <p className="text-sm text-gray-500 mb-6">
                Đã có tài khoản?
                <a href="login.html" className="text-blue-600 hover:underline font-medium">Đăng nhập</a>
            </p>
            <form id="registerForm" className="space-y-4" noValidate>
                {/* Field Họ tên — z.string().min(2) */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                    <input id="name" type="text" placeholder="Nguyễn Văn A" className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition" />
                    <p id="nameError" className="mt-1 text-xs text-red-500 hidden" />
                </div>
                {/* Field Email — z.string().email() */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition" />
                    <p id="emailError" className="mt-1 text-xs text-red-500 hidden" />
                </div>
                {/* Field Mật khẩu — z.string().min(6) */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
                    <input id="password" type="password" placeholder="••••••••" className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition" />
                    <p id="passwordError" className="mt-1 text-xs text-red-500 hidden" />
                </div>
                {/*
  Field Xác nhận mật khẩu — lỗi đến từ z.refine() ở schema:
  .refine(d => d.password === d.confirmPassword, { path: ["confirmPassword"] })
*/}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Xác nhận mật khẩu</label>
                    <input id="confirmPassword" type="password" placeholder="••••••••" className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition" />
                    <p id="confirmError" className="mt-1 text-xs text-red-500 hidden" />
                </div>
                {/* isSubmitting: disabled + text thay đổi khi đang chờ API */}
                <button type="submit" id="submitBtn" className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 active:scale-[.98] transition">
                    Đăng ký
                </button>
            </form>
        </div>

    )
}

export default RegisterPage
