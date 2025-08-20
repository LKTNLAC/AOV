// Danh sách trang bị
    // Bạn có thể thêm hoặc sửa đổi các trang bị trong danh sách này
        const Equipments = [
        //A
        { 
            name: "Áo Choàng Băng Giá",  // Tên trang bị
            role: ["Thu"], // Vai trò của trang bị
            image: "Media/ao-choang-bang-gia.png", // Đường dẫn đến hình ảnh của trang bị
            price: ["1970"], // Giá của trang bị
            primary:["",""], // Trang bị sơ cấp
            note: "+10% Giảm hồi chiêu +200 Giáp +800 Máu Sức mạnh nguyên tố: Sau khi tung chiêu, trong 5 giây sẽ khiến đòn đánh kế gây thêm 100 (+30% công vật lý) sát thương vật lý lan trong phạm vi 3m quanh mục tiêu kèm 30% làm chậm địch (tướng đánh xa làm chậm chỉ được 20%) trong 0.5 giây; 0.65 giây hồi – Nội tại duy nhất"
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
        }

        // Hàm đóng popup
        // Ẩn popup khi người dùng click vào nút đóng
        function closePopup() {
            document.getElementById("popup").style.display = "none";
        }
        // Hiển thị danh sách tướng ban đầu
        // Gọi hàm renderHeroes để hiển thị tất cả tướng khi trang được tải
        renderEquipment();