// Danh sách trang bị
    // Bạn có thể thêm hoặc sửa đổi các trang bị trong danh sách này
        const Equipments = [
        //A
        { 
            name: "Áo Choàng Băng Giá",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/ao-choang-bang-gia.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1970"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: "+10% Giảm hồi chiêu +200 Giáp +800 Máu Sức mạnh nguyên tố: Sau khi tung chiêu, trong 5 giây sẽ khiến đòn đánh kế gây thêm 100 (+30% công vật lý) sát thương vật lý lan trong phạm vi 3m quanh mục tiêu kèm 30% làm chậm địch (tướng đánh xa làm chậm chỉ được 20%) trong 0.5 giây; 0.65 giây hồi – Nội tại duy nhất"
        },
        { 
            name: "Áo Choàng Thần Ra",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/ao-choang-than-ra.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1950"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: "+1000 máu +225 Giáp +60 Hồi máu Hỏa diệm: Gây 2% máu tối đa thành sát thương phép mỗi giây lên những kẻ địch cạnh bên (tăng 50% sát thương lên quái và lính) – Nội tại duy nhất"
        },
        //B
        { 
            name: "Băng Nhẫn Skadi",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/bang-nhan-skadi.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2150"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: "+140 Công phép + 600 Máu +10% Giảm Hồi chiêu Giáp băng: Nhận (+50% công phép) giáp, giáp phép, nhưng không vượt quá 230 điểm – Nội tại Duy nhất"
        },
        { 
            name: "Bùa Sức Mạnh",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/bua-suc-manh.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["140"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: "+30 hồi máu"
        },
        //C
        { 
            name: "Cầu Chiêm Tinh",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/cau-chiem-tinh.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["800"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: "+ 80 Công phép Vang vọng: Tung chiêu bùng nổ trong phạm vi gây 180 sát thương phép, 5 giây hồi chiêu – Nội tại duy nhất"
        },
        { 
            name: "Chùy Băng Sương",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/Chuy-bang-suong.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2060"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Chùy Cổ",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/chuy-co.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["740"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Chùy Máu",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/chuy-mau.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["410"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Chùy Xích",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/chuy-xich.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["450"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Cung Bão Tố",  // Tên trang bị
            role: ["Đi Rừng"], // Vai trò của trang bị
            image: "Media/cung-bao-to.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1750"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Cung Gió Lốc",  // Tên trang bị
            role: ["Đi Rừng"], // Vai trò của trang bị
            image: "Media/cung-gio-loc.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["750"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Cung Tà Ma",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/cung-ta-ma.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2300"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        //D
        { 
            name: "Đại Địa Hồi Huyết",  // Tên trang bị
            role: ["Phụ Trợ"], // Vai trò của trang bị
            image: "Media/dai-dia-hoi-huyet.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1200"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Đại Địa Ma Nhãn",  // Tên trang bị
            role: ["Phụ Trợ"], // Vai trò của trang bị
            image: "Media/dai-dia-ma-nhan.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1200"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Đại Địa Mở Trói",  // Tên trang bị
            role: ["Phụ Trợ"], // Vai trò của trang bị
            image: "Media/dai-dia-mo-troi.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1200"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Đại Địa Thần Khiên",  // Tên trang bị
            role: ["Phụ Trợ"], // Vai trò của trang bị
            image: "Media/dai-dia-than-khien.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1200"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Đại Địa Thần Tốc",  // Tên trang bị
            role: ["Phụ Trợ"], // Vai trò của trang bị
            image: "Media/dai-dia-than-toc.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1200"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Đai Kháng Phép",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/dai-khang-phep.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1000"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Dao găm",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/dao-gam.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["290"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Đao Truy Hồn",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/dao-truy-hon.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1800"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Đao Truy Kích",  // Tên trang bị
            role: ["Đi Rừng"], // Vai trò của trang bị
            image: "Media/dao-truy-kich.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["750"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Dây Chuyền Hồng Ngọc",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/day-chuyen-hong-ngoc.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["540"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Dây Chuyền Ma Thuật",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/day-chuyen-ma-thuat.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["120"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Dây Truyền Lục Bảo",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/day-truyen-luc-bao.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1980"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Diệt Thần Cung",  // Tên trang bị
            role: ["Cong"], // Vai trò của trang bị
            image: "Media/diet-than-cung.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2980"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        //G
        { 
            name: "Găng Bạch Kim",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/gang-bach-kim.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["660"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Găng Giác Đấu",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/gang-giap-dau.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["220"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Găng Tay",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/gang-tay.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["420"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Giáp Chân",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/giap-chan.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["900"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Giáp Cường Nộ",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/giap-cuong-no.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1900"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Giáp Gaia",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/giap-gaia.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1960"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Giáp Hiệp Sĩ",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/giap-hiep-si.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["730"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Giáp Hộ Mệnh",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/giap-ho-menh.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2400"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Giáp Nhẹ",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/giap-nhe.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["220"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Giáp Thống Khổ",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/giap-thong-kho.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1940"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Giày Du Mục",  // Tên trang bị
            role: ["Tốc Chạy"], // Vai trò của trang bị
            image: "Media/giay-du-muc.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["660"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Giày Hermes",  // Tên trang bị
            role: ["Tốc Chạy"], // Vai trò của trang bị
            image: "Media/giay-hermes.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["580"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Giày Hộ Vệ",  // Tên trang bị
            role: ["Tốc Chạy"], // Vai trò của trang bị
            image: "Media/giay-ho-ve.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["700"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Giày Kiên Cường",  // Tên trang bị
            role: ["Tốc Chạy"], // Vai trò của trang bị
            image: "Media/giay-kien-cuong.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["690"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Giày Phù Thủy",  // Tên trang bị
            role: ["Tốc Chạy"], // Vai trò của trang bị
            image: "Media/giay-phu-thuy.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["710"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Giày Thép",  // Tên trang bị
            role: ["Tốc Chạy"], // Vai trò của trang bị
            image: "Media/giay-thep.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["250"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Giày Thuật Sĩ",  // Tên trang bị
            role: ["Tốc Chạy"], // Vai trò của trang bị
            image: "Media/giay-thuat-si.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["710"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Gươm Hiến Tế",  // Tên trang bị
            role: ["Đi Rừng"], // Vai trò của trang bị
            image: "Media/guom-hien-te.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["750"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Gươm Hiền Triết",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/guom-hien-triet.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2100"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Gươm Loki",  // Tên trang bị
            role: ["Đi Rừng"], // Vai trò của trang bị
            image: "Media/guom-loki.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1750"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Gươm Nguyên Tố",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/guom-nguyen-to.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["920"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Gươm Sấm Sét",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/guom-sam-set.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["18400"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Gươm Tận Thế",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/guom-tan-the.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2190"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Gươm Uriel",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/guom-uriel.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2020"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        //H
        { 
            name: "Hercule Thịnh Nộ",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/hercule-thinh-no.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2080"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Hỏa Hệ Bảo Thạch",  // Tên trang bị
            role: ["Phụ Trợ"], // Vai trò của trang bị
            image: "Media/hoa-he-bao-thach.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["900"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Huân Chương Troy",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/huan-chuong-troy.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2320"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Huyết Cung",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/huyet-cung.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1100"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Huyết Đao",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/Huyet-dao.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["830"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Huyết Trượng",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/huyet-truong.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1190"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        //K
        { 
            name: "Khiên Huyền Thoại",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/khien-huyen-thoai.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2180"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Khiên thất Truyền",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/khien-that-truyen.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2100"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Kiếm Dài",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/kiem-dai.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["910"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Kiếm Fafnir",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/kiem-fafnir.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2040"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Kiếm Muramasa",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/kiem-muramasa.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2040"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Kiếm Ngắn",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/kiem-ngan.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["250"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Kiếm Truy Hồn",  // Tên trang bị
            role: ["Đi Rừng"], // Vai trò của trang bị
            image: "Media/kiem-truy-hon.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1750"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        //L
        { 
            name: "Liềm Đoạt Mệnh",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/liem-doat-menh.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2000"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Liệt Hỏa Hồi Huyết",  // Tên trang bị
            role: ["Phụ Trợ"], // Vai trò của trang bị
            image: "Media/liet-hoa-hoi-huyet.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1200"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Liệt Hỏa Ma Nhãn",  // Tên trang bị
            role: ["Phụ Trợ"], // Vai trò của trang bị
            image: "Media/liet-hoa-ma-nhan.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1200"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Liệt Hỏa Mở Trói",  // Tên trang bị
            role: ["Phụ Trợ"], // Vai trò của trang bị
            image: "Media/liet-hoa-mo-troi.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1200"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Liệt Hỏa Thần Khiên",  // Tên trang bị
            role: ["Phụ Trợ"], // Vai trò của trang bị
            image: "Media/liet-hoa-than-khien.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1200"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Liệt Hỏa Thần Tốc",  // Tên trang bị
            role: ["Phụ Trợ"], // Vai trò của trang bị
            image: "Media/liet-hoa-than-toc.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1200"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        //M
        { 
            name: "Ma Pháp Trường Bào",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/Ma-phap-truong-bao.jpg", // Đường dẫn đến hình ảnh của trang bị
            price: ["2160"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Mặt Nạ Berith",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/mat-na-berith.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2120"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Mặt Nạ Ma Quái",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/mat-na-ma-quai.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["960"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        //N
        { 
            name: "Nanh Fenrir",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/nanh-fenrir.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2950"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Ngọc Đại Pháp Sư",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/ngoc-dai-phap-su.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2010"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Nguyên Tố Bảo Thạch",  // Tên trang bị
            role: ["Phụ Trợ"], // Vai trò của trang bị
            image: "Media/nguyen-to-bao-thach.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["300"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Nham Thuẫn",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/nham-thuan.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1980"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Nhẫn Hồng Ngọc",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/nhan-hong-ngoc.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["300"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Nhẫn Lipis",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/nhan-lipis.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["300"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Nhẫn Ma Pháp",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/nhan-ma-phap.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["300"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        //P
        { 
            name: "Phi Tiêu",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/phi-tieu.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["750"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Phù Chú Trường Sinh",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/phu-chu-truong-sinh.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1980"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Phúc Hợp Kiếm",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/phuc-hop-kiem.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2150"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Phượng Hoàng Lệ",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/phuong-hoang-le.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["800"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        //Q
        { 
            name: "Quả Cầu Băng Sương",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/qua-cau-bang-suong.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2000"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Quỷ Kiếm",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/quy-kiem.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1800"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Quyền Trượng Rhea",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/quyen-truong-rhea.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2200"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        //R
        { 
            name: "Rìu Gnoll",  // Tên trang bị
            role: ["Đi Rừng"], // Vai trò của trang bị
            image: "Media/riu-gnoll.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["750"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Rìu Leviathan",  // Tên trang bị
            role: ["Đi Rừng"], // Vai trò của trang bị
            image: "Media/riu-leviathan.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1750"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Rựa Thợ Săn",  // Tên trang bị
            role: ["Đi Rừng"], // Vai trò của trang bị
            image: "Media/rua-tho-san.jpg", // Đường dẫn đến hình ảnh của trang bị
            price: ["250"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        //S
        { 
            name: "Sách Cổ",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/sach-co.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["540"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Sách Phép",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/sach-phep.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["300"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Sách Thánh",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/sach-thanh.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2610"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Sách Truy Hồn",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/sach-truy-hon.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2110"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Sớ Ma Thuật",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/so-ma-thuat.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["820"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Song Đao Bão Táp",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/song-dao-bao-tap.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1920"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Song Đao",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/song-dao.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["780"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        //T
        { 
            name: "Thánh Kiếm",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/thanh-kiem.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2120"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Thập Tự Kiếm",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/thap-tu-kiem.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1970"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Thệ Ước Carano",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/The-uoc-Carano.jpg", // Đường dẫn đến hình ảnh của trang bị
            price: ["2050"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Thổ Hệ Bảo Thạch",  // Tên trang bị
            role: ["Phụ Trợ"], // Vai trò của trang bị
            image: "Media/tho-he-bao-thach.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["900"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Thương Đấu Sĩ",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/thuong-dau-si.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["830"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Thương Khung Kiếm",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/thuong-khung-kiem.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2120"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Thương Longinus",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/thuong-longinus.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2030"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Thương Xuyên Phá",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/thuong-xuyen-pha.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2020"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Tim Incubus",  // Tên trang bị
            role: ["Thủ"], // Vai trò của trang bị
            image: "Media/tim-incubus.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["720"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Trượng Băng",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/truong-bang.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2020"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Trượng Bùng Nổ",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/truong-bung-no.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2000"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Trượng Hỗn Mang",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/truong-hon-mang.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2050"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        //V
        { 
            name: "Vòng Đức Hạnh",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/vong-duc-hanh.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["720"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Vương Miện Hecate",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/vuong-mieng-hecate.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2300"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Vuốt Hung Tàn",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/vuot-hung-tan.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1960"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        //X
        { 
            name: "Xạ Nhật Cung",  // Tên trang bị
            role: ["Công Vật Lý"], // Vai trò của trang bị
            image: "Media/xa-nhat-cung.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["2000"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        { 
            name: "Xuyên Tâm Lệnh",  // Tên trang bị
            role: ["Công Phép"], // Vai trò của trang bị
            image: "Media/xuyen-tam-lenh.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1980"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: ""
        },
        

        ]
    // Lấy phần tử chứa danh sách trang bị
    // Bạn có thể thay đổi ID này nếu cần
        const equipGrid = document.getElementById("equipGrid");

        function renderEquipment(filteredList = Equipments) {
            equipGrid.innerHTML = "";
            filteredList.forEach(equip => {
                const card = document.createElement("div");
                card.className = "equip-card";
                card.innerHTML = `
                    <img class="equip-img" src="${equip.image}" alt="${equip.name}">
                    <div class="equip-info">
                        <p>${equip.name}</p>
                    </div>
                `;
                card.onclick = () => openPopup(equip);
                equipGrid.appendChild(card);
            });
        }

        // Hàm lọc trang bị theo vai trò
        // Bạn có thể thay đổi các vai trò theo ý muốn
        function filterByRole(role) {
            if (role === "Tất cả") renderEquipment();
            else renderEquipment(Equipments.filter(h => Array.isArray(h.role) && h.role.includes(role)));
        }

        // Hàm mở popup khi click vào trang bị
        // Hiển thị thông tin trang bị, giá vàng và trang bị sơ cấp
        function openPopup(equip) {
            // Cập nhật thông tin trang bị trong popup
            document.getElementById("equipName").textContent = equip.name;
            document.getElementById("equipRole").textContent = equip.role.join(", ");

            // Cập nhật danh sách giá trang bị

            document.getElementById("equipPrice").textContent = equip.price || "Chưa có ghi chú.";

            // Cập nhật trang bị sơ cấp
            const equipPrimaryImages = document.getElementById("equipPrimaryImages");
            equipPrimaryImages.innerHTML = "";
            equip.primary.forEach(name => {
                const matched = Equipments.find(h => h.name === name);
                if (matched && matched.image) {
                    const img = document.createElement("img");
                    img.src = matched.image;
                    img.alt = name;
                    img.style.width = "50px";
                    img.style.height = "50px";
                    img.style.borderRadius = "8px";
                    equipPrimaryImages.appendChild(img);
                }
            });
            // Cập nhật danh sách tướng counter
            //counterList.innerHTML = "";
            //hero.counter.forEach(c => {
            //    const li = document.createElement("li");
            //    li.textContent = c;
            //    counterList.appendChild(li);
            //});

//======================
            
            document.getElementById("equipNote").textContent = equip.note || "Chưa có ghi chú.";
            // Hiển thị popup
            document.getElementById("popup").style.display = "flex";

            // Đóng khi click ra ngoài nội dung popup
            document.getElementById("popup").addEventListener("click", function(e) {
                if (e.target.id === "popup") {
                    closePopup();
                }
            });

        }

        // Hàm đóng popup
        // Ẩn popup khi người dùng click vào nút đóng
        function closePopup() {
            document.getElementById("popup").style.display = "none";
        }
        // Hiển thị danh sách tướng ban đầu
        // Gọi hàm renderHeroes để hiển thị tất cả tướng khi trang được tải
        renderEquipment();