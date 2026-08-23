function showMessage(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2500);
}

function goBack() {
    window.history.back();
}

function toggleCoupon() {
    const couponArea = document.getElementById("couponArea");

    if (couponArea.style.display === "flex") {
        couponArea.style.display = "none";
    } else {
        couponArea.style.display = "flex";
    }
}

function applyCoupon() {
    const coupon = document.getElementById("coupon").value.trim();

    if (coupon === "") {
        showMessage("Please enter a coupon code");
        return;
    }

    if (coupon.toUpperCase() === "EMC3000") {
        showMessage("Coupon applied successfully");
    } else {
        showMessage("Invalid coupon code");
    }
}

function makePayment() {
    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;
    const city = document.getElementById("city").value;
    const terms = document.getElementById("terms").checked;

    if (country === "") {
        showMessage("Please select your country");
        return;
    }

    if (state === "") {
        showMessage("Please select your state");
        return;
    }

    if (city === "") {
        showMessage("Please select your city");
        return;
    }

    if (!terms) {
        showMessage("Please agree with Terms & Conditions");
        return;
    }

    window.location.href = "payment.html";
}

function goBackToReview() {
    window.location.href = "review.html";
}

function togglePayment(id) {
    const selected = document.getElementById(id);
    const allContents = document.querySelectorAll(".method-content");

    allContents.forEach(function (content) {
        if (content !== selected) {
            content.classList.remove("active");
        }
    });

    selected.classList.toggle("active");
}

function payUPI() {
    const upiId = document.getElementById("upiId").value.trim();

    if (upiId === "") {
        showMessage("Please enter your UPI ID");
        return;
    }

    if (!upiId.includes("@")) {
        showMessage("Please enter a valid UPI ID");
        return;
    }

    showMessage("UPI payment initiated");
}

function payCard() {
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const cardName = document.getElementById("cardName").value.trim();
    const expiry = document.getElementById("expiry").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    if (cardNumber === "") {
        showMessage("Please enter card number");
        return;
    }

    if (cardName === "") {
        showMessage("Please enter name on card");
        return;
    }

    if (expiry === "") {
        showMessage("Please enter expiry date");
        return;
    }

    if (cvv === "") {
        showMessage("Please enter CVV");
        return;
    }

    showMessage("Card payment initiated");
}

function payBank() {
    const bank = document.getElementById("bank").value;

    if (bank === "") {
        showMessage("Please select a bank");
        return;
    }

    showMessage(bank + " selected");
}

function payWallet() {
    const wallet = document.querySelector(
        'input[name="wallet"]:checked'
    );

    if (!wallet) {
        showMessage("Please select a wallet");
        return;
    }

    showMessage(wallet.value + " selected");
}

const cardNumber = document.getElementById("cardNumber");

if (cardNumber) {
    cardNumber.addEventListener("input", function () {
        let value = this.value.replace(/\D/g, "");

        value = value.substring(0, 16);

        let formatted = "";

        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formatted += " ";
            }

            formatted += value[i];
        }

        this.value = formatted;
    });
}

const expiry = document.getElementById("expiry");

if (expiry) {
    expiry.addEventListener("input", function () {
        let value = this.value.replace(/\D/g, "");

        value = value.substring(0, 4);

        if (value.length >= 3) {
            value =
                value.substring(0, 2) +
                "/" +
                value.substring(2);
        }

        this.value = value;
    });
}

const cvv = document.getElementById("cvv");

if (cvv) {
    cvv.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "").substring(0, 3);
    });
}