function cal() {
    let customerData = document.getElementById("customerData").value;
    // alert(customerData);
    ChangeCustomerData(customerData);

    let countPerPage = document.getElementById("countPerPage").value;
    // console.log(countPerPage);

    // let requestData = makeRequestData(customerData, countPerPage);

    // const url = "http://testkos.duckdns.org/hae/posts";
    // postData(url)
    // or
    // logJSONData();
};

function makeRequestData(customerData, countPerPage) {

}

function ChangeCustomerData(data) {
    var result = new Array();
    data = data.trim();
    // console.log(data.length);
    data.split("\n").forEach(row => {
        row = row.trim();
        // console.log(row);
        if (row != "") {
            data = row.split("\t", 3);
            // console.log(data);
            result.push(data);
        }
    });
    // console.log(result);
    return result;
}

// POST 메서드 구현 예제
async function postData(url = "", data = {}) {
    // const otherParam = {
    //     headers: {
    //         "Content-Type": "application/json",
    //     }
    // }
    // 옵션 기본 값은 *로 강조
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE 등
        mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
    });
    // console.log(response);
    return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
}

// postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data); // JSON 데이터가 `data.json()` 호출에 의해 파싱됨
// });
// async function logJSONData() {
//     const response = await fetch("http://testkos.duckdns.org/");
//     const jsonData = await response.json();
//     console.log(jsonData);
// }

// main
const calcuateButton = document.getElementById("calculate");

calcuateButton.addEventListener("click", cal);