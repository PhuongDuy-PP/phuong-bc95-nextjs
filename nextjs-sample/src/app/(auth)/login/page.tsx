"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React, { use } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
// react-hook-form: quản lý form, validate, submit, error
// useForm: đăng ký các field, handleSubmit, lấy lỗi,...
// ưu điểm: không re-render lại toàn bộ component khi state thay đổi, chỉ re-render field bị thay đổi

// @hookform/resolvers: cầu nối giữa react-hook-form và schema validation (zod, yup,...)

// zod: schema validation, validate dữ liệu đầu vào (form, API,...)
// làm tốt cho typescript, tự động infer type từ schema

// schema validation
const schema = z.object({
    email: z.string().email("Email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"] // đặt lỗi cho field confirmPassword
})

// tạp type LoginFormData từ schema
type LoginFormData = z.infer<typeof schema>


const LoginPage = () => {

    // tạo hook useForm với schema validation
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm<LoginFormData>({resolver: zodResolver(schema)})

    // define onSubmit function
    const onSubmit = async (data: LoginFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 2000)) // giả lập chờ API 2s
        // TODO: call API login
        console.log("Form data:", data)
    }    

    return (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Đăng nhập</h1>
            {/* Link điều hướng → register (Next.js <Link> = client-side navigation) */}
            <p className="text-sm text-gray-500 mb-6">
                Chưa có tài khoản?
                <a href="register.html" className="text-blue-600 hover:underline font-medium">Đăng ký ngay</a>
            </p>
            {/*
Form được quản lý bởi react-hook-form.
handleSubmit(onSubmit): chỉ gọi onSubmit khi validate pass.
    */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Field Email — {...register("email")} trong React */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition" />
                    {/* errors.email.message: hiện khi zod validate fail */}
                    {
                        errors.email && (<p className="mt-1 text-xs text-red-500">{errors.email.message}</p>)
                    }
                </div>
                {/* Field Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
                    <input
                        {...register("password")}
                        type="password"
                        placeholder="••••••••"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition" />
                        {errors.password && (
                            <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
                        )}                     
                </div>
                {/* confirm password */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Xác nhận mật khẩu</label>
                    <input
                        {...register("confirmPassword")}
                        type="password"
                        placeholder="••••••••"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition" />
                        {errors.confirmPassword && (
                            <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>
                        )}                     
                </div>
                <div className="flex justify-end">
                    <a href="#" className="text-xs text-blue-600 hover:underline">Quên mật khẩu?</a>
                </div>
                {/*
  disabled khi isSubmitting (react-hook-form formState).
  Tránh submit nhiều lần trong khi chờ API.
*/}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 active:scale-[.98] transition">
                    {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
                </button>
            </form>
        </div>

    )
}

export default LoginPage
