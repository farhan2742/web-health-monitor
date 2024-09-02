// Import Statements

import * as d3 from 'd3';                                                                       // Data Visualization Library

// Definition Statements

const createChart = async (data) => {                                                           // Function that creates a hierarchical chart

    // Set the dimensions and margins of the Chart

    const margin = {top: 150, right: 150, bottom: 30, left: 150},                               // Set Margin for the chart
          width = 1000 - margin.left - margin.right,                                            // Set Width for the chart
          height = 400 - margin.top - margin.bottom;                                            // Set Height for the chart

    // Declare a tree layout and assigns the size

    const treemap = d3.tree().size([height, width-400]);                                        // Create a treemap
    treemap.nodeSize([25,200])                                                                  // Set the node size (spacing between ndoes)

    //  Assign the data to a hierarchy using parent-child relationships

    let nodes = d3.hierarchy(data, function(d) {                                                // Create tree nodes with formated data and a function to return children nodes
        return d.children;                                                                      // Return children nodes
    });
    nodes = treemap(nodes);                                                                     // Map the node data to the tree layout

    // Select the output div and append an svg to it

    let canvas = d3.select('#subUrlChart').append('svg')                                        // Select canvas for the chart and append and append an svg to it
        .attr("width", width + margin.left + margin.right)                                      // Set width for the canvas
        .attr("height", height + margin.top + margin.bottom)                                    // Set height for the canvas
    const g = canvas.append("g")                                                                // Append canvas with group element
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");                // Move the 'group' element to the top left margin

    // Add Link between nodes

    const link = g.selectAll(".link")                                                           // Select all with .link tag in group element
        .data(nodes.descendants().slice(1))                                                     // Provide node's decentants as data
        .enter()                                                                                // Enter data one by one
        .append("path")                                                                         // Append each decentant with 'path' element
            .attr("class", "link")                                                              // Add link class to each decentant
            .style("stroke", function(d) { return d.data.level; })                              // Add stroke to path
            .attr("d", function(d) {                                                            // Add attribute 'd' to each decentant using a function
                return "M" + d.y + "," + d.x                                                    // Return decentant position and link
                    + "C" + (d.y + d.parent.y) / 2 + "," + d.x                                  
                    + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x                           
                    + " " + d.parent.y + "," + d.parent.x;                                      
            });

    // Add each node as a group

    const node = g.selectAll(".node")                                                           // Select all elements with 'node' class
        .data(nodes.descendants())                                                              // Provide node's decentants as data
        .enter()                                                                                // Enter the data
        .append("g")                                                                            // Append the decentent with group element
            .attr("class", function(d) {                                                        // Add node--internal or node--leaf class to decentants using a function
                return "node" + (d.children ? " node--internal" : " node--leaf");               // Return the class
            })
            .attr("transform", function(d) {                                                    // Move the group to correct position using a function
                return "translate(" + d.y + "," + d.x + ")";                                    // Return the position
            });

    // Add the text to the node

    node.append("text")                                                                         // Append each node with 'text' element
        .attr("dy", ".35em")                                                                    // Set dy attribute of text element
        .attr("x", function(d) {                                                                // Set x attribute of text element using a function
            return d.children ? (d.data.value + 4) * -1 : d.data.value + 4;                     // Return value of x attribute
        })                                                        
        .style("text-anchor", function(d) {                                                     // Add text-anchor style using a function
            return d.children ? "end" : "start";                                                // Return the value of text-anchor element
        })
        .text(function(d) {                                                                     // Set the text for text element using a function
            return d.data.name;                                                                 // Set Return the value of name from each node as text
        });                                             
};

export default createChart;                                                                     // Export createChart function