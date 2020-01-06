function addPr(a, b) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			if (typeof a != 'number' || typeof b != 'number') {
				// return reject(new Error('Tham so phai la kieu number'))
				// hoặc viết đơn giản:   
				return reject('Error: Tham số phải là kiểu number')
			}
			resolve(a + b)
		}, 1000)
	})
}
console.log(addPr(1, 2));

//**** ĐOC CÁI COMMENT NÀY ĐỂ HIỂU : chạy thử promise
// addPr(4, 5).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);

// });


async function add() {
	try {
		let res = await addPr(1, 2);
		console.log(res);
	}
	catch (err) {
		console.log(`loi ne=`, err)
	}
}

//gọi hàm chạy thử:
add();




