# belly-button-challenge


This [Interactive deployment dashboard ](https://janicesara.github.io/belly-button-challenge/) can be used to explore the Belly Button Biodiversity dataset which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Direct Link to the deployed Dashboard - https://janicesara.github.io/belly-button-challenge

Various plots such as Bar Graph and Bubble Graphs were used for visualizing the Dataset as well as  Metadata updates when a new sample is selected through the drop down menu .

Complete the following steps:

Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

Use sample_values as the values for the bar chart.

Use otu_ids as the labels for the bar chart.

Use otu_labels as the hovertext for the chart.

bar Chart
![BarPlot](https://user-images.githubusercontent.com/120125587/230746438-5d7e4e1a-85fd-4982-a2d9-5a4123bcc0bd.png)


Create a bubble chart that displays each sample.

Use otu_ids for the x values.

Use sample_values for the y values.

Use sample_values for the marker size.

Use otu_ids for the marker colors.

Use otu_labels for the text values.

Bubble Chart
![image](https://user-images.githubusercontent.com/120125587/230745599-87e4c0fe-bd08-41c1-b47b-63137858df3d.png)

Display the sample metadata, i.e., an individual's demographic information.

Display each key-value pair from the metadata JSON object somewhere on the page.



