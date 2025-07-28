document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('search_filter');
    
    selectElement.addEventListener('change', function() {
        const selectedValue = this.value;
        console.log('Selected value:', selectedValue);
    });
});


function searchGetSelectedValue() {
    const selectElement = document.getElementById('search_filter');
    return selectElement.value;
}