
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculate")
        .addEventListener("click", function () {
            var customerData = document.getElementById("customerData").value;
            // alert(customerData);
            ChangeCustomerData(customerData);
            var countPerPage = document.getElementById("countPerPage").value;
            // console.log(countPerPage);
        });
});

function ChangeCustomerData(customerRawData) {
    var arrayData = new Array();
    customerRawData = customerRawData.trim();
    // console.log(customerRawData.length);
    customerRawData.split("\n").forEach(row => {
        row = row.trim();
        // console.log(row);
        if (row != "") {
            data = row.split("\t", 3);
            // console.log(data);
            arrayData.push(data);
        }
    });
    // console.log(arrayData);
    return arrayData;
}