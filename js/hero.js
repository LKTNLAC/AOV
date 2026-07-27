// Danh sách tướng mẫu
    // Bạn có thể thêm hoặc sửa đổi các tướng trong danh sách này
        const heroes = [
        //A
        { 
            name: "Airi",  // Tên tướng
            role: ["Top","Jungle"], // Vai trò của tướng
            image: "Media/Airi.jpg", // Đường dẫn đến hình ảnh của tướng
            counter: ["Richter","Omen","Murad", "Ryoma", "Marja", "Dextra", "Yena", "Raz", "Omega"], // Tướng có thể khắc chế
            suitable:["",""], // Tướng hỗ trợ
            equipments: ["Áo Choàng Băng Giá", "Kiếm Fafnir", "Nanh Fenrir"], // Trang bị gợi ý
            tier: "B", // Tier của tướng
            note: "Airi mạnh cuối trận."
        },
        { 
            name: "Aleister", 
            role: ["Mid"], 
            image: "Media/Aleister.jpg", 
            counter: ["Yue","Ilumia", "Chaugnar", "Điêu Thuyền","Ishar"], 
            suitable:["Bijan","Arum","Mina"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"Aleister là một pháp sư mạnh với khả năng khống chế tốt, nhưng cần phải cẩn thận với những tướng có khả năng áp sát nhanh."  
        },
        { 
            name: "Alice", 
            role: ["Sp"], 
            image: "Media/Alice.png", 
            counter: ["Lorion","Zata","Elandorr", "Raz", "Fennik"], 
            suitable:["Dolia","Arthur","Fennik","Telannas","Yorn"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note: "Alice là một hỗ trợ mạnh với khả năng bảo vệ đồng đội và khống chế kẻ địch, nhưng cần phải cẩn thận với những tướng có khả năng áp sát nhanh." 
        },
        { 
            name: "Allain", 
            role: ["Top"], 
            image: "Media/Allain.jpg", 
            counter: ["Florentino","Kriknak", "Murad", "Keera","Ngộ Không","Bijan","Billow","Biron","Mina"], 
            suitable:["Butterfly","Paine","Krizzix","Lữ Bố","Richter","KiiGroth"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:""
        },
        { 
            name: "Amily", 
            role: ["Top","Jungle"], 
            image: "Media/Amily.jpg", 
            counter: ["Florentino", "Ryoma", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "E", // Tier của tướng
            note:"Tướng tù vcl" 
        },
        { 
            name: "Annette", 
            role: ["Mid","Sp"], 
            image: "Media/Annette.jpg", 
            counter: ["Yue", "Flowborn Mid", ""], 
            suitable:["Dolia",""],
            equipments: ["Liệt Hỏa Hồi Huyết", "Giày Thuật Sĩ", "Mặt Nạ Berith", "Trượng Băng", "Sách Truy Hồn", "Gươm Hiền Triết"],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"Bớt KS tao nha mấy con chó :)" 
        },
        { 
            name: "Aoi", 
            role: ["Jungle"], 
            image: "Media/Aoi.jpeg", 
            counter: ["Wonder Woman","Keera", "Rourke", "Zephys","Stuart","Omega","Nakroth","Skud"], 
            suitable:["Richter","Qi","Skud","Yena","Aya"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Arduin", 
            role: ["Top","Sp"], 
            image: "Media/Arduin.jpg", 
            counter: ["Chaugnar","Aleister", "Hayate", "Gildur","Tachi","Maloch"], 
            suitable:["Rouie",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Arthur", 
            role: ["Top","Sp"], 
            image: "Media/Arthur.jpg", 
            counter: ["Marja","Bijan", "Florentino", "Maloch","Tachi","Hayate","Triệu Vân","Điêu Thuyền","Aleister"], 
            suitable:["Aya","Alice"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "A", // Tier của tướng
            note:"Nâng max chiêu 2" 
        },
        { 
            name: "Arum", 
            role: ["Sp"], 
            image: "Media/Arum.jpg", 
            counter: ["Slimz", "Zip", "Dyadia","Teemee"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"Áp sát chủ lực hợp lý, tránh giao tranh tổng sớm" 
        },
        { 
            name: "Astrid", 
            role: ["Top","Jungle"], 
            image: "Media/Astrid.jpg", 
            counter: ["Florentino", "Zephys", "Keera"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"Tướng late game, cần farm nhiều" 
        },
        { 
            name: "Ata", 
            role: ["Sp"], 
            image: "Media/Ata.jpg", 
            counter: ["Maloch", "Triệu Vân", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"Tướng đầu game, nâng max chiêu 1, chiêu cuối hợp lý tránh bóp team! Ngăn đc ulti Zip. Phù hợp khi team địch thiếu cơ động" },
        { 
            name: "Aya", 
            role: ["Sp"], 
            image: "Media/Aya.jpg", 
            counter: ["Mganga", "Maloch", "Hayate", "Tachi", "Airi", "Triệu Vân", "Florentino","Krizzix","Arum","Grakk","Roxie"], 
            suitable:["Maloch","Nakroth", "Athur", "Taara", "Tachi"],
            equipments: ["Liệt Hỏa Hồi Huyết", "Sách Truy Hồn", "Trượng Băng", "Mặt Nạ Berith", "Trượng Hỗn Mang", "Sách Thánh"],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"Bớt xài bộc phá ks nha con chó kia! :)" 
        },
        { 
            name: "Azzenka", 
            role: ["Mid"], 
            image: "Media/Azzenka.jpg", 
            counter: ["Yue", "Gildur", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" },
        //B
        { 
            name: "Baldum", 
            role: ["Sp"], 
            image: "Media/Baldum.jpg", 
            counter: ["Thane", "Lumburr", "Chaugnar","Annette","Arum"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Bijan", 
            role: ["Top","Jungle"], 
            image: "Media/Bijan.jpg", 
            counter: ["Marja","Florentino", "Omen", "Triệu Vân", "Billow", "Zip", "Ata", "Hayate"], 
            suitable:["Triệu Vân","Celica"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"Lái xe cẩn thận, tướng mạnh đầu game." 
        },
        { 
            name: "Billow", 
            role: ["Top","Jungle"], 
            image: "Media/Billow.jpg", 
            counter: ["Zephys","Kaine","Aoi", "Aleister", "Keera", "Stuart", "Arum", "Roxie"], 
            suitable:["Krizzix","Ybneth"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "S", // Tier của tướng
            note:"Tướng siêu mạnh đầu game dù bị nerf, late game yếu vl" 
        },
        { 
            name: "Biron", 
            role: ["Top"], 
            image: "Media/Biron.jpg", 
            counter: ["Volkath","Florentino", "Marja", "Murad", "Skud", "Hayate", "Thane"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        { 
            name: "Bolt Baron", 
            role: ["Top","Jungle","Ad"], 
            image: "Media/Bolt Baron.jpg", 
            counter: ["Enzo", "Natalya", "FLorentino", "Marja", "Liliana", "Keera", "Tachi", "Hayate", "Flowborn Ad"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Bonnie", 
            role: ["Mid","Sp"], 
            image: "Media/Bonnie.jpg", 
            counter: ["Flowborn Mid", "Veera", ""], 
            suitable:["Dyadia",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Bright", 
            role: ["Top","Jungle","Ad"], 
            image: "Media/Bright.jpg", 
            counter: ["Valhein", "Elsu", ""], 
            suitable:["Zip",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Butterfly", 
            role: ["Jungle"], 
            image: "Media/Butterfly.jpg", 
            counter: ["Aoi", "Keera", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        //C
        { 
            name: "Capheny", 
            role: ["Ad"], 
            image: "Media/Capheny.jpg", 
            counter: ["Valhein", "Violet", "Stuart", "Yue", "Flowborn Ad"], 
            suitable:["Ming",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Celica", 
            role: ["Ad"], 
            image: "Media/Celica.jpg", 
            counter: ["Erin", "Flowborn Ad", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Charlotte", 
            role: ["Top"], 
            image: "Media/Charlotte.jpg", 
            counter: ["Marja", "Volkath", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Chaugnar", 
            role: ["Sp","Mid"], 
            image: "Media/Chaugnar.jpg", 
            counter: ["Triệu Vân", "Roxie", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Cresht", 
            role: ["Sp"], 
            image: "Media/Cresht.jpg", 
            counter: ["Florentino", "Maloch", "Triệu Vân"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        //D
        { 
            name: "Darcy", 
            role: ["Mid","Jungle"], 
            image: "Media/Darcy.jpg", 
            counter: ["Sephera", "Lauriel", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "E", // Tier của tướng
            note:"" 
        },
        { 
            name: "Dextra", 
            role: ["Top","Jungle","Sp"], 
            image: "Media/Dextra.jpg", 
            counter: ["Ryoma","Marja", "Florentino", "Keera", "Murad", "Hayate", "Enzo"], 
            suitable:["Sinestrea",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "E", // Tier của tướng
            note:"Khi bật ulti hạn chế đánh vào nó." 
        },
        { 
            name: "Điêu Thuyền", 
            role: ["Mid","Sp"], 
            image: "Media/Điêu Thuyền.jpg", 
            counter: ["Flowborn Mid","Yena", "Iggy", "Yue","Lorion","Florentino"], 
            suitable:["Krizzix","Grak","Enzo","Gildur","Bonnie","Dolia"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Dirak", 
            role: ["Mid","Jungle","Sp"], 
            image: "Media/Dirak.jpg", 
            counter: ["Điêu Thuyền","Flowborn Mid","Liliana", "Tulen", "Zata", "Lorion", "Yena", "Yan", "Grakk"], 
            suitable:["Krizzik","Grak"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Dolia", 
            role: ["Mid","Sp"], 
            image: "Media/Dolia.jpg", 
            counter: ["Raz", "Liliana", "Lorion","Grakk","Enzo"], 
            suitable:["Maloch","Alice","Ilumia","Kahlii","Tachi","Stuart","Wonder Woman","Volkath"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        { 
            name: "Dyadia", 
            role: ["Sp"], 
            image: "Media/Dyadia.jpg", 
            counter: ["Raz", "Liliana", "Lorion","Grakk","Enzo"], 
            suitable:["Maloch","Ilumia","Kahlii","Tachi","Stuart","Wonder Woman","Volkath"], //Sửa lại
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "S", // Tier của tướng
            note:"" 
        },
        //E
        { 
            name: "Edras", 
            role: ["Top","Jungle", "Ad"], 
            image: "Media/Edras.jpg", 
            counter: ["Keera", "Marja", "Flowborn Ad", "Elandorr"], 
            suitable:["Bijan",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Elandorr", 
            role: ["Jungle","Ad"], 
            image: "Media/Elandorr.jpg", 
            counter: ["Kaine", "Ngộ Không", ""], 
            suitable:["Rouie",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        { 
            name: "Elsu", 
            role: ["Ad"], 
            image: "Media/Elsu.jpg", 
            counter: ["Slimz", "Violet", "Stuart"], 
            suitable:["Gildur","Iggy","Yue","Liliana","Heino","Điêu Thuyền"],
            equipments: ["Giày Thuật Sĩ", "Chùy Băng Sương", "Kiếm Muramasa", "Nanh Fenrir", "Kiếm Fafnir", "Xạ Nhật Cung"],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"Bắn cho chuẩn vào, Bắn tay hộ, nhớ đặt mắt" 
        },
        { 
            name: "Enzo", 
            role: ["Jungle","Sp"], 
            image: "Media/Enzo.jpg", 
            counter: ["Thane", "Hayate", "Toro", "Ybneth","Keera","Florentino", "Grakk"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "A", // Tier của tướng
            note:"" 
        },
        { 
            name: "Errol", 
            role: ["Top","Jungle"], 
            image: "Media/Errol.jpg", 
            counter: ["Florentino", "Hayate", "Athur","Thane", "Marja", "Wonder Woman"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Erin", 
            role: ["Mid","Ad"], 
            image: "Media/Erin.jpg", 
            counter: ["Telannas", "", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "E", // Tier của tướng
            note:"" 
        },

        //F
        { 
            name: "Fennik", 
            role: ["Jungle","Ad"], 
            image: "Media/Fennik.jpg", 
            counter: ["Valhein", "Capheny", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        { 
            name: "Florentino", 
            role: ["Top"], 
            image: "Media/Florentino.jpg", 
            counter: ["Murad", "Ryoma", "Tulen", "Fennik", "Lauriel"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Flowborn Ad", 
            role: ["Ad"], 
            image: "Media/Flowborn_ad.jpg", 
            counter: ["Stuart", "Elsu", "Yue", "Elandorr", "Moren"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "A", // Tier của tướng
            note:"" 
        },
        { 
            name: "Flowborn Mid", 
            role: ["Mid"], 
            image: "Media/Flowborn_mid.jpg", 
            counter: ["Yue", "Lorion", "Zata"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        //G
        { 
            name: "Gildur", 
            role: ["Mid","Sp"], 
            image: "Media/Gildur.jpg", 
            counter: ["Chaugnar", "Alice", "Goverra", "Zata"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Goverra", 
            role: ["Mid"], 
            image: "Media/Goverra.jpg", 
            counter: ["Lorion", "Lauriel","Natalya", "Heino", "Veera","Ybenth","KiiGroth"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Grakk", 
            role: ["Sp"], 
            image: "Media/Grakk.png", 
            counter: ["Enzo", "Toro", "Chaugnar","Chaugnar"], 
            suitable:["Natalya","Valhein"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        //H
        { 
            name: "Hayate", 
            role: ["Ad"], 
            image: "Media/Hayate.jpg", 
            counter: ["Elandorr", "Capheny", "Valhein", "Stuart", "Violet"], 
            suitable:["Mina","Krizzik","Grak"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        { 
            name: "Heino", 
            role: ["Mid","Top","Ad"], 
            image: "Media/Heino.jpg", 
            counter: ["Flowborn Mid", "Darcy", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Helen", 
            role: ["Sp"], 
            image: "Media/Helen.jpg", 
            counter: ["Enzo", "Grakk", "Liliana", "Ybenth", "Thane", "Maloch","Baldum"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        //I
        { 
            name: "Iggy", 
            role: ["Mid"], 
            image: "Media/Iggy.jpeg", 
            counter: ["Flowborn Mid", "Zata", "Tulen", "Krixi", "Liliana", "Raz", "Darcy", "Aoi", "Ishar", "Lorion"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        { 
            name: "Ignis", 
            role: ["Mid","Sp"], 
            image: "Media/Ignis.jpg", 
            counter: ["Iggy", "Yue", "Liliana", "Lauriel"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Ilumia", 
            role: ["Mid","Sp"], 
            image: "Media/Ilumia.jpg", 
            counter: ["Flowborn Mid", "Kahlii", "Yue", "Zata", "Natalya"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Ishar", 
            role: ["Mid","Sp"], 
            image: "Media/Ishar.jpg", 
            counter: ["Liliana", "Flowborn Mid", ""], 
            suitable:["",""],
            equipments: ["Liệt Hỏa Mở Trói", "Giày Thuật Sĩ", "Mặt Nạ Berith", "Trượng Hỗn Mang", "Vương Miện Hecate", "Sách Thánh"],//Trang bị gợi ý
            tier: "F", // Tier của tướng
            note:"Mày dạy con tí nị của mày lại đi! Nó KS của t suốt" 
        },
        //J
        { 
            name: "Jinna", 
            role: ["Mid"], 
            image: "Media/Jinna.jpg", 
            counter: ["Liliana", "Yue", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "E", // Tier của tướng
            note:"" 
        },
        //K
        { 
            name: "Kahlii", 
            role: ["Mid"], 
            image: "Media/Kahlii.png", 
            counter: ["Dirak", "Darcy", "Zata"], 
            suitable:["Dolia",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Kaine", 
            role: ["Top","Jungle","Sp"], 
            image: "Media/Kaine.jpg", 
            counter: ["Krizzix", "Biron", "Qi", "Fennik", "Ilumia", "Omen","Skud","Richter"], 
            suitable:["Krizzix",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Keera", 
            role: ["Jungle"], 
            image: "Media/Keera.jpg", 
            counter: ["Skud", "Paine", "Ngộ Không"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "KiiGroth", 
            role: ["Top","Jungle"], 
            image: "Media/KiiGroth.gif", 
            counter: ["Murad", "Florentino", "Marja", "Mina", "Ryoma", "Elandorr", "Baldum","Hayate"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "E", // Tier của tướng
            note:"" 
        },
        { 
            name: "Kriknak", 
            role: ["Jungle"], 
            image: "Media/Kriknak.png", 
            counter: ["Keera", "Billow", "Ilumia", "Aoi", "Zuka","Zephys"], 
            suitable:["Krixi","Krizzix"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Krixi", 
            role: ["Mid","Sp"], 
            image: "Media/Krixi.png", 
            counter: ["Flowborn Mid", "Zata", "Liliana", "Aoi", "Ngộ Không", "Ignis", "Yue", "Lorion"], 
            suitable:["Krizzix","Kriknak","Grakk","Gildur"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Krizzix", 
            role: ["Sp"], 
            image: "Media/Krizzix.png", 
            counter: ["Annette", "Chaugnar", ""], 
            suitable:["Krixi","Kriknak"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        //L
        { 
            name: "Lauriel", 
            role: ["Mid"], 
            image: "Media/Lauriel.jpg", 
            counter: ["Natalya", "Zata", "Liliana", "Aleister", "Arum", "Keera", "Violet", "Roxie"], 
            suitable:["Aya",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Laville", 
            role: ["Ad"], 
            image: "Media/Laville.jpg", 
            counter: ["Flowborn Ad", "Hayate", "Mina", "Toro", "Aya", "Stuart"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Liliana", 
            role: ["Mid","Jungle"], 
            image: "Media/Liliana.jpg", 
            counter: ["Raz", "Veera", "Heino", "Aleister", "Keera", "Yue", "Lorion", "Teemee"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "A", // Tier của tướng
            note:"" 
        },
        { 
            name: "Lindis", 
            role: ["Jungle","Ad"], 
            image: "Media/Lindis.jpg", 
            counter: ["Telannas", "Violet", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Lorion", 
            role: ["Mid"], 
            image: "Media/Lorion.jpg", 
            counter: ["Natalya", "Mganga", "Zata", "Lauriel", "Liliana", "Krixi", "Aoi", "Hayate", "Toro"], 
            suitable:["Krizzik", "Hayate", "Aya"],
            equipments: ["Giày Kiên Cường", "Mặt Nạ Berith", "Băng Nhẫn Skadi", "Quả Cầu Băng Sương", "Ma Pháp Trường Bào", "Thệ Ước Carano"],//Trang bị gợi ý
            tier: "A", // Tier của tướng
            note:"" 
        },
        { 
            name: "Lữ Bố", 
            role: ["Top","Jungle"], 
            image: "Media/Lữ Bố.jpg", 
            counter: ["Marja", "Florentino", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "E", // Tier của tướng
            note:"" 
        },
        { 
            name: "Lumburr", 
            role: ["Sp"], 
            image: "Media/Lumburr.jpg", 
            counter: ["Annette", "Chaugnar", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        //M
        { 
            name: "Maloch", 
            role: ["Top","Mid","Sp"], 
            image: "Media/Maloch.jpg", 
            counter: ["Marja","Thane", "Krizzix", "Baldum"], 
            suitable:["Aya","Dolia"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "E", // Tier của tướng
            note:"" 
        },
        { 
            name: "Marja", 
            role: ["Top","Jungle","Ad"], 
            image: "Media/Marja.jpg", 
            counter: ["Ryoma", "Volkath", "Qi","Murad","Keera","Elandorr","Aleister","Heino", "Hayate", "Flowborn Ad"], 
            suitable:["Krizzix",""],
            equipments: ["Giày Du Mục", "Thập Tự Kiếm", "Gươm Sấm Sét", "Vương Miện Hecate", "Ma Pháp Trường Bào", "Quả Cầu Băng Sương"],//Trang bị gợi ý
            tier: "S", // Tier của tướng
            note:"" 
        },
        { 
            name: "Max", 
            role: ["Top","Sp"], 
            image: "Media/Max.jpg", 
            counter: ["Arum", "Dolia", "Teemee"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "E", // Tier của tướng
            note:"" 
        },
        { 
            name: "Mganga", 
            role: ["Mid","Sp"], 
            image: "Media/Mganga.jpg", 
            counter: ["Flowborn Mid", "Iggy", "Ignis", "Enzo", "Natalya", "Fennik", "Florentino", "Zata", "Lauriel"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Mina", 
            role: ["Top","Sp"], 
            image: "Media/Mina.png", 
            counter: ["Chaugnar", "Triệu Vân", "Florentino", "Krixi", "Natalya"], 
            suitable:["Ybneth",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Ming", 
            role: ["Sp"], 
            image: "Media/Ming.jpg", 
            counter: ["Baldum", "Grakk", "Liliana", "Heino", "Natalya"], 
            suitable:["Valhein","Capheny"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Moren", 
            role: ["Ad"], 
            image: "Media/Moren.jpg", 
            counter: ["Stuart", "Fennik", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        { 
            name: "Murad", 
            role: ["Top","Jungle"], 
            image: "Media/Murad.jpg", 
            counter: ["Bijan", "Arthur", "Qi", "Omen", "Ryoma", "Raz", "Ybneth", "Gildur", "Mina", "Alice", "Stuart", "Elandorr"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "A", // Tier của tướng
            note:"" 
        },
        //N
        { 
            name: "Nakroth", 
            role: ["Jungle"], 
            image: "Media/Nakroth.jpg", 
            counter: ["Sinestrea", "Keera", ""], 
            suitable:["Aya",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        { 
            name: "Natalya", 
            role: ["Mid"], 
            image: "Media/Natalya.jpg", 
            counter: ["Flowborn Mid", "Yue", "Ignis", "Liliana", "Florentino", "Baldum","Lauriel"], 
            suitable:["Grakk","Valhein"],
            equipments: ["Giày Thuật Sĩ", "Sách Truy Hồn", "Quyền Trượng Rhea", "Băng Nhẫn Skadi", "Gươm Hiền Triết", "Giáp Hộ Mệnh"],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Ngộ Không", 
            role: ["Top","Jungle"], 
            image: "Media/Ngộ Không.jpg", 
            counter: ["Rourke", "Maloch", "Omen", "Skud", "Richter","Stuart","Enzo","Raz","Veera","Wonder Woman"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        //O
        { 
            name: "Omega", 
            role: ["Sp"], 
            image: "Media/Omega.jpg", 
            counter: ["Chaugnar", "Baldum", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        { 
            name: "Omen", 
            role: ["Top"], 
            image: "Media/Omen.jpg", 
            counter: ["Triệu Vân", "KiiGroth", "Florentino", "Mina","Allan","Yena","Hayate","Zip"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Ormarr", 
            role: ["Top","Sp"], 
            image: "Media/Ormarr.jpg", 
            counter: ["Chaugnar", "Triệu Vân", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "E", // Tier của tướng
            note:"" 
        },
        //P
        { 
            name: "Paine", 
            role: ["Jungle","Mid"], 
            image: "Media/Paine.jpg", 
            counter: ["Skud", "Rourke", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Preyta", 
            role: ["Mid"], 
            image: "Media/Preyta.jpg", 
            counter: ["Zata", "Lauriel", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        //Q
        { 
            name: "Qi", 
            role: ["Top","Jungle"], 
            image: "Media/Qi.jpg", 
            counter: ["Florentino", "Omen", "Roxie", "Airi", "KiiGroth", "Omega", "Hayate"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Quillen", 
            role: ["Jungle"], 
            image: "Media/Quillen.jpg", 
            counter: ["Kaine", "Skud", "Krizzix", "Illumia", "Max"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        //R
        { 
            name: "Raz", 
            role: ["Mid","Jungle","Sp"], 
            image: "Media/Raz.jpg", 
            counter: ["FLowborn Mid", "Veera", "Krixi", "Tulen", "Natalya", "Wonder Woman", "Cresht", "Mganga", "Ignis","Goveera"], 
            suitable:["Thane",""],
            equipments: ["Giày Phù Thủy", "Trượng Bùng Nổ", "Vương Miện Hecate", "Mặt Nạ Ma Quái", "Gươm Tận Thế", "Quả Cầu Băng Sương"],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Richter", 
            role: ["Top","Sp"], 
            image: "Media/Richter.jpg", 
            counter: ["Marja", "Florentino", "Omen", "Skud", "Lữ Bố", "Biron", "Hayate", "Biron"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Rouie", 
            role: ["Mid","Sp"], 
            image: "Media/Rouie.jpg", 
            counter: ["Flowborn Mid", "Raz", "Thane", "Krizzix","Ybneth", "Yue", "Zata", "Liliana", "Superman","Maloch","Lorion"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "S", // Tier của tướng
            note:"" 
        },
        { 
            name: "Rourke", 
            role: ["Jungle"], 
            image: "Media/Rourke.jpg", 
            counter: ["Keera", "Zephys", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Roxie", 
            role: ["Top","Sp"], 
            image: "Media/Roxie.jpg", 
            counter: ["Florentino", "Marja", ""], 
            suitable:["Krizzik",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "F", // Tier của tướng
            note:"" 
        },
        { 
            name: "Ryoma", 
            role: ["Top"], 
            image: "Media/Ryoma.jpg", 
            counter: ["Aoi", "Richter", "Teemee", "Omen", "Yena", "Qi"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" },
        //S
        { 
            name: "Sephera", 
            role: ["Jungle","Sp"], 
            image: "Media/Sephera.jpg", 
            counter: ["Liliana", "Flowborn Mid", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "F", // Tier của tướng
            note:"" 
        },
        { 
            name: "Sinestrea", 
            role: ["Jungle","Top"], 
            image: "Media/Sinestrea.jpg", 
            counter: ["Ngộ Không", "Max", "Fennik", "Krizzik", "Raz","Paine", "Illumia"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "S", // Tier của tướng
            note:"" 
        },
        { 
            name: "Skud", 
            role: ["Top","Jungle"], 
            image: "Media/Skud.jpg", 
            counter: ["FLorentino", "Triệu Vân", "Maloch", "Marja", "Hayate", "Wonder Woman", "Qi", "Veres"], 
            suitable:["",""],
            equipments: ["Giày Phù Thủy", "Áo Choàng Thần Ra", "Ma Pháp Trường Bào", "Giáp Gaia", "Giáp Thống Khổ", "Nham Thuẫn"],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Slimz", 
            role: ["Ad"], 
            image: "Media/Slimz.png", 
            counter: ["Capheny","Elsu", "Valhein", "Stuart", "Violet"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Stuart", 
            role: ["Ad"], 
            image: "Media/Stuart.jpg", 
            counter: ["Raz", "Erin", "Helen","Dolia","Taara","Iggy"], 
            suitable:["Dolia",""],
            equipments: ["Giày Du Mục", "Thương Xuyên Phá", "Chùy Băng Sương", "Giáp Gaia", "Nanh Fenrir", "Giáp Hộ Mệnh"],//Trang bị gợi ý
            tier: "S", // Tier của tướng
            note:"" 
        },
        { 
            name: "Superman", 
            role: ["Top","Mid","Sp"], 
            image: "Media/Superman.jpg", 
            counter: ["Dyadia", "Ybneth", "Ignis", "Azzenka", "Aleister"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "E", // Tier của tướng
            note:"" 
        },
        //T
        { 
            name: "Taara", 
            role: ["Top","Jungle","Sp"], 
            image: "Media/Taara.jpg", 
            counter: ["Florentino", "Veres", "Airi","Sách Truy Hồn","Áo Choàng Thần Ra"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Tachi", 
            role: ["Top","Jungle","Sp"], 
            image: "Media/Tachi.jpg", 
            counter: ["Marja", "Hayate", "Maloch", "Elandorr","Florentino", "Enzo", "Nakroth","Keera"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        { 
            name: "Tamyn", 
            role: ["Top","Jungle"], 
            image: "Media/Tamyn.jpg", 
            counter: ["Zephys", "Butterfly", "Bijan","Marja", "FLorentino", "",""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        { 
            name: "Teemee", 
            role: ["Sp","Top"], 
            image: "Media/Teemee.jpg", 
            counter: ["Grakk", "Annette", "Krizzix", "Maloch", "Ybneth"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        { 
            name: "Telannas", 
            role: ["Ad"], 
            image: "Media/Telannas.jpg", 
            counter: ["Celica", "FLowborn Ad", "Stuart", "Violet", "Elsu"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Terri", 
            role: ["Ad"], 
            image: "Media/Terri.jpg", 
            counter: ["Flowborn Ad", "Elsu", "Stuart", "Capheny"], 
            suitable:["Krizzik",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "E", // Tier của tướng
            note:"" 
        },
        { 
            name: "Thane", 
            role: ["Sp"], 
            image: "Media/Thane.png", 
            counter: ["Dyadia", "Annette", "Florentino", "Teemee", "Lumburr","Chaugnar"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "The Flash", 
            role: ["Mid","Jungle"], 
            image: "Media/The Flash.jpg", 
            counter: ["Veera", "Liliana", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Thorne", 
            role: ["Ad"], 
            image: "Media/Thorne.jpg", 
            counter: ["Stuart", "Valhein", "Telannas", "Heino"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Toro", 
            role: ["Sp"], 
            image: "Media/Toro.jpg", 
            counter: ["FLorentino", "Chaugnar", "Maloch"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        { 
            name: "Triệu Vân", 
            role: ["Top","Jungle","Sp"], 
            image: "Media/Triệu Vân.jpg", 
            counter: ["Murad", "Florentino", "Ryoma","Dextra","Keera"], 
            suitable:["Bijan",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"Lên tank! Làm ơn lên tank! Đừng lên sát thương, tướng mạnh đầu game, có thể đi rừng hoặc top. Nâng max chiêu 2 trước." 
        },
        { 
            name: "Tulen", 
            role: ["Mid","Jungle"], 
            image: "Media/Tulen.jpg", 
            counter: ["Flowborn Mid","Mganga", "Krixi", "Liliana", "Raz", "Lorion", "Ignis", "Zata", "Natalya", "Aoi", "Billow", "Richter", "Thane","Veera"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        //V
        { 
            name: "Valhein", 
            role: ["Ad"], 
            image: "Media/Valhein.jpg", 
            counter: ["Flowborn Ad", "Fennik", "Mina", "Telannas", "Terri", "Elsu", "Heino", "Stuart"], 
            suitable:["Grakk","Ming","Natalya","Rouie","Lorion"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Veera", 
            role: ["Mid"], 
            image: "Media/Veera.jpg", 
            counter: ["Dirak", "Raz", "Liliana", "Natalya", "Skud", "Toro", "Keera","Lauriel", "Ignis"], 
            suitable:["Grakk", "Enzo", "Krizzik"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Veres", 
            role: ["Top","Jungle","Sp"], 
            image: "Media/Veres.jpg", 
            counter: ["Marja","Florentino", "Yena", "Airi", "Keera", "Thane", "Hayate", "Billow"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Violet", 
            role: ["Ad"], 
            image: "Media/Violet.jpg", 
            counter: ["Capheny", "Valhein", "Stuart", "Telannas"], 
            suitable:["",""],
            equipments: ["Giày Du Mục", "Thánh Kiếm", "Song Đao Bão Táp", "Thương Xuyên Phá", "Nanh Fenrir", "Giáp Hộ Mệnh"],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Volkath", 
            role: ["Top","Jungle","Sp"], 
            image: "Media/Volkath.jpg", 
            counter: ["Zuka", "Keera", "Marja"], 
            suitable:["Dolia",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "A", // Tier của tướng
            note:"" 
        },
        //W
        { 
            name: "Wiro", 
            role: ["Top","Sp"], 
            image: "Media/Wiro.jpg", 
            counter: ["Florentino", "Dyadia", "Triệu Vân"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Wisp", 
            role: ["Ad"], 
            image: "Media/Wisp.jpg", 
            counter: ["Valhein", "Stuart", "Celica", "Violet"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        { 
            name: "Wonder Woman", 
            role: ["Jungle"], 
            image: "Media/Wonder Woman.jpg", 
            counter: ["Keera", "Florentino", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        //X
        { 
            name: "Xeniel", 
            role: ["Top","Jungle"], 
            image: "Media/Xeniel.jpg", 
            counter: ["Enzo", "Thane", "Maloch", "Krizzix", "Omen", "Liliana"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        //Y
        { 
            name: "Yan", 
            role: ["Top","Jungle"], 
            image: "Media/Yan.jpg", 
            counter: ["Keera", "Florentino", ""], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Ybneth", 
            role: ["Sp"], 
            image: "Media/Ybneth.jpg", 
            counter: ["FLorentino", "Annette", "Baldum", "Thane", "Maloch"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "S", // Tier của tướng
            note:"" 
        },
        { 
            name: "Yena", 
            role: ["Top"], 
            image: "Media/Yena.jpg", 
            counter: ["Billow", "Arthur", "FLorentino", "Skud", "Ryoma", "Charlotte", "Qi", "Zuka"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" },
        { 
            name: "Yorn", 
            role: ["Ad"], 
            image: "Media/Yorn.jpg", 
            counter: ["Flowborn Ad", "Valhein", "Stuart", "Celica", "Elsu"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "D", // Tier của tướng
            note:"" 
        },
        { 
            name: "Yue", 
            role: ["Mid"], 
            image: "Media/Yue.jpg", 
            counter: ["Liliana", "Gildur", "Iggy", "Raz", "Zata", "Tulen"], 
            suitable:["Gildur",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        //Z
        { 
            name: "Zata", 
            role: ["Mid"], 
            image: "Media/Zata.jpg", 
            counter: ["Dirak", "Veera", "Yue", "Lorion", "Aleister", "Raz", "Liliana"], 
            suitable:["Richter","Dolia"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        { 
            name: "Zephys", 
            role: ["Jungle"], 
            image: "Media/Zephys.jpg", 
            counter: ["Keera", "Elandorr", "Wonder Woman", "Tachi"], 
            suitable:["Aya",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "A", // Tier của tướng
            note:"" 
        },
        { 
            name: "Zill", 
            role: ["Jungle"], 
            image: "Media/Zill.jpg", 
            counter: ["Yan", "Wonder Woman", ""], 
            suitable:["Aya",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "C", // Tier của tướng
            note:"" 
        },
        { 
            name: "Zip", 
            role: ["Sp"], 
            image: "Media/Zip.jpg", 
            counter: ["Ata", "Grakk", "Baldum"], 
            suitable:["Valhein", "Telannas", "Celica", "Yorn"],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        },
        { 
            name: "Zuka", 
            role: ["Top","Jungle"], 
            image: "Media/Zuka.jpg", 
            counter: ["Biron", "Arthur", "Bijan", "Dextra", "Skud", "Billow"], 
            suitable:["",""],
            equipments: ["", "", "", "", "", ""],//Trang bị gợi ý
            tier: "B", // Tier của tướng
            note:"" 
        }
    ];
    //=================================================
    // Lấy phần tử chứa danh sách tướng
    // Bạn có thể thay đổi ID này nếu cần
        const heroGrid = document.getElementById("heroGrid");

        function renderHeroes(filteredList = heroes) {
            heroGrid.innerHTML = "";
            filteredList.forEach(hero => {
                const card = document.createElement("div");
                card.className = "hero-card";
                card.innerHTML = `
                    <img class="hero-img" src="${hero.image}" alt="${hero.name}">
                    <div class="hero-info">
                        <p>${hero.name}</p>
                    </div>
                `;
                card.onclick = () => openPopup(hero);
                heroGrid.appendChild(card);
            });
        }
        //---------------------------------
        // Hàm lọc tướng theo vai trò
        // Bạn có thể thay đổi các vai trò theo ý muốn
        function filterByRole(role) {
            if (role === "Tất cả") renderHeroes();
            else renderHeroes(heroes.filter(h => Array.isArray(h.role) && h.role.includes(role)));
        }

        // Hàm mở popup khi click vào tướng
        // Hiển thị thông tin tướng, tướng counter và tướng hỗ trợ
        function openPopup(hero) {
            // Cập nhật thông tin tướng trong popup
            document.getElementById("heroName").textContent = hero.name;
            document.getElementById("heroRole").textContent = hero.role.join(", ");
            //-----------------------------
            // Cập nhật danh sách tướng counter
            const counterList = document.getElementById("heroCounter");
            //-----------------------------
            // Hình Ảnh tướng Counter
            const counterImages = document.getElementById("heroCounterImages");
            counterImages.innerHTML = "";
            hero.counter.forEach(name => {
                const matched = heroes.find(h => h.name === name);
                if (matched && matched.image) {
                    const img = document.createElement("img");
                    img.src = matched.image;
                    img.alt = name;
                    img.title = matched.name; //Tên ảnh khi chỏ vào
                    img.style.width = "50px";
                    img.style.height = "50px";
                    img.style.borderRadius = "8px";
                    img.style.cursor = "pointer";

                    //Khi click vào Tướng counter thì mở popup hero đó
                    img.onclick = () => openPopup(matched);
                    //Thêm một phần tử con mới vào cuối danh sách con của một phần tử cha
                    counterImages.appendChild(img);
                }
            });

            // Hình Ảnh tướng phù hợp đi cùng
            // Cập nhật danh sách tướng hỗ trợ
            const suitableImages = document.getElementById("heroSuitableImages");
            suitableImages.innerHTML = "";
            hero.suitable.forEach(name => {
                const matched = heroes.find(h => h.name === name);
                if (matched && matched.image) {
                    const img = document.createElement("img");
                    img.src = matched.image;
                    img.alt = name;
                    img.title = matched.name; //Tên ảnh khi chỏ vào
                    img.style.width = "50px";
                    img.style.height = "50px";
                    img.style.borderRadius = "8px";
                    img.style.cursor = "pointer";

                    //Khi click vào tướng hỗ trợ thì mở popup hero đó
                    img.onclick = () => openPopup(matched);
                    //Thêm một phần tử con mới vào cuối danh sách con của một phần tử cha
                    suitableImages.appendChild(img);
                }
            });
            


            //-------------------------------
            //Trang bị tướng
            const equipmentContainer = document.getElementById("heroEquipments");
            equipmentContainer.innerHTML = "";

            if (hero.equipments && hero.equipments.length > 0) {
                hero.equipments.forEach(eqName => {
                    const eq = Equipments.find(e => e.name === eqName);
                    if (eq) {
                        const img = document.createElement("img");
                        img.src = eq.image;
                        img.alt = eq.name;
                        img.title = eq.name; //Tên ảnh khi chỏ vào
                        img.style.width = "50px";
                        img.style.height = "50px";
                        img.style.cursor = "pointer";
                        
                        //Thêm một phần tử con mới vào cuối danh sách con của một phần tử cha
                        equipmentContainer.appendChild(img);
                    }
                });
            } else {
                equipmentContainer.textContent = "Chưa có gợi ý.";
            }

            //Tier tướng
            document.getElementById("heroTier").textContent = hero.tier || "Chưa có tier tướng.";
            //Note
            document.getElementById("heroNote").textContent = hero.note || "Chưa có ghi chú.";
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
        renderHeroes();