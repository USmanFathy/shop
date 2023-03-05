const total_pr = document.querySelectorAll(".total-pr p");

const price_pr = document.querySelectorAll(".price-pr p");

const gr_total = document.querySelector(".gr-total");

const table_main = document.querySelector(".table-main table");

const table_row = document.querySelectorAll(".table-main table tbody tr");

const quantity_inp = document.querySelectorAll(
    ".table-main .quantity-box input"
);

const coupon_inp = document.querySelector("[data-coupon]");

const prodcut_total = document.querySelector(`[data-product-total]`);
const discound_price = document.querySelector(`[data-discound-price]`);

const coupom_disc = document.querySelector(`[data-coupon-name]`);
const tax = document.querySelector(`[data-tax]`);

const shipping = document.querySelector(`[data-shipping]`);
const total_price = document.querySelector(`[data-all-total]`);

// const coupon_inp  = document.querySelector("[data-coupon]");
function repalse$(el) {
    var e = el.innerHTML;
    var output =  +e.replaceAll("$", "");
    return +parseFloat(output).toFixed(2);
}

fetch("./json/discount.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data["coupons"]);
        if (total_pr.length > 0) {
            console.log(repalse$(total_pr[0]));
            function inputChange() {
                for (var i = 0; i < table_row.length; i++) {
                    table_row[i].children[4].children[0].innerHTML = `$${repalse$(price_pr[i]) * quantity_inp[i].value
                        }`;
                }
            }
            inputChange();
            for (var i = 0; i < quantity_inp.length; i++) {
                quantity_inp[i].addEventListener("change", (e) => {
                    inputChange();
                    countTotal();
                    finalTotal()
                });
            }
            function countTotal() {
                var total = [];
                for (var i = 0; i < total_pr.length; i++) {
                    total.push(repalse$(total_pr[i]));
                }
                var t = 0;
                for (let num of total) {
                    t += num;
                }

                prodcut_total.innerHTML = `$${t}`;
                tax.innerHTML = `$${parseFloat((data.tax.price / 100) * t).toFixed(2)}`;
                shipping.innerHTML =`$${data.shipping.price}`;
            }
            countTotal();
            coupon_inp.nextElementSibling.addEventListener("click", (e) => {
                if (data.coupons[`${coupon_inp.value}`] == undefined) {
                    console.log(0);
                } else {
                    console.log(data.coupons[`${coupon_inp.value}`]);
                    var discound = data.coupons[`${coupon_inp.value}`];
                    discound_price.innerHTML = `%${discound}`;
                    coupom_disc.innerHTML = `$${(discound / 100) * repalse$(prodcut_total)
                }`;
                finalTotal();
                }
            });
        }

        function finalTotal() {
            total_price.innerHTML = 
            `$${repalse$(prodcut_total) + repalse$(tax) + repalse$(shipping) 
                - repalse$(coupom_disc)
            }`
        }
        finalTotal() ;
    });
