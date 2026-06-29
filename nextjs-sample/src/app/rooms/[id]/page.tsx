import { getRoomById } from '@/lib/room';
import { notFound } from 'next/navigation';
import React from 'react'

const RoomDetailPage = async ({params}: {
    // params: trong nextjs version 15, params này là Promise
    // Promise => async/await
    params: Promise<{ id: string }>
}) => {

    const { id } = await params;
    const room = getRoomById(Number(id))

    if(!room) notFound()

    return (
        <main className="max-w-5xl mx-auto px-4 py-8">
            {/*
Grid 2 cột trên desktop, 1 cột trên mobile.
lg:grid-cols-3: chia 3 phần → cột trái chiếm 2, cột phải chiếm 1.
    */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* ══ CỘT TRÁI: ảnh + thông tin (lg:col-span-2) ══ */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Ảnh chính
       Next.js <Image priority>: tải sớm vì đây là LCP image
       → cải thiện điểm Core Web Vitals / Lighthouse.
       fill + object-cover: ảnh phủ kín container giữ tỷ lệ. */}
                    <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-gray-200">
                        <img src={room?.images[0]} alt={room?.name} className="w-full h-full object-cover" />
                    </div>
                    {/* Ảnh phụ — room.images.slice(1).map(...) trong Next.js */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative h-40 rounded-xl overflow-hidden bg-gray-200">
                            <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80" alt="Phòng Deluxe 201 ảnh 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="relative h-40 rounded-xl overflow-hidden bg-gray-200">
                            <img src="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=800&q=80" alt="Phòng Deluxe 201 ảnh 3" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    {/* Tên phòng + badge loại + trạng thái */}
                    <div className="flex items-start gap-3">
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold text-gray-900">Phòng Deluxe 201</h1>
                            <div className="flex items-center gap-2 mt-1">
                                {/* roomTypeBadge["deluxe"] = "bg-blue-100 text-blue-700" */}
                                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Deluxe</span>
                                <span className="text-sm text-gray-500">
                                    ★ <strong>4.6</strong> (72 đánh giá)
                                </span>
                            </div>
                        </div>
                        {/* room.available = true → xanh lá */}
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-100 text-green-700">
                            Còn phòng
                        </span>
                    </div>
                    {/* Thông số: map qua array [{label, value}] trong Next.js */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-50 rounded-xl p-3 text-center">
                            <p className="text-xs text-gray-500">Diện tích</p>
                            <p className="font-semibold text-gray-800 mt-0.5">35 m²</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3 text-center">
                            <p className="text-xs text-gray-500">Sức chứa</p>
                            <p className="font-semibold text-gray-800 mt-0.5">2 người</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3 text-center">
                            <p className="text-xs text-gray-500">Loại phòng</p>
                            <p className="font-semibold text-gray-800 mt-0.5">Deluxe</p>
                        </div>
                    </div>
                    {/* Mô tả */}
                    <div>
                        <h2 className="font-semibold text-gray-900 mb-2">Mô tả</h2>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Phòng Deluxe rộng rãi với giường King Size, view nhìn ra hồ bơi.
                            Thiết kế sang trọng, phù hợp cho cặp đôi. Không gian thoáng đãng
                            với ánh sáng tự nhiên, nội thất cao cấp và đầy đủ tiện nghi hiện đại.
                        </p>
                    </div>
                    {/* Tiện nghi — room.amenities.map() */}
                    <div>
                        <h2 className="font-semibold text-gray-900 mb-3">Tiện nghi</h2>
                        <ul className="grid grid-cols-2 gap-2">
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="text-green-500">✓</span> WiFi miễn phí
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="text-green-500">✓</span> Điều hòa
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="text-green-500">✓</span> TV 43 inch
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="text-green-500">✓</span> Minibar
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="text-green-500">✓</span> Bồn tắm
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="text-green-500">✓</span> Ban công
                            </li>
                        </ul>
                    </div>
                </div>{/* end cột trái */}
                {/* ══ CỘT PHẢI: Booking card ══ */}
                <div className="lg:col-span-1">
                    {/*
    sticky top-6: card dính phía trên khi user scroll xuống đọc mô tả.
    Chỉ hoạt động khi chiều cao cột trái > chiều cao màn hình.
    Trong Next.js đây vẫn là Server Component — không cần JS để sticky.
  */}
                    <div className="sticky top-6 bg-white rounded-2xl shadow-md border border-gray-100 p-6 space-y-4">
                        {/* Giá / đêm */}
                        <div>
                            <span className="text-2xl font-bold text-blue-600">900.000đ</span>
                            <span className="text-sm text-gray-400"> / đêm</span>
                        </div>
                        {/* Form chọn ngày — input[type=date] native HTML */}
                        <div className="space-y-2">
                            <div>
                                <label className="block text-xs font-medium text-gray-600 mb-1">Ngày nhận phòng</label>
                                <input type="date" id="checkin" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-600 mb-1">Ngày trả phòng</label>
                                <input type="date" id="checkout" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition" />
                            </div>
                        </div>
                        {/* Tổng tiền tính động */}
                        <div id="totalPrice" className="hidden bg-blue-50 rounded-lg px-3 py-2 text-sm text-blue-700 font-medium" />
                        {/*
      disabled khi room.available = false.
      Trong Next.js Server Component không cần JS để disable —
      giá trị được tính trên server và render sẵn vào HTML.
    */}
                        <button id="bookBtn" className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition">
                            Đặt phòng ngay
                        </button>
                        <p className="text-xs text-gray-400 text-center">Miễn phí hủy trước 24 giờ</p>
                    </div>
                </div>{/* end cột phải */}
            </div>{/* end grid */}
            {/* Điều hướng quay lại — Next.js <Link href="/rooms"> */}
            <div className="mt-10">
                <a href="rooms.html" className="text-sm text-blue-600 hover:underline">
                    ← Quay lại danh sách phòng
                </a>
            </div>
        </main>
    )
}

export default RoomDetailPage
