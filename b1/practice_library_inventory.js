let bookInventory = [
  {
    bookCode: "B01",
    title: "Lap trinh C co ban",
    category: "CNTT",
    price: 80000,
    totalCopies: 10,
    availableCopies: 1,
    shelfLocation: "Ke A1"
  },
  {
    bookCode: "B02",
    title: "Giao trinh Toan cao cap",
    category: "Khoa hoc",
    price: 50000,
    totalCopies: 15,
    availableCopies: 5,
    shelfLocation: "Ke B2"
  },
  {
    bookCode: "B03",
    title: "Tieng Anh chuyen nganh",
    category: "Ngoai ngu",
    price: 30000,
    totalCopies: 2,
    availableCopies: 0,
    shelfLocation: "Ke C3"
  }
];

console.log("--- KHO SACH BAN DAU ---");
console.table(bookInventory);

let newBook = {
  bookCode: "B04",
  title: "Co so du lieu",
  category: "CNTT",
  price: 95000,
  totalCopies: 20,
  availableCopies: 20,
  shelfLocation: "Ke A2"
};

bookInventory.push(newBook);
console.log("Da them thanh cong sach moi: " + newBook.title);

for (let i = 0; i < bookInventory.length; i++) {
  if (bookInventory[i].bookCode === "B01") {
    if (bookInventory[i].availableCopies > 0) {
      bookInventory[i].availableCopies = bookInventory[i].availableCopies - 1;
      console.log("Muon thanh cong sach B01. So luong con lai: " + bookInventory[i].availableCopies);
      
      if (bookInventory[i].availableCopies === 0) {
        console.log("HET SACH TREN KE");
      }
    } else {
      console.log("Sach da het, khong the muon!");
    }
    break;
  }
}

for (let i = 0; i < bookInventory.length; i++) {
  if (bookInventory[i].bookCode === "B03") {
    bookInventory.splice(i, 1);
    console.log("Da thanh ly va xoa sach B03 khoi kho");
    break;
  }
}

let tongSoLuong = 0;
let tongGiaTri = 0;

for (let i = 0; i < bookInventory.length; i++) {
  tongSoLuong = tongSoLuong + bookInventory[i].totalCopies;
  tongGiaTri = tongGiaTri + (bookInventory[i].totalCopies * bookInventory[i].price);
}

console.log("--- KET QUA KIEM KE ---");
console.log("Tong so luong sach trong kho: " + tongSoLuong);
console.log("Tong gia tri tai san kho: " + tongGiaTri + " VND");

console.log("--- DANH SACH KHO HIEN TAI ---");
console.table(bookInventory);