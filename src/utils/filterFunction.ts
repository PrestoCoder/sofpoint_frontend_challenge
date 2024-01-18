export const filterFunction = () => {
    var input, filter, ul, li, a, i, div, txtValue;
    input = document.getElementById("myInput") as HTMLInputElement; // Explicit cast to HTMLInputElement

    // Check if input is not null before accessing properties
    if (input) {
        filter = input.value.toUpperCase();
    } else {
        return; // Exit the function if input is null
    }

    div = document.getElementById("myDropdown");

    // Check if div is not null before accessing properties
    if (div) {
        a = div.getElementsByTagName("a");

        for (i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;

            // Check if txtValue is not null before accessing properties
            if (txtValue && txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
        }
    }
};
