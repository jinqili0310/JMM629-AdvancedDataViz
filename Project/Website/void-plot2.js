d3.csv("Data/category.csv", function(error, myData) {
    if (error) {
        console.log("Had an error loading file.");
    }
    var myArray = [];
        myData.forEach(function(d, i){
            // now we add another data object value, a calculated value.
            // here we are making strings into numbers using type coercion
            d.count1 = +d.count1;
            d.count2 = +d.count2;
            d.count3 = +d.count3;
            d.count4 = +d.count4;
            d.count5 = +d.count5;
            d.count6 = +d.count6;
            d.count7 = +d.count7;
            d.count8 = +d.count8;
            d.count9 = +d.count9;
            d.count10 = +d.count10;
            if (d.count1 == "0") {
                d.count1 = "";
            };
            if (d.count2 == "0") {
                d.count2 = "";
            };
            if (d.count3 == "0") {
                d.count3 = "";
            };
            if (d.count4 == "0") {
                d.count4 = "";
            };
            if (d.count5 == "0") {
                d.count5 = "";
            };
            if (d.count6 == "0") {
                d.count6 = "";
            };
            if (d.count7 == "0") {
                d.count7 = "";
            };
            if (d.count8 == "0") {
                d.count8 = "";
            };
            if (d.count9 == "0") {
                d.count9 = "";
            };
            if (d.count10 == "0") {
                d.count10 = "";
            };
            // Add a new array with the values of each:
            myArray.push([d.abbreviation, d.count1, d.alcoholRelated, d.count2, d.artist, d.count3, d.brand, d.count4, d.crewOrLabel, d.count5, d.cultureRelated, d.count6, d.importedWord, d.count7, d.interjection, d.count8, d.place, d.count9, d.slang, d.count10]);
        });
        console.log(myData);
        console.log(myArray);

        var table = d3.select("#plot2").append("table");
        var header = table.append("thead").append("tr");
        header
                .selectAll("th")
                .data(["Abbr.", "count", "Alcohol Related", "count", "Artist", "count", "Brand", "count", "Crew or Label", "count", "Culture Related", "count", "Imported Word", "count", "Interjection", "count", "Place", "count", "Slang", "count"])
                .enter()
                .append("th")
                .text(function(d) { return d; });
        var tablebody = table.append("tbody");
        rows = tablebody
                .selectAll("tr")
                .data(myArray)
                .enter()
                .append("tr");
                cells = rows.selectAll("td")
        // each row has data associated; we get it and enter it for the cells.
            .data(function(d) {
                console.log(d);
                return d;
            })
            .enter()
            .append("td")
            .text(function(d) {
                return d;
            });
})