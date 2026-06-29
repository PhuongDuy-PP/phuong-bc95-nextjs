// define interface Room

export interface Room {
    id: number;
    name: string;
    type: "standard" | "deluxe" | "suite";
    price: number;
    capacity: number;
    area: number;
    available: boolean;
    thumbnail: string;
    images: string[];
    description: string;
    amenities: string[];
    rating: number;
    reviews: number;
}

export const rooms: Room[] = [
  {
    id: 1,
    name: "Phòng Standard 101",
    type: "standard",
    price: 500000,
    capacity: 2,
    area: 25,
    available: true,
    thumbnail: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=800&q=80",
    ],
    description:
      "Phòng Standard thoáng mát với view nhìn ra vườn cây xanh mát. Phù hợp cho 1–2 người, đầy đủ tiện nghi cơ bản.",
    amenities: ["WiFi miễn phí", "Điều hòa", "TV 32 inch", "Tủ lạnh mini", "Phòng tắm riêng"],
    rating: 4.2,
    reviews: 38,
  },
  {
    id: 2,
    name: "Phòng Deluxe 201",
    type: "deluxe",
    price: 900000,
    capacity: 2,
    area: 35,
    available: true,
    thumbnail: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    ],
    description:
      "Phòng Deluxe rộng rãi với giường King Size, view nhìn ra hồ bơi. Thiết kế sang trọng, phù hợp cho cặp đôi.",
    amenities: ["WiFi miễn phí", "Điều hòa", "TV 43 inch", "Minibar", "Bồn tắm", "Ban công"],
    rating: 4.6,
    reviews: 72,
  },
  {
    id: 3,
    name: "Suite Hướng Biển 301",
    type: "suite",
    price: 2000000,
    capacity: 4,
    area: 65,
    available: false,
    thumbnail: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
    ],
    description:
      "Suite cao cấp tầng 3 với toàn cảnh hướng biển. Có phòng khách riêng, bếp nhỏ và 2 phòng ngủ.",
    amenities: [
      "WiFi miễn phí",
      "Điều hòa",
      "TV 55 inch",
      "Bếp mini",
      "Bồn tắm Jacuzzi",
      "Dịch vụ phòng 24/7",
      "Butler riêng",
    ],
    rating: 4.9,
    reviews: 21,
  },
  {
    id: 4,
    name: "Phòng Standard 102",
    type: "standard",
    price: 480000,
    capacity: 2,
    area: 24,
    available: true,
    thumbnail: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    ],
    description:
      "Phòng Standard tiêu chuẩn, sạch sẽ, yên tĩnh. Phù hợp cho khách công tác.",
    amenities: ["WiFi miễn phí", "Điều hòa", "TV 32 inch", "Tủ lạnh mini"],
    rating: 4.0,
    reviews: 45,
  },
  {
    id: 5,
    name: "Phòng Deluxe 202",
    type: "deluxe",
    price: 950000,
    capacity: 3,
    area: 38,
    available: true,
    thumbnail: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    ],
    description:
      "Phòng Deluxe với 2 giường đôi, thích hợp cho gia đình nhỏ hoặc nhóm bạn.",
    amenities: ["WiFi miễn phí", "Điều hòa", "TV 43 inch", "Minibar", "Ban công nhỏ"],
    rating: 4.5,
    reviews: 59,
  },
  {
    id: 6,
    name: "Suite Gia Đình 302",
    type: "suite",
    price: 2500000,
    capacity: 6,
    area: 80,
    available: true,
    thumbnail: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    ],
    description:
      "Suite gia đình rộng nhất, có 3 phòng ngủ, phòng khách và bếp đầy đủ thiết bị.",
    amenities: [
      "WiFi miễn phí",
      "Điều hòa",
      "TV 65 inch",
      "Bếp đầy đủ",
      "2 phòng tắm",
      "Máy giặt",
      "Dịch vụ phòng 24/7",
    ],
    rating: 4.8,
    reviews: 14,
  },
];

// define function getRoomById(id: number): Room | undefined {
export const getRoomById = (id: number): Room | undefined => {
    return rooms.find((room) => room.id === id);
}