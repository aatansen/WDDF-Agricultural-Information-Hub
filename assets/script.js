document.addEventListener("DOMContentLoaded", function () {

    // Contact form
    const form = document.getElementById("expertForm");
    const formMessage = document.getElementById("formMessage");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            if (form.checkValidity()) {
                formMessage.classList.remove("d-none");
                form.reset();
            }
        });
    }

    // Farming guide filters
    const cropFilter = document.getElementById("cropFilter");
    const seasonFilter = document.getElementById("seasonFilter");
    const methodFilter = document.getElementById("methodFilter");
    const guides = document.querySelectorAll(".guide");
    const noResults = document.getElementById("noResults");

    if (cropFilter && seasonFilter && methodFilter) {

        function filterGuides() {
            const crop = cropFilter.value;
            const season = seasonFilter.value;
            const method = methodFilter.value;
            let found = false;

            guides.forEach(function (guide) {
                const cropMatch = crop === "all" || guide.dataset.crop === crop;
                const seasonMatch = season === "all" || guide.dataset.season === season;
                const methodMatch = method === "all" || guide.dataset.method === method;

                if (cropMatch && seasonMatch && methodMatch) {
                    guide.style.display = "block";
                    found = true;
                } else {
                    guide.style.display = "none";
                }
            });

            if (found) {
                noResults.classList.add("d-none");
            } else {
                noResults.classList.remove("d-none");
            }
        }

        cropFilter.addEventListener("change", filterGuides);
        seasonFilter.addEventListener("change", filterGuides);
        methodFilter.addEventListener("change", filterGuides);
    }
});
