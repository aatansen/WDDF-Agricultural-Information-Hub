document.addEventListener("DOMContentLoaded", function () {
    // Contact Form
    const form = document.getElementById("expertForm");
    const message = document.getElementById("formMessage");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            if (form.checkValidity()) {

                message.classList.remove("d-none");
                form.reset();

            } else {

                form.classList.add("was-validated");

            }
        });
    }

    // Farming Guide Filters
    const filters = document.querySelectorAll(".guide-filter");
    const guideCards = document.querySelectorAll(".guide-card");

    filters.forEach(function (filter) {

        filter.addEventListener("change", function () {

            filterGuides();

        });

    });


    function filterGuides() {

        const selectedCrop = filters[0].value;
        const selectedSeason = filters[1].value;
        const selectedMethod = filters[2].value;


        guideCards.forEach(function (card) {

            const badge = card.querySelector(".badge").textContent;

            const cropMatch =
                selectedCrop === "All Crop Types" ||
                badge.includes(selectedCrop);

            const seasonMatch =
                selectedSeason === "All Seasons" ||
                badge.includes(selectedSeason);

            const methodMatch =
                selectedMethod === "All Methods" ||
                badge.includes(selectedMethod);


            if (cropMatch && seasonMatch && methodMatch) {

                card.parentElement.style.display = "block";

            } else {

                card.parentElement.style.display = "none";

            }

        });
    }

});