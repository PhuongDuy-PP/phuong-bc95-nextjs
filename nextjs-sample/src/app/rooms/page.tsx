
// LƯU Ý server side rendering không dùng được các hook của react
// useState, useEffect, useContext, useReducer, useRef, useLayoutEffect
// page list room thì dùng server side
// import rooms từ lib/room.ts để render ra danh sách phòng
import { rooms } from "@/lib/room"
import Link from "next/link"

const RoomPage = () => {
    return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            {/*
Responsive grid Tailwind:
- grid-cols-1: mobile mặc định (1 cột)
- sm:grid-cols-2: ≥640px → 2 cột
- lg:grid-cols-3: ≥1024px → 3 cột
rooms.map(room => <RoomCard key={room.id} room={room} />)
    */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="roomGrid">
                {/* ── RoomCard 1: Standard ── */}
                {/*
  RoomCard: sub-component trong Next.js, nhận prop `room`.
  Link bao ngoài toàn card → click vào đâu cũng navigate.
  href="/rooms/[id]" → dynamic route của Next.js.
*/}
                {
                    rooms.map((room) => (
                        <Link
                            key={room.id}
                            href={`/rooms/${room.id}`}
                            className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                        >
                            <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                                <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80" alt="Phòng Standard 101" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                {/* Badge trạng thái: overlay góc trên phải */}
                                <span className="absolute top-3 right-3 text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                                    Còn phòng
                                </span>
                            </div>
                            <div className="p-4 flex flex-col gap-2 flex-1">
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="font-semibold text-gray-900 text-sm leading-snug">Phòng Standard 101</h3>
                                    {/* roomTypeBadge[room.type]: lookup object → class Tailwind tương ứng */}
                                    <span className="text-xs px-2 py-0.5 rounded-full shrink-0 bg-gray-100 text-gray-700">Standard</span>
                                </div>
                                <div className="flex gap-3 text-xs text-gray-500">
                                    <span>📐 25 m²</span>
                                    <span>👥 2 người</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <span className="text-amber-400">★</span>
                                    <span className="font-medium text-gray-700">4.2</span>
                                    <span>(38 đánh giá)</span>
                                </div>
                                <div className="mt-auto pt-2 border-t border-gray-100 flex items-center justify-between">
                                    <div>
                                        <span className="text-lg font-bold text-blue-600">500.000đ</span>
                                        <span className="text-xs text-gray-400"> / đêm</span>
                                    </div>
                                    <span className="text-xs font-medium text-blue-600 group-hover:underline">Xem chi tiết →</span>
                                </div>
                            </div>
                        </Link>
                    ))
                }


            </div>{/* end grid */}
        </main>
    )
}

export default RoomPage
