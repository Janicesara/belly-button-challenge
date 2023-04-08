
// Get the endpoint of the URL 
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch the JSON data and console log it
d3.json(url).then(function(data_collected) {
  console.log(data_collected);
});

// initiating the plot

function init(){
 
// to select drop down menu and sampling the drop down menu for visibility 
let dropdown = d3.select("#selDataset");

d3.json(url).then((data_collected) =>  {

let names = data_collected.names;

names.forEach((id) => {

console.log(id);

dropdown.append("option")
.text(id)
.property("value",id);
});

//To display the first list from the sample and logging it.

let first_sample = names[0];
console.log(first_sample);

// defining the initial plot
plotting_meta_data(first_sample);
plotting_bar_chart(first_sample);
plotting_bubble_chart(first_sample);
});
};


// to populate all the meta data 

function plotting_meta_data(sample){
d3.json(url).then((data_collected) =>  {

    let metadata = data_collected.metadata;
    // filtering the value 
    let value = metadata.filter(results => results.id==sample);

    console.log(value)

    let first_index_value= value[0];
    d3.select("#sample-metadata").html("");

    Object.entries(first_index_value).forEach(([key,value])=>{
        console.log (key,value);

        d3.select("#sample-metadata").append("h5").text(`${key}:${value}`);
    });
});
};

 //Building the bar chart
function plotting_bar_chart(sample) {
    d3.json(url).then((data_collected) => {

let sample_information = data_collected.samples;

let value = sample_information.filter(result => result.id == sample);

let valueData = value[0];

let otu_ids = valueData.otu_ids;
let otu_labels = valueData.otu_labels;
let sample_values = valueData.sample_values;

console.log(otu_ids,otu_labels,sample_values);

// selecting top 10 in descending order. 
        let x_bar_values = sample_values.slice(0,10).reverse();
        let y_bar_values = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
        let labels = otu_labels.slice(0,10).reverse();
        
        //  bar chart trace
        let trace_1 = {
            x: x_bar_values,
            y: y_bar_values,
            text: labels,
            type: "bar",
            orientation: "h"
        };
        Plotly.newPlot("bar", [trace_1])
    });
};
// Building the bubble chart.
function plotting_bubble_chart(sample) {

    d3.json(url).then((data_collected) => {
        let sampleInfo = data_collected.samples;

        let value = sampleInfo.filter(result => result.id == sample);

        let valueData = value[0];

        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

        console.log(otu_ids,otu_labels,sample_values);
        
        //bubble chart trace
        let trace_2 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "YlGnBu"
            }
        };

        // set layout
        let layout = {
            
            hovermode: "closest",
            xaxis: {title: "OTU ID"},
        };

        Plotly.newPlot("bubble", [trace_2], layout)
    });
};

// updating dashboard when the sample selection is changed
function optionChanged(value) { 
    console.log(value); 

    //call functions
    plotting_meta_data(value);
    plotting_bar_chart(value);
    plotting_bubble_chart(value);
};

init();
