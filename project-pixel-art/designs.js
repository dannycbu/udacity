function makeGrid(width, height) {
    let pixelCanvas, grid;
    pixelCanvas = $("#pixel_canvas");
    //remove existing grid
    if (pixelCanvas.children().length) {
        pixelCanvas.empty();
    }
    //create new table rows
    for (let i = 0; i < height; i++) {
        grid += "<tr>";
        //add table elements in each row
        for (let j = 0; j < width; j++) {
            grid += "<td></td>";
        }
        grid += "</tr>";
    }
    pixelCanvas.html(grid);
    //white background for all cells
    pixelCanvas.css("background-color", "#ffffff");
};

$(document).ready(function () {
    $("#submit-btn").click(function (event) {
        let height, width;
        width = $("#input_width").val();
        height = $("#input_height").val();
        event.preventDefault();
        makeGrid(width, height);
    });

    $("#pixel_canvas").click(function (event) {
        let color = $("#colorPicker").val();
        $(event.target).css("background-color", color);
    });
});