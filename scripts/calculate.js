function cal() {
    let customerData = document.getElementById("customerData").value;
    // alert(customerData);
    const normalizeData = NormalizeCustomerData(customerData);

    let countPerPage = document.getElementById("countPerPage").value;
    // console.log(countPerPage);

    let requestData = makeRequestData(normalizeData, countPerPage);

    // const url = "http://testkos.duckdns.org/";
    const url = "http://127.0.0.1:8080/value";
    postData(url, requestData).then(x => {
        console.log("success:", x);
        const result = document.getElementById("result");
        result.hidden = false;
        result.value = JSON.stringify(x);
    })

};

function makeRequestData(customerData, countPerPage) {
    const reqData = { customerData, countPerPage};
    return reqData;
}

function NormalizeCustomerData(input) {
    let result = Array();
    // console.log(data.length);
    input.split("\n").forEach(row => {
        // console.log("before:" + row);
        row = row.trim();
        // console.log("after:" + row);
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
async function postData(url = "", data) {
    let result;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
        });

        result = await response.json();
        // console.log("success:", result);

    } catch (error) {
        console.error("fail:", error);
    }

    return result;
}

// main
const calcuateButton = document.getElementById("calculate");

calcuateButton.addEventListener("click", cal);